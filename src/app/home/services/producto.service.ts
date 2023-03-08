import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl: string = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) { }

  buscarProducto(termino: string): Observable<any> {

    const url = `${this.apiUrl}/hombre/${termino}`;


    return this.http.get(url);

  }


}
