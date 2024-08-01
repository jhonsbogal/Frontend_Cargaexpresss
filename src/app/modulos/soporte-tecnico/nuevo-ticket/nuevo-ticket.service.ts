import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuevoTicketService {
  private apiUrl = 'http://localhost/CARGAEXPRESS/backend/controlador/nuevo-ticket.php?control=insertar'; // Ajusta la URL si es necesario

  constructor(private http: HttpClient) {}

  insertar(nuevoTicket: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, nuevoTicket);
  }
}
