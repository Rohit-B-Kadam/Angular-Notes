import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vacation-form',
  templateUrl: './vacation-form.component.html',
  styleUrls: ['./vacation-form.component.css']
})
export class VacationFormComponent implements OnInit {
  public selectedCity: string;
  public selectedStartDate: string;
  public selectedEndDate: string;
  minDate =new Date();
  public cities = [ 'Pune' , 'Mumbai' , 'Nagpur' , 'Karwar'];

  constructor() { }

  ngOnInit() {
  }

}
