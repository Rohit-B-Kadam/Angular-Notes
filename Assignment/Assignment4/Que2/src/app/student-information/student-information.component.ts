import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit 
{

  //Create Empty Array to stored students Info
	public students = [];
	public flag:boolean = false;

  constructor( private _studentservice: StudentService) 
  {

  }

  ngOnInit() {
		this._studentservice.GetStudentDetails().subscribe(data=>this.students=data);		
  }

  displayInfo()
  {
		this.flag = (this.flag)? false : true;
		
	}

}
