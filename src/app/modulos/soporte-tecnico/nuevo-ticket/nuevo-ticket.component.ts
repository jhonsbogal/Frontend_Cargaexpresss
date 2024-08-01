import { Component } from '@angular/core';
import { NuevoTicketService } from './nuevo-ticket.service'; // Ajusta la ruta según la estructura de carpetas

@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.scss']
})
export class NuevoTicketComponent {
  nuevoTicket: any = {
    tipo_problema: '',
    usuario_nombre: '',
    area_reporta: '',
    observaciones: ''
  };
  submitted = false;

  constructor(private nuevoTicketService: NuevoTicketService) {}

  guardar() {
    this.submitted = true; // Marca los campos como "enviados" para aplicar las clases CSS
    
    // Verifica si alguno de los campos está vacío
    const fields = [
      this.nuevoTicket.tipo_problema,
      this.nuevoTicket.usuario_nombre,
      this.nuevoTicket.area_reporta,
      this.nuevoTicket.observaciones
    ];
    
    const isValid = fields.every(field => field !== null && field !== undefined && field.trim() !== '');
    
    if (!isValid) {
      alert('Pendiente por diligenciar datos');
      return;
    }

    // Establece la fecha actual
    const now = new Date();
    this.nuevoTicket.fecha = now.toISOString(); // Formato de fecha ISO

    this.nuevoTicketService.insertar(this.nuevoTicket).subscribe(
      (datos: any) => {
        if (datos['resultado'] === 'OK') {
          alert('Envío guardado exitosamente.');
          console.log('Datos guardados correctamente');
          this.resetForm(); // Llama a resetForm después de mostrar el mensaje de éxito
        } else {
          alert('Error al guardar datos: ' + datos['mensaje']);
        }
      },
      error => {
        console.error('Error al guardar datos:', error);
        alert('Error al guardar datos.');
      }
    );
  }

  resetForm() {
    console.log('Restableciendo formulario...'); // Verifica si se está llamando
    this.nuevoTicket = {
      tipo_problema: '',
      usuario_nombre: '',
      area_reporta: '',
      observaciones: ''
    };
    this.submitted = false; // Reinicia el estado de los campos
  }
}
