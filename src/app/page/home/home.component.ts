import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 // styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

     items: FirebaseListObservable<any[]>;

    constructor(db: AngularFireDatabase) {
    	this.items = db.list('/automotive-posts', {
		  query: {
		    limitToLast: 10,
		    orderByKey: true
		  }
  		});
    }

  ngOnInit() {
  }

}
