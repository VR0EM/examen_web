import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CameraElement, Rover } from '../../types';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component {

  constructor(private dataService: DataService){

  }

  setRover(newRover: Rover){
    this.dataService.selectedRover = newRover
  }

  setCamera(newCamera: CameraElement){
    this.dataService.selectedCamera = newCamera
  }

  get selectedRover(){
    return this.dataService.selectedRover
  }

  get firstPhoto(){
    return this.dataService.firstPhoto
  }

  get rovers(){
    return this.dataService.rovers
  }
}
