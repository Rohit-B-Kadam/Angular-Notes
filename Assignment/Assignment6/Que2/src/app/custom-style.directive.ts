import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor( private el: ElementRef) { 
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.fontWeight = 'bold';
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
