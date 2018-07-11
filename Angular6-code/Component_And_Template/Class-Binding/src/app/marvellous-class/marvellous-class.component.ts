import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-class',
  templateUrl: './marvellous-class.component.html',
  styleUrls: ['./marvellous-class.component.css']
})
export class MarvellousClassComponent implements OnInit 
{
  public MyClass="success";
  
  public IsSet = false;

  // // CSS classes: added/removed per current state of component properties
  public SetClass = {
    "success" : this.IsSet,
    "failure" : !(this.IsSet)
  }

  constructor() { }

  ngOnInit() {
  }

}
