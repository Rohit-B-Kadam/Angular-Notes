import { Component, OnInit } from '@angular/core';

//decorator
@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})

/* demonstrate inline
@Component({
  selector: 'app-mycomp',
  template: `<h2>
  Inside to my new inline code
  </h2>`,
  styles: [`h2{
    color:red;
  }`]
})
*/


export class MycompComponent implements OnInit {

  public demo:string = "Pune"
  public addition:number = 2+8
  public len:number = this.demo.length
  constructor() { }

  ngOnInit() {
  }

  public fun()
  {
    this.demo = "Inside fun"
  }
}
