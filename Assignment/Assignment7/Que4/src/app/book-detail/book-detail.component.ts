import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  public books = []
  displayedColumns: string[] = ['name', 'author' ,'price','pages'];
  public dataSource;

  constructor(private _bookservice : BookService ) {  }

  ngOnInit() {
    this.books =  this._bookservice.GetBooksDetail();
    this.dataSource = this.books;
  }

}
