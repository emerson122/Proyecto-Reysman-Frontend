import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasInsertUpdateComponent } from './ventas/ventas-insert-update/ventas-insert-update.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleventasComponent } from './ventas/detalleventas/detalleventas.component';
import { InsertUpdateComponent } from './tipo-clientes/insert-update/insert-update.component';
import { TipoClientesComponent } from './tipo-clientes/tipo-clientes.component';


@NgModule({
  declarations: [VentasInsertUpdateComponent, DetalleventasComponent, InsertUpdateComponent,TipoClientesComponent],
  imports: [
    CommonModule,
    VentasRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VentasModule { }
