import { Injectable } from '@angular/core';
import { CameraElement, Photo, Rover } from '../types';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _naam: string = "";
  private _email: string = "";
  private _datum: Date|undefined;

  private _started: boolean = false;
  private _validated: boolean = true;
  
  private _rovers: Rover[]|undefined
  private _selectedRover: Rover|undefined;

  private _selectedCamera: CameraElement|undefined

  private _photos: Photo[]|undefined

  constructor(private client: HttpClient) { 
    this.getRovers()
    this.getPhotos()
  }
  
  async getRovers(){
    this._rovers = await firstValueFrom(this.client.get<Rover[]>("http://localhost:3500/rovers"))
  }

  async getPhotos(){
    this._photos = await firstValueFrom(this.client.get<Photo[]>("http://localhost:3500/photos"))
  }

  public get rovers(){
    return this._rovers
  }
  public get selectedRover(): Rover|undefined{
    return this._selectedRover
  }
  public set selectedRover(newRover: Rover){
    this._selectedRover = newRover
  }

  public get selectedCamera(): CameraElement|undefined{
    return this._selectedCamera
  }
  public set selectedCamera(newCamera: CameraElement){
    this._selectedCamera = newCamera
  }

  public get firstPhoto(){
    return this._photos?.find(photo => photo.camera.name === this.selectedCamera?.name)
  }

  public get started(){
    return this._started
  }

  public get validated(){
    return this._validated
  }

  public get naam() {
    return this._naam;
  }
  public set naam(newNaam: string){
    this._naam = newNaam
  }

  public get email() {
    return this._email;
  }
  public set email(newEmail: string){
    this._email = newEmail
  }

  public get datum() {
    return this._datum;
  }
  
  enterName(){
    if (!this._started) {
      this._datum = new Date()
    }
    this._started = true;
    this._email = this._naam.replaceAll(" ", ".").toLowerCase() + "@ap.be"
  }

  validate(){
    if (this._email.includes(".") && this._email.includes("@")) {
      this._validated = true;
    }else{
      this._validated = false;
    }
  }

  fileComplete(){
    if (this._naam !== "" && this._selectedCamera && this._email !== "" && this._validated){
      return true
    }
    return false
  }

}
