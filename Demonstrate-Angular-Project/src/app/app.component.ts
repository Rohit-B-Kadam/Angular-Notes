//root component
import { Component } from '@angular/core';



//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Demonstrate of Angular';
  public name = "Rohit Kadam"
}
