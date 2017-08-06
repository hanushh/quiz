import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { CanActivate, Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	user: Observable<firebase.User>;

	constructor(public afAuth: AngularFireAuth, private router: Router) {
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
		this.router.navigate(['/']);
	}
}
