import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private endPoint: HttpClient) { }

  loginuser(username: string, password: string) {
    return this.endPoint.post('http://localhost:8080/user/login', {"email": username, "password": password});

  }

  registeruser(numeroDocumento: string, nombre: string, apellido: string, idTipoDocumento: number,
    email: string, password: string, direccion: string, idCiudad: number ) {

      return this.endPoint.post('http://localhost:8080/user/save',
      {"idUsuario": numeroDocumento,
      "nombre": nombre,
      "apellido": apellido,
      "idTipoDocumento": idTipoDocumento,
      "email": email,
      "password": password,
      "direccion": direccion,
      "idCiudad": idCiudad}
      );
  }

  


}
