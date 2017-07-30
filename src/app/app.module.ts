import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { PostComponent } from './page/post/post.component';
import { HomeComponent } from './page/home/home.component';
import { PostSummaryComponent } from './components/post-summary/post-summary.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { NewPostComponent } from './page/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    PostSummaryComponent,
    PageNotFoundComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot([
		{
			path:'',
			component:HomeComponent
		},
		{
			path:"post/:id",
			component:PostComponent
		},
		{ path: '**', component: PageNotFoundComponent }

	],      
	//{ enableTracing: true } // <-- debugging purposes only
	)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
