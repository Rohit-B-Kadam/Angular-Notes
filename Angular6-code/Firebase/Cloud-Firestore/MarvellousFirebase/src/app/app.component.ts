import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: Observable<any[]>;
  public fees: Observable<any>;


  constructor( private _db : AngularFirestore) 
  {
    this.items = _db.collection('Batches').valueChanges();
    this.fees = _db.doc('Batches/Fees').valueChanges();
  }
}
