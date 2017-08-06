import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	// styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	user: Observable<firebase.User>;

	constructor(public afAuth: AngularFireAuth, private router: Router) {
		afAuth.authState.subscribe((user: firebase.User) => {

			if (user) {
				this.router.navigate(['/dashboard']);
			}
		});
	}
	ngOnInit() {
	}

}
