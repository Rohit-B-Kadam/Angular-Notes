import { Component, OnInit } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public model:Student = new Student("","","");

  ngOnInit() {
  }

  public onSubmit()
  {
    console.log("\n-----------------------------------\n");
    console.log("Student Detail\n");
    console.log("Name: "+this.model.name);
    console.log("College: "+this.model.college);
    console.log("Password: "+this.model.password);
  }
}
