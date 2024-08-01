import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  private apiUrl = 'http://localhost/cargaexpress/backend/controlador/cotizacion.php';

  constructor(private http: HttpClient) {}

  GenerarCotizacion(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
