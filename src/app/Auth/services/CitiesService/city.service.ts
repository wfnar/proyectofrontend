import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private endPoint: HttpClient) { }

  listarCiudades(): Observable<any> {
    return this.endPoint.get('http://localhost:8080/ciudades/all');

  }
}
