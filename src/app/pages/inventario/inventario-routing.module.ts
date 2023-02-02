import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { InventarioComponent } from './inventario/inventario.component';
import { MovimientosComponent } from './movimientos/movimientos.component';

const routes: Routes = [
  {
    path:'articulos',component:ArticulosComponent
  },
  {
    path:'categorias',component:CategoriasComponent
  },
  {
    path:'inventario',component:InventarioComponent
  },
  {
    path:'movimientos',component:MovimientosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
