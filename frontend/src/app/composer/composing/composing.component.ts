import {Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';


/** @title Select with option groups */
@Component({
  selector: 'app-composing',
  templateUrl: './composing.component.html',
  styleUrls: ['./composing.component.scss'],

  animations: [
    trigger('switch-panel-left', [
      state('inactive', style({
        width: '40%',
      })),
      state('active', style({
        width: '50%',
      })),

      transition('inactive => active', animate(500)),
      transition('active => inactive', animate(500))
    ]),

    trigger('image-header', [
      state('inactive', style({
        width: '100%',
      })),
      state('active', style({
        width: '100%',
      })),

    ]),
    trigger('switch-button', [
      state('inactive', style({
        marginLeft: '376px',
      })),
      state('active', style({
        marginLeft: '476px',
      })),

      transition('inactive => active', animate(500)),
      transition('active => inactive', animate(500))
    ]),

    trigger('switch-panel-right', [
      state('active', style({
        width: '50%'
      })),
      state('inactive', style({
        width: '60%'
      })),

      transition('inactive => active', animate(500)),
      transition('active => inactive', animate(500))
    ])
  ]
})
export class ComposingComponent {
  state = 'inactive';
  positionSwitchButton = {left: '0', top: '-52px'};

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
    this.state = this.state === 'active' ? 'inactive' : 'active';
    console.log('zmien rozmiar');
    let topParam = '-52px';
    this.state === 'inactive' ? topParam = '-52px' : topParam = '-104px'
    this.positionSwitchButton = {left: '0', top: topParam};
  }
}
