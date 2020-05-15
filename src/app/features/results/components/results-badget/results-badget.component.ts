import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-badget',
  templateUrl: './results-badget.component.html',
  styleUrls: ['./results-badget.component.scss']
})
export class ResultsBadgetComponent implements OnInit {

  @Input() _res: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
