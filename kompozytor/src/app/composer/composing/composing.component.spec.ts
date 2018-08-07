import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposingComponent } from './composing.component';

describe('ComposingComponent', () => {
  let component: ComposingComponent;
  let fixture: ComponentFixture<ComposingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
