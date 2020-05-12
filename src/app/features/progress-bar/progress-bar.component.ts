import { Component } from '@angular/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';
import { AudioUploadService } from '../audio-upload/services/audio-upload.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'indeterminate';
  value = 50;
  bufferValue = 75;

  constructor(private uploadService: AudioUploadService) { }

}
