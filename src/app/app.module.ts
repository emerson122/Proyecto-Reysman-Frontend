import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponentComponent } from './full-component/full-component.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { ClientesComponent } from './pages/ventas/clientes/clientes.component';
import { ClientesInsertUpdateComponent } from './pages/ventas/clientes/clientes-insert-update/clientes-insert-update.component';
import { VentasComponent } from './pages/ventas/ventas/ventas.component';
import { ProveedoresComponent } from './pages/compras/proveedores/proveedores.component';
import { ProveedoresInsertUpdateComponent } from './pages/compras/proveedores/proveedores-insert-update/proveedores-insert-update.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
// import { IntercepInterceptor } from './intercep.interceptor';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IntercepInterceptor } from './intercep.interceptor';
import { PreguntasSeguridadComponent } from './auth/preguntas-seguridad/preguntas-seguridad.component';
import { CambioPassComponent } from './auth/cambio-pass/cambio-pass.component';
import { RecuComponent } from './auth/recu/recu.component';
import { RecuCorreoComponent } from './auth/recu-correo/recu-correo.component';
import { RecuPreguntasComponent } from './auth/recu-preguntas/recu-preguntas.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponentComponent,
    ClientesComponent,
    ClientesInsertUpdateComponent,
    VentasComponent,
    ProveedoresComponent,
    ProveedoresInsertUpdateComponent,
    LoginComponent,
    PreguntasSeguridadComponent,
    CambioPassComponent,
    RecuComponent,
    RecuCorreoComponent,
    RecuPreguntasComponent,
    RegistroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: IntercepInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
