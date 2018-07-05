import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sub-component3',
  templateUrl: './sub-component3.component.html',
  styleUrls: ['./sub-component3.component.css']
})
export class SubComponent3Component implements OnInit {

  public books = [];

  constructor( private _bookservice: BookService) 
  {
    
  }

  ngOnInit() 
  {
    this.books = this._bookservice.GetBooksDetail();
  }
}
