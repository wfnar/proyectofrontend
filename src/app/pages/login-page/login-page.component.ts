import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string  = "n";
  password: string = "n";

  constructor(private loginSerivice: LoginService, private router: Router) { }

  login(){
    this.loginSerivice.loginuser(this.email, this.password).subscribe(result => {
      if(result){
        this.router.navigate(['home']);
      }
    });
  }

}
