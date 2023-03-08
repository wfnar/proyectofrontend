import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HombreComponent } from './home/pages/hombre/hombre.component';
import { MujerComponent } from './home/pages/mujer/mujer.component';
import { ProductoComponent } from './home/pages/producto/producto.component';

const routes: Routes = [
  {
    path:'',
    component: HombreComponent,
    pathMatch: 'full'
  },
  {
    path:'mujer',
    component: MujerComponent,
  },
  {
    path:'productos/:id',
    component: ProductoComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'registro',
    component: RegisterPageComponent},

  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
