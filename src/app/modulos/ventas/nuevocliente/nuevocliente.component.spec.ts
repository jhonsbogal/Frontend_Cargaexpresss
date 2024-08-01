// nuevocliente.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuevoClienteService {
  private apiUrl = 'http://localhost/cargaexpress/backend/controlador/nuevocliente.php'; 
  
  constructor(private http: HttpClient) {}

  Insertar(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
