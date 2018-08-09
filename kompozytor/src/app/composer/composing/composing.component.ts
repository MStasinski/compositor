import {Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";


/** @title Select with option groups */
@Component({
  selector: 'app-composing',
  templateUrl: './composing.component.html',
  styleUrls: ['./composing.component.scss'],

  animations: [
    trigger('switch-panel-left', [
      state('off', style({
        width: '40%'
      })),
      state('on', style({
        width: '50%'
      })),
      /*transition('off => on', [animate('2s', style({width: '50%'}))]),
      transition('on => off', [animate('2s', style({width: '40%'}))])*/
    ]),
    trigger('switch-panel-right', [
      state('off', style({
        width: '60%'
      })),
      state('on', style({
        width: '50%'
      })),
     /* transition('off => on', animate('1000ms 1s ease-in', style({width: '10%'}))),
      transition('on => off', animate('1000ms 1s ease-out', style({width: '60%'})))*/
    ])
  ]
})
export class ComposingComponent {
  state = 'off';
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  toggleSize() {
    console.log("zmien rozmiar");
    this.state = (this.state == "off") ? "on" : "off";
  }
}
