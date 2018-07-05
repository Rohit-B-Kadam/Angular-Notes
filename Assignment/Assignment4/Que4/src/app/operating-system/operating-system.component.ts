import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operating-system',
  templateUrl: './operating-system.component.html',
  styleUrls: ['./operating-system.component.css']
})
export class OperatingSystemComponent implements OnInit {

  public OperatingSystem = [
    { Name : "UNIX" , Founder : "Dennis Ritchie"},
    { Name : "Macintosh" , Founder : "Steve Jobs"},
    { Name : "Linux" , Founder : "Linux Torvalds"},
    { Name : "Window" , Founder : "Bill Gate"},
    { Name : "Android" , Founder : "Andy Rubin"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
