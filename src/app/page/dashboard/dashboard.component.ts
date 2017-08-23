import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  items1: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/posts', {
      query: {
        limitToLast: 10,
        orderByKey: true
      }
    });

    this.items1 = db.list('/Challenges', {
      query: {
        limitToLast: 10,
        orderByKey: true
      }
    });

  }

  ngOnInit() {
  }

}
