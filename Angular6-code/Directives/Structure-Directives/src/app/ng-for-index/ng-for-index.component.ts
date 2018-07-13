import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-index',
  templateUrl: './ng-for-index.component.html',
  styleUrls: ['./ng-for-index.component.css']
})
export class NgForIndexComponent implements OnInit {
  public Prog_Lang = [ 'C' , 'C++' , 'Java' , 'PHP' , 'Python'];
  constructor() { }

  ngOnInit() {
  }

}
