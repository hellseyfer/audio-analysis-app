import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AudioUploadService {

  private URL_API = environment.ws_url;
  private URL_FILE = '/api/upload'

  constructor(private http: HttpClient) { }

  async postAudioFile(file: any) {
/*     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    }; */
    try {
      return await this.http
        .post<any>(
          this.URL_API + this.URL_FILE,
          file,
          //httpOptions
        )
        .toPromise();
    } catch (err) {
      console.log(err);
    }
  }

}
