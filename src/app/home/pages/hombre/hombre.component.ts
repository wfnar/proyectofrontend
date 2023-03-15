import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interface/producto-interface';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent {
  termino: string = "";
  hayError: boolean = false;
  productos: Producto[] = [];

  constructor(private productoService: ProductoService){}

  buscar(termino: string){
      this.hayError=false;
      this.termino = termino;
      this.productoService.buscarProductoHombre(this.termino).subscribe((productos) =>{
        console.log(productos);
        this.productos = productos;

      },(err) =>{
          this.hayError =true;
          this.productos =[];
      });
  }

  sugerencia(termino: string){
    this.hayError= false;
    //TODO: crear sugerencia
  }
}
