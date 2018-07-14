import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  Books = [
    {name: "ngbook" , price: 4108 ,  author: "Ari Lerner, Felipe Coury, Carlos Taborda", pages: 622 },
    {name: "Angular From Theory To Practice" , price: 0 ,  author: "Asim Hussain", pages: 674 },
    {name: "Learning TypeScript" , price: 849 ,  author: "Remo H. Jansen", pages: 333 }
  
  ]
  constructor() { }

  public GetBooksDetail()
  {
    return this.Books;
  }
}
