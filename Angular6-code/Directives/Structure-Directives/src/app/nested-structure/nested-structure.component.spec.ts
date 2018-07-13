import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedStructureComponent } from './nested-structure.component';

describe('NestedStructureComponent', () => {
  let component: NestedStructureComponent;
  let fixture: ComponentFixture<NestedStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
