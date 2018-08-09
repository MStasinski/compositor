import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsCounterComponent } from './questions-counter.component';

describe('QuestionsCounterComponent', () => {
  let component: QuestionsCounterComponent;
  let fixture: ComponentFixture<QuestionsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
