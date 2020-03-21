import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public studentCollection: AngularFirestoreCollection<Student>
  public students: Observable<Student[]>;
  

  public studentDoc: AngularFirestoreDocument<Student>;
  public student1: Observable<Student>;

  public updateStudent: Student = new Student("Dhonam","Kadam",2,"Wadia");

  constructor( private _db : AngularFirestore) 
  {
    //Taking whole Collection
    this.studentCollection = _db.collection<Student>('Student');
    this.students = this.studentCollection.valueChanges();

    // Taking one whole document
    this.studentDoc = _db.doc<Student>('Student/Student2');
    this.student1 = this.studentDoc.valueChanges();

    //Adding New Student in Collection
    this.studentCollection.add(JSON.parse( JSON.stringify(this.updateStudent)));
  }

  public update()
  {
    this.studentDoc.update(this.updateStudent)
  }
}
