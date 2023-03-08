import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HombreComponent } from './pages/hombre/hombre.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HombreComponent,
    MujerComponent,
    ProductoComponent
  ],
  exports: [
    HombreComponent,
    MujerComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
