import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
  animations: [

    trigger('switch-button', [
      state(':enter', style({
        transform: 'scale(1.1)',
      })),
      state(':leave', style({
        transform: 'scale(1.0)',
      })),

      transition('inactive => active', animate(500)),
      transition('active => inactive', animate(500))
    ]),
  ]
})
export class SwitchButtonComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
