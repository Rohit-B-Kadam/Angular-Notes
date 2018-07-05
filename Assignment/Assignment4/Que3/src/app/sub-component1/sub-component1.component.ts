import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sub-component1',
  templateUrl: './sub-component1.component.html',
  styleUrls: ['./sub-component1.component.css']
})
export class SubComponent1Component implements OnInit 
{
  public books = [];

  constructor( private _bookservice: BookService) 
  {
    
  }

  ngOnInit() 
  {
    this.books = this._bookservice.GetBooksDetail();
  }

}
