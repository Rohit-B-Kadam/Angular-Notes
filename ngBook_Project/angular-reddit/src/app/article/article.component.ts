import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {  
  
  @Input() public article: Article;

  constructor() { 

  }

  ngOnInit() {
  }

  public voteUp():boolean
  {
    this.article.voteUp();
    return false;
  }

  public voteDown():boolean
  {
    this.article.voteDown();
    return false;
  }
}
