import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './film/home/home.component';
import { FilmListComponent } from './film/film-list/film-list.component';
import { FilmNewComponent } from './film/film-new/film-new.component';
import { FilmEditComponent } from './film/film-edit/film-edit.component';
import { FilmDetailComponent } from './film/film-detail/film-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './auth/navbar/navbar.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { ReseauSocialComponent } from './auth/reseau-social/reseau-social.component';

//Services
import { FilmService } from './film/film.service';
import { AuthService } from './auth/auth.service';
import { ValidateService } from './auth/validate.service';
import { AuthGuard } from './auth/auth.guard';

import { FacebookModule } from 'ngx-facebook';
import { FlashMessagesModule } from 'angular2-flash-messages';
// import { SocialLoginModule } from "angular4-social-login";
// import { AuthServiceConfig, FacebookLoginProvider } from 'angular4-social-login';
 
// let config = new AuthServiceConfig([
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("320007818406116")
//   }
// ]);

// export function provideConfig() {
//   return config;
// }


const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'film',
    component: FilmComponent, canActivate: [AuthGuard]
  },
  {
    path:'detail/:id',
    component: FilmDetailComponent
  },
  {
    path:'profile',
    component: ProfileComponent, canActivate: [AuthGuard]
  },
  {
    path:'reseau-social',
    component: ReseauSocialComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    HomeComponent,
    FilmListComponent,
    FilmNewComponent,
    FilmEditComponent,
    FilmDetailComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ProfileComponent,
    ReseauSocialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes),
    FlashMessagesModule.forRoot(),
    FacebookModule.forRoot()
    // SocialLoginModule.initialize(config)
  ],
  providers: [ValidateService, AuthService, AuthGuard, FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
