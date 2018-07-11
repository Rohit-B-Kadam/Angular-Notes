import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-style',
  templateUrl: './marvellous-style.component.html',
  styleUrls: ['./marvellous-style.component.css']
})
export class MarvellousStyleComponent implements OnInit {
  public IsSet = true;
  public MyColor = 'Orange';

  public canSave = true;
  public isUnchanged = false;
  public isSpecial = true;

   // CSS styles: set per current state of component properties
   public currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px',
    'color':       this.IsSet        ? 'red'    : 'green'
   };

  constructor() { }

  ngOnInit() {
  }

}
