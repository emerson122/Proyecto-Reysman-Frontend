import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { SweetAlertService } from '../services/sweet-alert.service';

@Component({
  selector: 'app-full-component',
  templateUrl: './full-component.component.html',
  styleUrls: ['./full-component.component.css']
})

export class FullComponentComponent implements OnInit {

  opened = true;
  panelOpenState = false;
  permisos: any[] = [];
  constructor(private _service:GlobalService,
    private _alert:SweetAlertService,
    private _ruter:Router) {
    this._service.mostrarpermisos().subscribe(resp => {
      this.permisos = resp;
    })
   }

   salir(){
    this._alert.mensajeConConfirmacion('SALIR','Desea salir del sistema?','warning').then(r=>{
      if(r){
        localStorage.clear();
        localStorage.removeItem('token');
this._ruter.navigateByUrl('/inicio');
      }
    })
   }
  ngOnInit(): void {
  }

}
