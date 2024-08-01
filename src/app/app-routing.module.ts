import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { CerrarSesionComponent } from './modulos/cerrar-sesion/cerrar-sesion.component';
import { IngresoComponent } from './modulos/rrhh/ingreso/ingreso.component';
import { BandejaComponent } from './modulos/soporte-tecnico/bandeja/bandeja.component';
import { NuevoTicketComponent } from './modulos/soporte-tecnico/nuevo-ticket/nuevo-ticket.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { NuevoenvioComponent } from './modulos/ventas/nuevoenvio/nuevoenvio.component';
import { NuevoclienteComponent} from './modulos/ventas/nuevocliente/nuevocliente.component';
import { CotizacionComponent } from './modulos/ventas/cotizacion/cotizacion.component';
import { EnvioComponent } from './modulos/operaciones/envio/envio.component';
import { InventarioComponent } from './modulos/operaciones/inventario/inventario.component';
import { LoginComponent } from './modulos/login/login.component';
import { validaruserGuard } from './guard/validaruser.guard';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [validaruserGuard]},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'rrhh/ingreso', component: IngresoComponent, canActivate: [validaruserGuard] },

      { path: 'soporte-tecnico/bandeja', component: BandejaComponent, canActivate: [validaruserGuard] },
      { path: 'soporte-tecnico/nuevo-ticket', component: NuevoTicketComponent, canActivate: [validaruserGuard] },

      { path: 'usuarios', component: UsuariosComponent, canActivate: [validaruserGuard] },

      { path: 'cerrar-sesion', component: CerrarSesionComponent, canActivate: [validaruserGuard] },
      
      { path: 'ventas/nuevoenvio', component: NuevoenvioComponent, canActivate: [validaruserGuard] },
      { path: 'ventas/nuevocliente', component: NuevoclienteComponent, canActivate: [validaruserGuard] },
      { path: 'ventas/cotizacion', component: CotizacionComponent, canActivate: [validaruserGuard] },

      { path: 'operaciones/envio', component: EnvioComponent, canActivate: [validaruserGuard] },
      { path: 'operaciones/inventario', component: InventarioComponent, canActivate: [validaruserGuard] },
    ]
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
