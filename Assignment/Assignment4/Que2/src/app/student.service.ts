import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from './istudent';


@Injectable({
  providedIn: 'root'
})

export class StudentService {
  
  // add dependence in service constructor 
  constructor( private http:HttpClient ) 
  { 

  }

  private  _url:string = "/assets/Data/studentDetail.json";

  //write method in service class which returns array of student information

  GetStudentDetails():Observable<IStudent[]>
  {
    return this.http.get<IStudent[]>(this._url);
  }
}
