import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {
  constructor(private dataService: DataService){

  }

  fileComplete(){
    return this.dataService.fileComplete()
  }

  sendFile(){
    
  }
  get naam(){
    return this.dataService.naam
  }

  get email(){
    return this.dataService.email
  }

  get datum(){
    return this.dataService.datum
  }

  get selectedRover(){
    return this.dataService.selectedRover
  }

  get selectedCamera(){
    return this.dataService.selectedCamera
  }
  get firstPhoto(){
    return this.dataService.firstPhoto
  }
}
