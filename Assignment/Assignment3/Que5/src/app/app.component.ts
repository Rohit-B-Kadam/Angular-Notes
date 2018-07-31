import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Text = "Marvellous InfoSystem";

  public fun()
  {
    this.Text = "Button Clicked";
  }
}
