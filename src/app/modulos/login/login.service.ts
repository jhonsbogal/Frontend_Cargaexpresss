import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='http://localhost/CargaExpress/backend/controlador/login.php';

  constructor(private http: HttpClient) { }

  consultar(usuario:any, contrasena:any){
    
    //console.log(`${this.url}?usuario=${usuario}&contrasena=${contrasena}`);
    return this.http.get(`${this.url}?usuario=${usuario}&contrasena=${contrasena}`);
  }

}
