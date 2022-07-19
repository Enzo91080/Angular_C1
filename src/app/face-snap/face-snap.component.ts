import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {FaceSnapsServices} from "../services/face-snaps.services";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;
  buttonText!:string;
  constructor(private faceSnapsService: FaceSnapsServices) {}

  ngOnInit(){
    this.buttonText = "J\'aime";
  }

  onSnap(){
    if(this.buttonText === 'J\'aime'){
      this.faceSnap.snaps++;
      this.buttonText = 'Enlever';
    }
    else {
      this.faceSnap.snaps--;
        this.buttonText = "J\'aime";
      }
  }
}
