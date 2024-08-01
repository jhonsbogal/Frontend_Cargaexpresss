import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  usuario: any;
  contrasena: any;
  almacenar: any;
  error = false;
  user ={
    usuario: "",
    contrasena: ""
  }

  constructor(private slogin: LoginService, private router: Router) {}

  ngOnInit(): void {
    sessionStorage.setItem("usuario", "");
    sessionStorage.setItem("contrasena", "");
  }

  consulta(tecla: any): void {
    if (tecla === 13 || tecla === '') {
      this.slogin.consultar(this.usuario, this.contrasena).subscribe(
        (resultado: any) => {
          this.almacenar = resultado;
          console.log('Resultado del servidor:', this.almacenar);
  
          if (this.almacenar[0].validar === 'valida') {
            sessionStorage.setItem("usuario", this.almacenar[0]['usuario']);
            sessionStorage.setItem("contrasena", this.almacenar[0]['contrasena']);
            this.router.navigate(['dashboard']);
          } else {
            console.log('No entro');
            this.error = true;
          }
        },
        error => {
          console.error('Error al llamar al servicio de login', error);
          this.error = true;
        }
      );
    }
  }
}