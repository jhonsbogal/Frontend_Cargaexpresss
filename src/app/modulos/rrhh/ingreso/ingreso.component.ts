import { Component, OnInit } from '@angular/core';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {
  empleado: any = {
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
    sede: '',
    puesto: '',
    salario: null,
    fechaAfiliacion: '',
    registroEPS: '',
    registroARL: '',
    registroPension: ''
  };

  empleados: any[] = [];
  selectedEmpleado: any = null;

  constructor(private ingresoService: IngresoService) { }

  ngOnInit(): void {
    this.obtenerTodos();
  }

  guardar(): void {
    if (this.validarCampos()) {
      if (this.selectedEmpleado) {
        this.ingresoService.actualizar(this.selectedEmpleado.id, this.empleado).subscribe(
          response => {
            if (response.resultado === 'OK') {
              alert('Empleado actualizado correctamente');
              this.obtenerTodos();
              this.resetForm();
              this.selectedEmpleado = null;
            } else {
              console.error('Error al actualizar empleado:', response.mensaje);
            }
          },
          error => {
            console.error('Error al actualizar empleado:', error);
          }
        );
      } else {
        this.ingresoService.guardar(this.empleado).subscribe(
          response => {
            if (response.resultado === 'OK') {
              alert('Empleado guardado correctamente');
              this.resetForm();
              this.obtenerTodos();
            } else {
              console.error('Error al guardar empleado:', response.mensaje);
            }
          },
          error => {
            console.error('Error al guardar empleado:', error);
          }
        );
      }
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  obtenerTodos(): void {
    this.ingresoService.obtenerTodos().subscribe(
      response => {
        if (response.resultado === 'OK') {
          this.empleados = response.empleados;
        } else {
          console.error('Error al obtener empleados:', response.mensaje);
        }
      },
      error => {
        console.error('Error al obtener empleados:', error);
      }
    );
  }

  seleccionarEmpleado(empleado: any): void {
    this.selectedEmpleado = empleado;
    this.empleado = { ...empleado };
  }

  eliminarEmpleado(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este empleado?')) {
      this.ingresoService.eliminar(id).subscribe(
        response => {
          if (response.resultado === 'OK') {
            alert('Empleado eliminado correctamente');
            this.obtenerTodos();
          } else {
            console.error('Error al eliminar empleado:', response.mensaje);
          }
        },
        error => {
          console.error('Error al eliminar empleado:', error);
        }
      );
    }
  }

  resetForm(): void {
    this.empleado = {
      nombre: '',
      apellido: '',
      cedula: '',
      telefono: '',
      sede: '',
      puesto: '',
      salario: null,
      fechaAfiliacion: '',
      registroEPS: '',
      registroARL: '',
      registroPension: ''
    };
  }

  validarCampos(): boolean {
    return Object.values(this.empleado).every(value => value !== '' && value !== null);
  }
}
