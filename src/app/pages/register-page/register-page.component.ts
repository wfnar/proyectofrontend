import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';
import { CityService } from 'src/app/services/CitiesService/city.service';
import { TipoDocumentoService } from 'src/app/services/TipoDocumentoService/tipo-documento.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  numeroDocumento: string ="";
  nombre: string = "";
  apellido: string = "";
  idTipoDocumento: number = 0;
  email: string = "";
  password: string = "";
  confrimationPassword: string = "";
  direccion: string = "";
  idCiudad: number = 0;
  ciudad: any;
  documento: any ;
  regex: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  constructor(private userService: UserService, private cityService: CityService, private tipoDocumentoService: TipoDocumentoService,private router: Router) { }
  ngOnInit(): void {
    this.cityService.listarCiudades().subscribe((result: any) =>{
      this.ciudad = result;
    }, (error: any) =>{console.error(error)});

    this.tipoDocumentoService.listarTipoDocumento().subscribe((result: any) =>{
      this.documento = result;
    }, (error: any) =>{console.error(error)});


  }

  seleccionarCiudad(){

  }

  registro(){

        if( this.password.length > 5){
          if(this.regex.test(this.password)){
            if(this.password == this.confrimationPassword){
              this.userService.registeruser(this.numeroDocumento,
                this.nombre, this.apellido, this.idTipoDocumento,this.email,this.password,
                this.direccion, this.idCiudad).subscribe(result => {
              if(result){
                this.router.navigate(['login']);
              }else{
                alert("Uno o más datos son invalidos");
              }});
            }else{
              alert("Las contraseña y la confirmación de contraseña no coincide");
            }
          }else{
            alert("La contraseña debe tener mayusculas, minusculas y numeros")
          }

        }else{
          alert("La contraseña debe tener minimo 5 caracteres")
        }

  }



}



