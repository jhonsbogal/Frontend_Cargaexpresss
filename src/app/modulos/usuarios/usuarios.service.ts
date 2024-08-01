import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'http://localhost/CARGAEXPRESS/backend/controlador/usuarios.php';

  constructor(private http: HttpClient) { }

  buscarPorCedula(cedula: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { cedula });
  }

  crearUsuario(cedula: string, usuario: string, contrasena: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}?action=create`, { cedula, usuario, contrasena });
  }

  obtenerCredenciales(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?action=getCredenciales`);
  }
}