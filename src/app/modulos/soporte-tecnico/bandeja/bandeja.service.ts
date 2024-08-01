import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandejaService {
  private apiUrl = 'http://localhost/CARGAEXPRESS/backend/controlador/bandeja.php';

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<{ resultado: string; tickets: any[] }> {
    return this.http.get<{ resultado: string; tickets: any[] }>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<{ resultado: string; ticket: any }> {
    return this.http.post<{ resultado: string; ticket: any }>(this.apiUrl, { id });
  }

  eliminar(id: number): Observable<any> {
    return this.http.request('DELETE', this.apiUrl, { body: { id } });
  }

  editarTicket(ticket: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}?control=editar`, ticket);
  }
}
