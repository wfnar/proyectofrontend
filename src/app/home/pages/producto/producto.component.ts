import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  termino: string = "";

  constructor(private productoService: ProductoService){}

  buscar(){
      this.productoService.buscarProducto(this.termino).subscribe(resp =>{
        console.log(resp);
      });
  }
}
