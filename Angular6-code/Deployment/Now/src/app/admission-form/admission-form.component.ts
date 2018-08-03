import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  public model:Student = new Student("", "", "", "", "", "", "");

  ngOnInit() {
  }

  public displayInConsole()
  {
    console.log("\n\n-------------------------------------------------------\n");
    console.log("Student Detail:");
    console.log("\nName: "+this.model.StudName);
    console.log("\nMobile Number: "+this.model.StudMobile);
    console.log("\nEmail: "+this.model.StudEmail);
    console.log("\nGender: "+this.model.StudGender);
    console.log("\nCollege: "+this.model.StudCollege);
    console.log("\nBatch: "+this.model.StudBatch);
    console.log("\nAddress: "+this.model.StudAddress);
    
  }
}
