import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import * as printJS from 'print-js';
import { GlobalService } from 'src/app/services/global.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { BitacoraPackageService } from './bitacora-package.service';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit {


//paginacion
pageSize: number = 25;
pageSizeOptions: number[] = [25,50,100];
pageEvent!: PageEvent;
d: number = 0; //desde donde
h: number = 25; //hasta donde

//filtro

buscar: any = '';
campo: any[] = ['USUARIO','ACCION','TABLA_MODIFICADA'];
reporte: boolean = false;
data: any = [];
item: any = [];

usuario: any;//paso //2
i:number=0;

constructor(public _service: BitacoraPackageService,
  private _dialog: MatDialog,
  private _bitacora: GlobalService,
  private _sweet: SweetAlertService
) {

  this._service.mostrar();
  
   let params = {
     operacion:'INGRESO',
     fecha: new Date(),
     idusuario:localStorage.getItem('user'),
     tabla:'BITACORA'
   }
   this._bitacora.crear(params).subscribe();


}

ngOnInit(): void {}

ngOnDestroy(): void {
  let params = {
    operacion:'SALIO',
    fecha: new Date(),
    idusuario:localStorage.getItem('user'),
    tabla:'BITACORA'
  }
  this._bitacora.crear(params).subscribe();
}

cambioPagina(e: PageEvent) {
  this.d = e.pageIndex * e.pageSize;
  this.h = this.d + e.pageSize;
}


impo() {
  let date = new Date();
      let url = '../../../assets/logo.jpg';
      let rawHTML = `
    <div id="otra">
    <img src="${url}" alt="">
    <div class="parraf">
    <h5>Tiendas REYSMAN</h5>
    <h5>Listado de bitacora</h5>
    <h6>${date.toLocaleString()}</h6>
    </div>
    </div><br>`;
  
      printJS({
        printable: 'reporte',
        type: 'html',
        header: rawHTML,
        css: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        style: '@page {   margin-left: 10%; } #otra {display: block  } #otra img { max-width: 140px;} .parraf { width: 100%; padding: 0px; text-align: center;  max-height: 80px, margin-left: 90%; }',
        scanStyles: false,
        documentTitle: 'Objetos',
        font_size: '10pt',
        ignoreElements: ['d']
      })
      let params = {
        operacion: 'DESCARGO PDF',
        fecha: new Date(),
        idusuario: localStorage.getItem('user'),
        tabla: 'BITACORA'
      };
      this._bitacora.crear(params).subscribe((resp) => resp);
    }

}

