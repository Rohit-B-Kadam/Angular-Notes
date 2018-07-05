import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  public Database = [
    { Name : "MYSQL" },
    { Name : "PGSQL"},
    { Name : "MONGOBD"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
