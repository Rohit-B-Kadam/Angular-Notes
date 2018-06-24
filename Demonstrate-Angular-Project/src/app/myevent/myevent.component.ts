import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrls: ['./myevent.component.css']
})
export class MyeventComponent implements OnInit {

  changingText = "Hi,";
  constructor() { }

  ngOnInit() {
  }

    public fun()
    {
      this.changingText = "How are you?";
    }
}
