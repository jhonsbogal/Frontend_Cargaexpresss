import { Component } from '@angular/core';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrl: './cerrar-sesion.component.scss'
})
export class CerrarSesionComponent {
  confirmarCierreSesion(): void {
    // Aquí puedes poner la lógica para cerrar la sesión
    alert("Cerrando sesión...");
    // Puedes redirigir al componente de inicio o hacer cualquier otra acción necesaria.
  }

}


