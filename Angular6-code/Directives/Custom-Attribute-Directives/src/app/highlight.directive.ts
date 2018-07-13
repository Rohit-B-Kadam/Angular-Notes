import { Directive, Input } from '@angular/core';

import { ElementRef } from '@angular/core';   // import for get ref of host element

import { HostListener } from '@angular/core';  // For Applying Listener to listen event handler

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {


  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor: string;

  // Use dependency injection to access DOM element
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onmouseenter() {
    this.setcolor(this.highlightColor || this.defaultColor ||'yellow');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.setcolor(null);
  }

  setcolor(color: string) {
    this.el.nativeElement.style.background = color;
  }

}
