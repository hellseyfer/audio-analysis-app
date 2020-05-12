import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  results_array = [];
  results: Subject<any> = new Subject();

  constructor() { }

  setResult(r) {
    this.results_array.push(r);
    this.results.next(this.results_array);
  }

  getResults(){
    return this.results.asObservable();
  }

  resetResults() {
    this.results_array = [];
    this.results.next(this.results_array);
  }
}
