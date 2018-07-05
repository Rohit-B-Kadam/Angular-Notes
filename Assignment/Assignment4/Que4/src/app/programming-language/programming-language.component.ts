import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming-language',
  templateUrl: './programming-language.component.html',
  styleUrls: ['./programming-language.component.css']
})
export class ProgrammingLanguageComponent implements OnInit {

  public ProgrammingLanguage = [
    { Name : "C" , Founder : "Dennis Ritchie"},
    { Name : "C++" , Founder : "Bjarne Stroustrup"},
    { Name : "JAVA" , Founder : "James Gosling"},
    { Name : "PHP" , Founder : "Rasmus Lerdorf"},
    { Name : "Python" , Founder : "Guido Van Rossum"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
