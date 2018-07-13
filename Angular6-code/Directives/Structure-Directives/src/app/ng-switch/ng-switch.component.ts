import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  public SelectedBatch: string;

  public Batches = ['Project' , 'UNIX' , 'Angular' ];

  constructor() { }

  ngOnInit() {
  }

}
