import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticulosInsertUpdateComponent } from './articulos/articulos-insert-update/articulos-insert-update.component';
import { CategoriasInsertUpdateComponent } from './categorias/categorias-insert-update/categorias-insert-update.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventarioComponent } from './inventario/inventario.component';
import { InsertUpdateComponent } from './inventario/insert-update/insert-update.component';
import { MovimientosComponent } from './movimientos/movimientos.component';


@NgModule({
  declarations: [CategoriasComponent, ArticulosComponent, ArticulosInsertUpdateComponent, CategoriasInsertUpdateComponent, InventarioComponent, InsertUpdateComponent, MovimientosComponent],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InventarioModule { }
