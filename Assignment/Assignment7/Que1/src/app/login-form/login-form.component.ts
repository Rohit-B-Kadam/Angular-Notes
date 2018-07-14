import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public userName:string;
  public password:string;
  public showLoginForm = true;

  constructor() { }

  ngOnInit() {
  }

  public showDetail()
  {
    if( this.userName && this.password )
      this.showLoginForm = false;
  
  }

}
