import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './estructura/header/header.component';
import { NavComponent } from './estructura/nav/nav.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { CerrarSesionComponent } from './modulos/cerrar-sesion/cerrar-sesion.component';
import { NuevoTicketComponent } from './modulos/soporte-tecnico/nuevo-ticket/nuevo-ticket.component';
import { BandejaComponent } from './modulos/soporte-tecnico/bandeja/bandeja.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { IngresoComponent } from './modulos/rrhh/ingreso/ingreso.component';


import { EnvioComponent } from './modulos/operaciones/envio/envio.component';
import { InventarioComponent } from './modulos/operaciones/inventario/inventario.component';
import { CotizacionComponent } from './modulos/ventas/cotizacion/cotizacion.component';
import { NuevoenvioComponent } from './modulos/ventas/nuevoenvio/nuevoenvio.component';
import { NuevoclienteComponent } from './modulos/ventas/nuevocliente/nuevocliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    DashboardComponent,
    LoginComponent,
    CerrarSesionComponent,
    NuevoTicketComponent,
    BandejaComponent,
    UsuariosComponent,
    IngresoComponent,

    EnvioComponent,
    InventarioComponent,
    CotizacionComponent,
    NuevoclienteComponent,
    NuevoenvioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
