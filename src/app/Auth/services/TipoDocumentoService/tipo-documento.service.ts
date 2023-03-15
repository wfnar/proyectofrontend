import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  constructor(private endPoint: HttpClient) { }

  listarTipoDocumento(): Observable<any>{
    return this.endPoint.get('http://localhost:8080/tipodocumento/all');
  }

}
