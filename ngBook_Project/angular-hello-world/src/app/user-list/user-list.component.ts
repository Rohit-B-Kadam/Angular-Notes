import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public names: string[];

  constructor() { 
    this.names = ['Sonam' , 'Shubhya' , 'Sankya' , 'Harshal' , 'Abhya' , 'Chandya'];
  }

  ngOnInit() {
  }

}
