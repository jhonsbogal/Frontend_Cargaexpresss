import { Component, OnInit } from '@angular/core';
import { BandejaService } from './bandeja.service';

@Component({
  selector: 'app-bandeja',
  templateUrl: './bandeja.component.html',
  styleUrls: ['./bandeja.component.scss']
})
export class BandejaComponent implements OnInit {
  tickets: any[] = [];
  selectedTicket: any = null;

  constructor(private bandejaService: BandejaService) { }

  ngOnInit(): void {
    this.obtenerTodos();
  }

  obtenerTodos(): void {
    this.bandejaService.obtenerTodos().subscribe(
      response => {
        if (response.resultado === 'OK') {
          this.tickets = response.tickets;
        } else {
          console.error('Error al obtener los tickets');
        }
      },
      error => {
        console.error('Error al obtener los tickets:', error);
      }
    );
  }

  seleccionarTicket(ticket: any): void {
    this.bandejaService.obtenerPorId(ticket.id).subscribe(
      response => {
        if (response.resultado === 'OK') {
          this.selectedTicket = response.ticket;
        } else {
          console.error('Error al obtener el ticket');
        }
      },
      error => {
        console.error('Error al obtener el ticket:', error);
      }
    );
  }

  actualizarTicket(): void {
    if (this.selectedTicket) {
      this.bandejaService.editarTicket(this.selectedTicket).subscribe(
        response => {
          if (response.resultado === 'OK') {
            this.obtenerTodos();
            this.selectedTicket = null;
          } else {
            console.error('Error al actualizar el ticket');
          }
        },
        error => {
          console.error('Error al actualizar el ticket:', error);
        }
      );
    }
  }

  eliminarTicket(id: number): void {
    this.bandejaService.eliminar(id).subscribe(
      response => {
        if (response.resultado === 'OK') {
          this.obtenerTodos();
        } else {
          console.error('Error al eliminar el ticket');
        }
      },
      error => {
        console.error('Error al eliminar el ticket:', error);
      }
    );
  }
}
