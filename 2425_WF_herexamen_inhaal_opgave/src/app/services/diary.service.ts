import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiaryEntry } from '../models/diary-entry.model';

@Injectable({ providedIn: 'root' })
export class DiaryService {
  // Schakelaar voor backend type: false = Express (3000), true = Nest (3001)
  private readonly useNestBackend = false;
  private baseUrl = this.useNestBackend ? 'http://localhost:3001' : 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEntries(runType?: string | null): Observable<DiaryEntry[]> {
    let url = `${this.baseUrl}/entries`;
    if (runType) {
      url += `?runType=${encodeURIComponent(runType)}`;
    }
    return this.http.get<DiaryEntry[]>(url);
  }

  getEntryById(id: number): Observable<DiaryEntry> {
    return this.http.get<DiaryEntry>(`${this.baseUrl}/entries/${id}`);
  }

  addEntry(entry: DiaryEntry): Observable<DiaryEntry> {
    return this.http.post<DiaryEntry>(`${this.baseUrl}/entries`, entry);
  }

  deleteEntry(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/entries/${id}`);
  }

  updateEntry(id: number, entry: DiaryEntry): Observable<DiaryEntry> {
    return this.http.put<DiaryEntry>(`${this.baseUrl}/entries/${id}`, entry);
  }
}


