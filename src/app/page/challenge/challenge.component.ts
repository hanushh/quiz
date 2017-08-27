import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/take';

import {Post} from '../../interfaces/post';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  //styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  id: string;
  private sub: any;
  postObj:FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
	

  }

  ngOnInit() {

	this.route.params.subscribe(params => {
       this.id = params['id'];
       this.postObj = this.db.object('/posts/'+this.id);


    });
  	
  }

}