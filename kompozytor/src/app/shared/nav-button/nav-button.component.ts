import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {

  @Input()
  num: number;

  @Input()
  tekst: string;

  constructor() {
  }

  ngOnInit() {
  }

}
