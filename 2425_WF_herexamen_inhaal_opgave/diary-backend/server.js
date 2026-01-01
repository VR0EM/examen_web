const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const DB_FILE = path.join(__dirname, 'db.json');

function loadData() {
  const buffer = fs.readFileSync(DB_FILE);
  return JSON.parse(buffer.toString());
}

function saveData(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// Get all entries (optional filter by runType)
app.get('/entries', (req, res) => {
  const data = loadData();
  let entries = data.entries || [];

  const runType = req.query.runType;
  if (runType) {
    entries = entries.filter(e => (e.runType || '').toLowerCase() === String(runType).toLowerCase());
  }

  res.json(entries);
});

// Get single entry by id
app.get('/entries/:id', (req, res) => {
  const data = loadData();
  const id = parseInt(req.params.id, 10);
  const entry = (data.entries || []).find(e => e.id === id);
  if (!entry) {
    return res.status(404).json({ error: 'Entry not found' });
  }
  res.json(entry);
});

// Add new entry
app.post('/entries', (req, res) => {
  const data = loadData();
  const newEntry = req.body || {};
  const entries = data.entries || [];
  const maxId = entries.length > 0 ? Math.max(...entries.map(e => Number(e.id) || 0)) : 0;
  newEntry.id = maxId + 1;
  data.entries = data.entries || [];
  data.entries.push(newEntry);
  saveData(data);
  res.status(201).json(newEntry);
});

// Delete entry by id
app.delete('/entries/:id', (req, res) => {
  const data = loadData();
  const id = parseInt(req.params.id, 10);
  const beforeLength = (data.entries || []).length;
  data.entries = (data.entries || []).filter(e => e.id !== id);
  if (data.entries.length === beforeLength) {
    return res.status(404).json({ error: 'Entry not found' });
  }
  saveData(data);
  res.status(204).send();
});

// Update entry by id
app.put('/entries/:id', (req, res) => {
  const data = loadData();
  const id = parseInt(req.params.id, 10);
  const entries = data.entries || [];
  const index = entries.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Entry not found' });
  }
  const updated = { ...entries[index], ...req.body, id };
  entries[index] = updated;
  data.entries = entries;
  saveData(data);
  res.json(updated);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Diary backend running on http://localhost:${PORT}`);
});


