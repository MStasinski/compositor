import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

export interface ButtonConfig {
  left: string;
  top: string;
}

@Directive({
  selector: '[appSwitchButton]'
})
export class SwitchButtonDirective implements OnInit {

  @Input()
  position: ButtonConfig;

  constructor(private element: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.element.nativeElement.querySelector('#image').style.backgroundPosition = '0 0';
  }

  @HostListener('mouseenter')
  mouseEnter(event: Event) {
    this.element.nativeElement.querySelector('#image').style.backgroundPositionY = this.position.top;
    this.element.nativeElement.querySelector('#image').style.backgroundPositionX = this.position.left;
  }

  @HostListener('mouseleave')
  mouseLeave(event: Event) {
    this.element.nativeElement.querySelector('#image').style.backgroundPosition = '0 0';
  }
}
