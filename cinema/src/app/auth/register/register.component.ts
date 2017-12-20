import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    //Required fiels
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show("Remplis tous les champs.", {cssClass: 'alert-danger', timeout: 2000});
      return false;
    }

    //Validate email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show("Utilise un email valide.", {cssClass: 'alert-danger', timeout: 2000});
      return false;
    }

    //Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show("Tu es maintenant enregistré et tu peux te connecter.", {cssClass: 'alert-success', timeout: 2000});
        this.router.navigate(['/login']);
      }else{
        this.flashMessage.show("Quelque chose d'anormal vient d'arriver.", {cssClass: 'alert-danger', timeout: 2000});
        this.router.navigate(['/register']);
      }
    });

  }

}
