import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuevoclienteService {
  private apiUrl = 'http://localhost/cargaexpress/backend/controlador/nuevocliente.php';

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { id });
  }

  actualizar(id: number, cliente: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, { id, ...cliente });
  }

  eliminar(id: number): Observable<any> {
    return this.http.request<any>('DELETE', this.apiUrl, { body: { id } });
  }

  guardar(cliente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente);
  }
}
