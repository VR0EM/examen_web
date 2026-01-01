import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css'
})
export class Step1Component {
  constructor(private dataService: DataService){}

  get datum(){
    return this.dataService.datum
  }

  get email(){
    return this.dataService.email
  }
  set email(newEmail: string){
    this.dataService.email = newEmail
  }


  get naam(){
    return this.dataService.naam
  }
  set naam(newNaam: string){
    this.dataService.naam = newNaam
  }


  get started(){
    return this.dataService.started
  }
  
  get validated(){
    return this.dataService.validated
  }

  enterName(){
    this.dataService.enterName()
  }

  validate(){
    this.dataService.validate()
  }
}
