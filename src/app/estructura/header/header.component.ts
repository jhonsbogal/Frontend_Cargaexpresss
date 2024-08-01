import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Corregido a styleUrls
})
export class HeaderComponent {

  usuario: any;
  rol:any;

  constructor(private router:Router){}

  ngOnInit(): void{
    this.usuario = sessionStorage.getItem("usuario");
    this.rol = sessionStorage.getItem("rol");
  }

  cerrar(){
    sessionStorage.setItem("usuario", "");
    sessionStorage.setItem("contrasena", "");
    this.router.navigate(['login']);
  }

}
