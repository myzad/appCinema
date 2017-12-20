import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,  
      password: this.password
    }

    //login true
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token,data.user);
        this.flashMessage.show("Tu es maintenant connecté.", {
          cssClass: 'alert-success',
          timeout: 2000
        });
        this.router.navigate(['film']);
      }else{
        //login false
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 2000
        });
        this.router.navigate(['login']);
      }
    });
  }

}
