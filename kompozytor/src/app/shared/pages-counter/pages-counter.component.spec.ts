import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCounterComponent } from './pages-counter.component';

describe('PagesCounterComponent', () => {
  let component: PagesCounterComponent;
  let fixture: ComponentFixture<PagesCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
