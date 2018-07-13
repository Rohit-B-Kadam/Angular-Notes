import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  public Prog_Lang = [ 'C' , 'C++' , 'Java' , 'PHP' , 'Python'];
  constructor() { }

  ngOnInit() {
  }

}
