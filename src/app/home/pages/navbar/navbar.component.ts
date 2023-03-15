import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interface/producto-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  termino: string = "";
  hayError: boolean = false;
  productos: Producto[] = [];
  mostrarlogin: boolean = false;
  mostrarlogout: boolean = true;

  constructor(private productoService: ProductoService, private router: Router){}

  irALogin(){
    this.router.navigate(['login']);
    this.mostrarlogin = true;
    this.mostrarlogout = false;
  }

  logout(){
    this.router.navigate(['']);
    this.mostrarlogout = true;
    this.mostrarlogin = false;
  }


}
