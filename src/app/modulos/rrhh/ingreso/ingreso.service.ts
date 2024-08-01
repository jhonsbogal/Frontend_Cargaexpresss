import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  private apiUrl = 'http://localhost/CARGAEXPRESS/backend/controlador/ingreso.php';

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { id });
  }

  actualizar(id: number, empleado: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, { id, ...empleado });
  }

  eliminar(id: number): Observable<any> {
    return this.http.request<any>('DELETE', this.apiUrl, { body: { id } });
  }

  guardar(empleado: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, empleado);
  }
}
