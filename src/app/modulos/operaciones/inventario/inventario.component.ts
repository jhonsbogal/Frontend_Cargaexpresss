import { Component, OnInit } from '@angular/core';
import { InventarioService } from './inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  inventario: any = {
    producto: '',
    cantidad: 0,
    tipoMovimiento: 'entrada'
  };

  movimientos: any[] = [];
  selectedMovimiento: any = null;

  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.obtenerTodos();
  }

  registrarMovimiento() {
    if (this.selectedMovimiento) {
      this.inventarioService.actualizar(this.selectedMovimiento.id, this.inventario.producto, this.inventario.cantidad, this.inventario.tipoMovimiento).subscribe(
        response => {
          if (response.resultado === 'OK') {
            console.log('Movimiento actualizado correctamente');
            this.obtenerTodos();
            this.resetForm();
            this.selectedMovimiento = null;
          } else {
            console.error('Error al actualizar movimiento:', response.mensaje);
          }
        },
        error => {
          console.error('Error al actualizar movimiento:', error);
        }
      );
    } else {
      this.inventarioService.guardar(this.inventario).subscribe(
        response => {
          if (response.resultado === 'OK') {
            console.log('Movimiento registrado correctamente');
            this.resetForm();
            this.obtenerTodos();
          } else {
            console.error('Error al registrar movimiento:', response.mensaje);
          }
        },
        error => {
          console.error('Error al registrar movimiento:', error);
        }
      );
    }
  }

  obtenerTodos(): void {
    this.inventarioService.obtenerTodos().subscribe(
      response => {
        if (response.resultado === 'OK') {
          this.movimientos = response.movimientos;
        } else {
          console.error('Error al obtener movimientos:', response.mensaje);
        }
      },
      error => {
        console.error('Error al obtener movimientos:', error);
      }
    );
  }

  seleccionarMovimiento(movimiento: any): void {
    this.selectedMovimiento = movimiento;
    this.inventario = { ...movimiento };
  }

  eliminarMovimiento(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este movimiento?')) {
      this.inventarioService.eliminar(id).subscribe(
        response => {
          if (response.resultado === 'OK') {
            console.log('Movimiento eliminado correctamente');
            this.obtenerTodos();
          } else {
            console.error('Error al eliminar movimiento:', response.mensaje);
          }
        },
        error => {
          console.error('Error al eliminar movimiento:', error);
        }
      );
    }
  }

  resetForm() {
    this.inventario = {
      producto: '',
      cantidad: 0,
      tipoMovimiento: 'entrada'
    };
  }
}
