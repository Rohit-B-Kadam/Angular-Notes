import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLanguageComponent } from './programming-language.component';

describe('ProgrammingLanguageComponent', () => {
  let component: ProgrammingLanguageComponent;
  let fixture: ComponentFixture<ProgrammingLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
