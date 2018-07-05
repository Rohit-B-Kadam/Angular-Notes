import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public flag1:boolean = false;
  public flag2:boolean = false;
  public flag3:boolean = false;

  public displaySubcomponent1()
  {
    this.flag1 = true;
    this.flag2 = false;
    this.flag3 = false;
  }

  public displaySubcomponent2()
  {
    this.flag1 = false;
    this.flag2 = true;
    this.flag3 = false;
  }

  public displaySubcomponent3()
  {
    this.flag1 = false;
    this.flag2 = false;
    this.flag3 = true;
  }
}
