import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../car-detail';



@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  public isSubmited = false;
  public car = new CarDetail();
  public event;

  constructor() { }

  ngOnInit() {
  }

  public submitData()
  {
    this.isSubmited = true;
  }
}
