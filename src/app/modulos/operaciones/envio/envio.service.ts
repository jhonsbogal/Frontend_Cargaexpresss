import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {
  private apiUrl = 'http://localhost/cargaexpress/backend/controlador/envio.php';

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { id });
  }

  actualizar(id: number, nombre_envia: string, nombre_recibe: string, fecha_envio: string, categoria: string): Observable<any> {
    return this.http.put<any>(this.apiUrl, { id, nombre_envia, nombre_recibe, fecha_envio, categoria });
  }

  eliminar(id: number): Observable<any> {
    return this.http.request('DELETE', this.apiUrl, { body: { id } });
  }
}
