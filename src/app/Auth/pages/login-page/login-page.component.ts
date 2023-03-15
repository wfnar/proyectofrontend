import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Auth/services/UserService/user.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string  = "";
  password: string = "";
  mostrarlogin: boolean = false;
  mostrarlogout: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  login(){
    this.userService.loginuser(this.email, this.password).subscribe(result => {
      if(result){
        this.router.navigate(['home']);
      }else{
        alert("Uno o más datos son invalidos");
      }
    });
  }

  irARegistro(){
    this.router.navigate(['registro']);
  }

  logout(){
    this.mostrarlogout= true;
  }

}
