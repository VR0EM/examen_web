export interface Welcome {
    rovers: Rover[];
    photos: Photo[];
}

export interface Photo {
    id:         number;
    sol:        number;
    camera:     PhotoCamera;
    img_src:    string;
    earth_date: string;
    rover:      Rover;
}

export interface PhotoCamera {
    id:        number;
    name:      string;
    rover_id:  number;
    full_name: string;
}

export interface Rover {
    id:           number;
    name:         string;
    landing_date: string;
    launch_date:  string;
    status:       string;
    max_sol:      number;
    max_date:     string;
    total_photos: number;
    cameras:      CameraElement[];
}

export interface CameraElement {
    name:      string;
    full_name: string;
}