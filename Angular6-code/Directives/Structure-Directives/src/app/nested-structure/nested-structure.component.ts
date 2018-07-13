import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-structure',
  templateUrl: './nested-structure.component.html',
  styleUrls: ['./nested-structure.component.css']
})
export class NestedStructureComponent implements OnInit {
  public ProgrammingLanguage = [
    {'Name' : 'C' , 'Development' : 'Application' },
    {'Name' : 'C++' , 'Development' : 'Application' },
    {'Name' : 'JAVA' , 'Development' : 'Application' },
    {'Name' : 'PHP' , 'Development' : 'Web' },
    {'Name' : 'HTML' , 'Development' : 'Web'},
    {'Name' : 'Select development Type' , 'Development' : 'NotLanguage'}
  ];

  public typeSelected: string;
  constructor() {
    this.typeSelected = 'NotLanguage';
   }

  ngOnInit() {
  }

}
