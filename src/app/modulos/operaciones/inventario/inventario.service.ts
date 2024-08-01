import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = 'http://localhost/CARGAEXPRESS/backend/controlador/inventario.php';

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { id });
  }

  actualizar(id: number, producto: string, cantidad: number, tipoMovimiento: string): Observable<any> {
    return this.http.put<any>(this.apiUrl, { id, producto, cantidad, tipoMovimiento });
  }

  eliminar(id: number): Observable<any> {
    return this.http.request<any>('DELETE', this.apiUrl, { body: { id } });
  }

  guardar(inventario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, inventario);
  }
}
