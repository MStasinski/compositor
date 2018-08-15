import {Component} from '@angular/core';
import {ContainerComponent, DraggableComponent, IDropResult} from 'ngx-smooth-dnd';
import {applyDrag, generateItems} from '../utils';
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
  items = generateItems(50, i => ({data: 'Draggable ' + i}));
  items1 = generateItems(15, (i) => ({ id: '1' + i, data: `Draggable 1 - ${i}` }));
  items2 = generateItems(15, (i) => ({ id: '2' + i, data: `Draggable 2 - ${i}` }));
  items3 = generateItems(15, (i) => ({ id: '3' + i, data: `Draggable 3 - ${i}` }));
  items4 = generateItems(15, (i) => ({ id: '4' + i, data: `Draggable 4 - ${i}` }));
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  constructor() {
    this.getChildPayload1 = this.getChildPayload1.bind(this);
    this.getChildPayload2 = this.getChildPayload2.bind(this);
    this.getChildPayload3 = this.getChildPayload3.bind(this);
    this.getChildPayload4 = this.getChildPayload4.bind(this);
  }
  onDrop(collection, dropResult) {
    this[collection] = applyDrag(this[collection], dropResult);
  }

  toggleSize() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
    console.log('zmien rozmiar');
    let topParam = '-52px';
    this.state === 'inactive' ? topParam = '-52px' : topParam = '-104px';
    this.positionSwitchButton = {left: '0', top: topParam};
  }
  getChildPayload1(index) {
    return this.items1[index];
  }
  getChildPayload2(index) {
    return this.items2[index];

  }
  getChildPayload3(index) {
    return this.items3[index];

  }
  getChildPayload4(index) {
    return this.items4[index];
  }
}
