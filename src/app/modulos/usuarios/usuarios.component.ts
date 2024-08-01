import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  cedulaBuscar: string = '';
  cedulaCrear: string = '';
  usuario: string = '';
  contrasena: string = '';
  empleado: any;
  message: string = '';
  credenciales: any[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.obtenerCredenciales();
  }

  buscar(): void {
    this.usuariosService.buscarPorCedula(this.cedulaBuscar).subscribe(
      response => {
        if (response.resultado === 'OK') {
          this.empleado = response.empleado;
        } else {
          this.message = 'Empleado no encontrado';
        }
      },
      error => {
        this.message = 'Error al buscar el empleado';
      }
    );
  }

  crearUsuario(): void {
    this.usuariosService.crearUsuario(this.cedulaCrear, this.usuario, this.contrasena).subscribe(
      response => {
        if (response.resultado === 'OK') {
          this.message = response.mensaje;
          this.obtenerCredenciales();
        } else {
          this.message = response.mensaje;
        }
      },
      error => {
        this.message = 'Error al crear el usuario';
      }
    );
  }

  obtenerCredenciales(): void {
    this.usuariosService.obtenerCredenciales().subscribe(
      response => {
        if (response.resultado === 'OK') {
          this.credenciales = response.credenciales;
        } else {
          this.message = response.mensaje;
        }
      },
      error => {
        this.message = 'Error al obtener credenciales';
      }
    );
  }
}
