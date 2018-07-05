import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  public parentSendMessage = "";
  public parentRecieveMessage = "";

  public sendMessageToChild()
  {
    this.parentSendMessage = "Hi, child";
  }
}
