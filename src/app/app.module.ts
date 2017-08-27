import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { PostComponent } from './page/post/post.component';
import { HomeComponent } from './page/home/home.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ChallengeComponent } from './page/challenge/challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "post/:id",
        component: PostComponent,

      },
      { path: '**', component: PageNotFoundComponent }

    ],
     // { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
