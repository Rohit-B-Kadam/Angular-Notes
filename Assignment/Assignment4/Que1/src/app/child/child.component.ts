import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  @Input() public childRecieveMessage;
  @Output() public childSendMessage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public sendMessageToParent()
  {
    this.childSendMessage.emit("Hello, parent");
  }

}
