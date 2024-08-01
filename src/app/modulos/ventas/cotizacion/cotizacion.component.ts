import { Component } from '@angular/core';
import { CotizacionService } from './cotizacion.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss']
})
export class CotizacionComponent {
  cotizacion = {
    origen: '',
    destino: '',
    distancia: 0,
    peso: 0,
    tipoMercancia: ''
  };
  cotizaciones: any[] = [];

  // Mapa de distancias entre puntos
  private distancias: { [key: string]: number } = {
    '1-2': 10,
    '1-3': 17,
    '2-3': 7
  };

  constructor(private cotizacionService: CotizacionService) {}

  guardar() {
    if (this.validarFormulario()) {
      this.cotizacionService.GenerarCotizacion(this.cotizacion).subscribe(
        response => {
          if (response.resultado === 'OK') {
            // Mostrar mensaje de éxito
            alert('Cotización guardada exitosamente');
            // Agregar la cotización a la lista y limpiar el formulario
            this.cotizaciones.push(this.cotizacion);
            this.resetForm();
          } else {
            alert(response.mensaje);
          }
        },
        error => {
          console.error('Error al guardar la cotización:', error);
          alert('Error al guardar la cotización');
        }
      );
    } else {
      // Solo muestra alerta si el formulario es inválido
      alert('Por favor, complete todos los campos requeridos.');
    }
  }

  calcularDistancia() {
    const clave = `${this.cotizacion.origen}-${this.cotizacion.destino}`;

    this.cotizacion.distancia = this.distancias[clave] || 0;
  }

  resetForm() {
    console.log('Restableciendo formulario...');
    this.cotizacion = {
      origen: '',
      destino: '',
      distancia: 0,
      peso: 0,
      tipoMercancia: ''
    };
  }

  validarFormulario(): boolean {
    // Verifica que los campos requeridos no estén vacíos
    return !!this.cotizacion.origen && !!this.cotizacion.destino && !!this.cotizacion.peso && !!this.cotizacion.tipoMercancia;
  }
}
