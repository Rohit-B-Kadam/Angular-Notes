import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demonstration of Function';
  demoString:string = "Sonam";
  len:number = this.demoString.length;
  uppercaseString:string = this.demoString.toUpperCase();


  public fun():number
  {
    return 2+4;
  }

}
