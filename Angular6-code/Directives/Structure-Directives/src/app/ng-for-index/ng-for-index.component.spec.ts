import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForIndexComponent } from './ng-for-index.component';

describe('NgForIndexComponent', () => {
  let component: NgForIndexComponent;
  let fixture: ComponentFixture<NgForIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
