import { Component } from '@angular/core';
import { NuevoEnvioService } from './nuevo-envio.service'; // Ajusta la ruta según la estructura de carpetas

@Component({
  selector: 'app-nuevoenvio',
  templateUrl: './nuevoenvio.component.html',
  styleUrls: ['./nuevoenvio.component.scss']
})
export class NuevoenvioComponent {
  obj_nuevoenvio: any = {
    nombre_envia: '',
    tipo_id_envia: '',
    num_id_envia: '',
    telefono_envia: '',
    direccion_envia: '',
    nombre_recibe: '',
    tipo_id_recibe: '',
    num_id_recibe: '',
    telefono_recibe: '',
    direccion_recibe: '',
    categoria: ''
  };
  submitted = false;

  constructor(private nuevoEnvioService: NuevoEnvioService) {}

  guardar() {
    this.submitted = true; // Marca los campos como "enviados" para aplicar las clases CSS
    
    // Verifica si alguno de los campos está vacío
    const fields = [
      this.obj_nuevoenvio.nombre_envia,
      this.obj_nuevoenvio.tipo_id_envia,
      this.obj_nuevoenvio.num_id_envia,
      this.obj_nuevoenvio.telefono_envia,
      this.obj_nuevoenvio.direccion_envia,
      this.obj_nuevoenvio.nombre_recibe,
      this.obj_nuevoenvio.tipo_id_recibe,
      this.obj_nuevoenvio.num_id_recibe,
      this.obj_nuevoenvio.telefono_recibe,
      this.obj_nuevoenvio.direccion_recibe,
      this.obj_nuevoenvio.categoria
    ];
    
    const isValid = fields.every(field => field !== null && field !== undefined && field.trim() !== '');
    
    if (!isValid) {
      alert('Pendiente por diligenciar datos');
      return;
    }

    this.nuevoEnvioService.Insertar(this.obj_nuevoenvio).subscribe(
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
    this.obj_nuevoenvio = {
      nombre_envia: '',
      tipo_id_envia: '',
      num_id_envia: '',
      telefono_envia: '',
      direccion_envia: '',
      nombre_recibe: '',
      tipo_id_recibe: '',
      num_id_recibe: '',
      telefono_recibe: '',
      direccion_recibe: '',
      categoria: ''
    };
    this.submitted = false; // Reinicia el estado de los campos
  }
}
