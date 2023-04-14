import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@capgo/camera-preview';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class HomePage {
  isVideo: boolean = false;

  constructor() { }


  ionViewWillEnter() {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'front',
      height: window.innerHeight,
      width: window.innerWidth,
      toBack: true
    };
    CameraPreview.start(cameraPreviewOptions);
  }


  async recordVid() {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'front',
      width: window.screen.width,
      height: window.screen.height,
    };
    this.isVideo = true;
    CameraPreview.startRecordVideo(cameraPreviewOptions);

  }

  async stopVid() {
    const resultRecordVideo = await CameraPreview.stopRecordVideo();
    this.isVideo = false;
    console.log(resultRecordVideo)
  }
}
