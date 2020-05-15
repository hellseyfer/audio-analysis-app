import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsBadgetComponent } from './results-badget.component';

describe('ResultsBadgetComponent', () => {
  let component: ResultsBadgetComponent;
  let fixture: ComponentFixture<ResultsBadgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsBadgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsBadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
