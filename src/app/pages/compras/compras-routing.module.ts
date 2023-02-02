import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { DetallescomprasComponent } from './detallescompras/detallescompras.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const routes: Routes = [
  {
    path:'proveedores',component:ProveedoresComponent
  },
  {
    path:'compras',component:ComprasComponent
  },
  {
    path:'detallescompras',component:DetallescomprasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
