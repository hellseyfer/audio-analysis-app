import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';
import { AudioUploadService } from './services/audio-upload.service';
import { ResultsService } from 'src/app/shared/services/results/results.service';
import { HttpEvent } from '@angular/common/http/http';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

@Component({
  selector: 'app-audio-upload',
  templateUrl: './audio-upload.component.html',
  styleUrls: ['./audio-upload.component.scss']
})
export class AudioUploadComponent implements OnInit {
  myForm: FormGroup;
  readonly maxSize = 104857600; // it's 100 MB (=100 * 2 ** 20).
  loading: boolean;

  get fileSource(): FormGroup {
    return this.myForm.get('fileSource') as FormGroup
  }

  get file(): FormGroup {
    return this.myForm.get('file') as FormGroup
  }

  constructor(private fb: FormBuilder,
    private audioUploadService: AudioUploadService,
    private resultsService: ResultsService,
    private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe((v) => {
      console.log(v);
      this.loading = v;
    });
  }

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm() {
    return this.myForm = this.fb.group({
      file: ['', [Validators.required, FileValidator.maxContentSize(this.maxSize)]],
      fileSource: ['', [Validators.required]],
    })
  }

  onSubmit() {
    const formData = new FormData(); // a pair of key value sets
    formData.append('file', this.fileSource.value);
    this.audioUploadService.postAudioFile(formData).then(res => {
      console.log(res);
      this.resultsService.setResult(res.tonal);
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  resetResults(){
    this.resultsService.resetResults();
  }

}
