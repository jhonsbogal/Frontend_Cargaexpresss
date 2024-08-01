import { Component, OnInit } from '@angular/core';
import { EnvioService } from './envio.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.scss']
})
export class EnvioComponent implements OnInit {
  envios: any[] = [];
  selectedEnvio: any = null;

  constructor(private envioService: EnvioService) { }

  ngOnInit(): void {
    this.obtenerTodos();
  }

  obtenerTodos(): void {
    this.envioService.obtenerTodos().subscribe(
      response => {
        if (response.resultado === 'OK') {
          this.envios = response.envios;
        } else {
          console.error('Error al obtener envíos:', response.mensaje);
        }
      },
      error => {
        console.error('Error al obtener envíos:', error);
      }
    );
  }

  seleccionarEnvio(envio: any): void {
    this.envioService.obtenerPorId(envio.id).subscribe(
      response => {
        if (response.resultado === 'OK') {
          this.selectedEnvio = response.envio;
        } else {
          console.error('Error al obtener el envío:', response.mensaje);
        }
      },
      error => {
        console.error('Error al obtener el envío:', error);
      }
    );
  }

  actualizarEnvio(): void {
    if (this.selectedEnvio) {
      this.envioService.actualizar(this.selectedEnvio.id, this.selectedEnvio.nombre_envia, this.selectedEnvio.nombre_recibe, this.selectedEnvio.fecha_envio, this.selectedEnvio.categoria).subscribe(
        response => {
          if (response.resultado === 'OK') {
            this.obtenerTodos();
            this.selectedEnvio = null;
          } else {
            console.error('Error al actualizar el envío:', response.mensaje);
          }
        },
        error => {
          console.error('Error al actualizar el envío:', error);
        }
      );
    }
  }

  eliminarEnvio(id: number): void {
    this.envioService.eliminar(id).subscribe(
      response => {
        if (response.resultado === 'OK') {
          this.obtenerTodos();
        } else {
          console.error('Error al eliminar el envío:', response.mensaje);
        }
      },
      error => {
        console.error('Error al eliminar el envío:', error);
      }
    );
  }
}
