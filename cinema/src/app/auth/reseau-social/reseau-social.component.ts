import { Component, OnInit } from '@angular/core';

// import { AuthService } from 'angular4-social-login';
// import { SocialUser } from 'angular4-social-login';
// import { FacebookLoginProvider } from 'angular4-social-login';

@Component({
  selector: 'app-reseau-social',
  templateUrl: './reseau-social.component.html',
  styleUrls: ['./reseau-social.component.css']
})
export class ReseauSocialComponent implements OnInit {

  // private user: SocialUser;
  // private loggedIn: boolean;

  constructor(
    // private authService: AuthService
  ) { }

  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });
  }
  
//   signInWithFB(): void {
//     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
//   }

//   signOut(): void {
//     this.authService.signOut();
// }

}
