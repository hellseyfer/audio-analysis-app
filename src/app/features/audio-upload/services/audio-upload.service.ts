import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AudioUploadService {

  private URL_API = environment.ws_url;
  private URL_FILE = '/upload'

  constructor(private http: HttpClient) { }

  async postAudioFile(file: any) {
    try {
      return await this.http
        .post<any>(
          this.URL_API + this.URL_FILE,
          file
        )
        .toPromise();
    } catch (err) {
      console.log(err);
    }
  }

}
