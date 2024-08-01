import { Component, OnInit } from '@angular/core';
import { NuevoclienteService } from './nuevocliente.service';

@Component({
  selector: 'app-nuevocliente',
  templateUrl: './nuevocliente.component.html',
  styleUrls: ['./nuevocliente.component.scss']
})
export class NuevoclienteComponent implements OnInit {
  cliente: any = {
    nombre: '',
    apellidos: '',
    email: '',
    identificacion: '',
    tipo_identificacion: ''
  };

  clientes: any[] = [];
  selectedCliente: any = null;

  constructor(private nuevoClienteService: NuevoclienteService) { }

  ngOnInit(): void {
    this.obtenerTodos();
  }

  guardar(): void {
    if (this.selectedCliente) {
      this.nuevoClienteService.actualizar(this.selectedCliente.id, this.cliente).subscribe(
        response => {
          if (response.resultado === 'OK') {
            console.log('Cliente actualizado correctamente');
            this.obtenerTodos();
            this.resetForm();
            this.selectedCliente = null;
          } else {
            console.error('Error al actualizar cliente:', response.mensaje);
          }
        },
        error => {
          console.error('Error al actualizar cliente:', error);
        }
      );
    } else {
      this.nuevoClienteService.guardar(this.cliente).subscribe(
        response => {
          if (response.resultado === 'OK') {
            console.log('Cliente guardado correctamente');
            this.resetForm();
            this.obtenerTodos();
          } else {
            console.error('Error al guardar cliente:', response.mensaje);
          }
        },
        error => {
          console.error('Error al guardar cliente:', error);
        }
      );
    }
  }

  obtenerTodos(): void {
    this.nuevoClienteService.obtenerTodos().subscribe(
      response => {
        if (response.resultado === 'OK') {
          this.clientes = response.clientes;
        } else {
          console.error('Error al obtener clientes:', response.mensaje);
        }
      },
      error => {
        console.error('Error al obtener clientes:', error);
      }
    );
  }

  seleccionarCliente(cliente: any): void {
    this.selectedCliente = cliente;
    this.cliente = { ...cliente };
  }

  eliminarCliente(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este cliente?')) {
      this.nuevoClienteService.eliminar(id).subscribe(
        response => {
          if (response.resultado === 'OK') {
            console.log('Cliente eliminado correctamente');
            this.obtenerTodos();
          } else {
            console.error('Error al eliminar cliente:', response.mensaje);
          }
        },
        error => {
          console.error('Error al eliminar cliente:', error);
        }
      );
    }
  }

  resetForm(): void {
    this.cliente = {
      nombre: '',
      apellidos: '',
      email: '',
      identificacion: '',
      tipo_identificacion: ''
    };
    this.selectedCliente = null;
  }
}
