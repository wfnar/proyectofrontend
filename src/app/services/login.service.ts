import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private endPoint: HttpClient) { }

  loginuser(username: string, password: string) {
    return this.endPoint.post('http://localhost:8080/user/login', {"email": username, "password": password});

  }
}
