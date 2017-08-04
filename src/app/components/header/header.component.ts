import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	user: Observable<firebase.User>;

	constructor(public afAuth: AngularFireAuth) {
		this.user = afAuth.authState;
	}

	ngOnInit() {

		//this.login();
	}
	login(empForm: any, event: Event) {
		  event.preventDefault();

		this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
		
	}

	logout(empForm: any, event: Event) { 
		event.preventDefault();
		this.afAuth.auth.signOut();
	}
}
