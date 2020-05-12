import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioUploadComponent } from './features/audio-upload/audio-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialFileInputModule, FileInputConfig, NGX_MAT_FILE_INPUT_CONFIG } from 'ngx-material-file-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TitleComponent } from './features/title/title.component';
import { ResultsComponent } from './features/results/results.component';
import { ProgressBarComponent } from './features/progress-bar/progress-bar.component';
import {  MatProgressBarModule  } from '@angular/material/progress-bar';
import { LoaderService } from './shared/services/loader/loader.service';
import { LoaderInterceptor } from './shared/services/interceptors/loader-interceptor.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';

export const config: FileInputConfig = {
  sizeUnit: 'Octet'
};

const material = [
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [
    AppComponent,
    AudioUploadComponent,
    TitleComponent,
    ResultsComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialFileInputModule,
    BrowserAnimationsModule,
    material,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    { provide: NGX_MAT_FILE_INPUT_CONFIG, useValue: config },
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
