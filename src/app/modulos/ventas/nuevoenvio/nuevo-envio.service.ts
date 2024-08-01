import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuevoEnvioService {
  private apiUrl = 'http://localhost/CARGAEXPRESS/backend/controlador/nuevo_envio.php?control=insertar'; // Ajusta la URL si es necesario

  constructor(private http: HttpClient) {}

  Insertar(obj_nuevoenvio: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, obj_nuevoenvio);
  }
}

