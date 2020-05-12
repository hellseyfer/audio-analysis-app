import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/shared/services/results/results.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  $data: Observable<any>;

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.$data = this.resultsService.getResults();
  }

}
