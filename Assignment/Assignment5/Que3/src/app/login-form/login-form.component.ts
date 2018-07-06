import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public model = new User("","");
  constructor() { }

  ngOnInit() {
  }

  public onSubmit()
  {
    console.log("\n------------------------------------\n");
    console.log("UserName: "+this.model.name);
    console.log("\nPassword: "+this.model.password);
  }
  
}
