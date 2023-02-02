import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { GlobalService } from 'src/app/services/global.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { CategoriasInsertUpdateComponent } from './categorias-insert-update/categorias-insert-update.component';
import { CategoriasPackageService } from './categorias-package.service';
import * as printJS from 'print-js';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  
  //paginacion
  pageSize: number = 25;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent!: PageEvent;
  d: number = 0; //desde donde
  h: number = 25; //hasta donde

  //filtro
permisos:any[];
  buscar: any = '';
  campo: any[] = ['NOM_CATEGORIA'];
  reporte: boolean = false;
  data: any = [];
  item: any = [];

  usuario: any;//paso //2
  i: number = 0;

  constructor(public _service: CategoriasPackageService,
    private _dialog: MatDialog,
    private _bitacora: GlobalService,
    private _sweet: SweetAlertService
  ) {
    this._service.mostrarpermiso(localStorage.getItem('rol'),14);
    this._service.responsepermiso$.subscribe(r=>{
     this.permisos = r[0];
    })
    let params = {
      operacion: 'INGRESO',
      fecha: new Date(),
      idusuario: localStorage.getItem('user'),
      tabla: 'CATEGORIAS'
    }
    this._bitacora.crear(params).subscribe();

  }

  ngOnInit(): void {
    this._service.mostrar();
  }

  ngOnDestroy(): void {
    let params = {
      operacion: 'SALIO',
      fecha: new Date(),
      idusuario: localStorage.getItem('user'),
      tabla: 'CATEGORIAS'
    }
    this._bitacora.crear(params).subscribe();
  }

  cambioPagina(e: PageEvent) {
    this.d = e.pageIndex * e.pageSize;
    this.h = this.d + e.pageSize;
  }
  crear() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "20%";
    this._dialog.open(CategoriasInsertUpdateComponent);
    this._service.inicializarForm();
  }

  editar(item: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "25%";
    this._dialog.open(CategoriasInsertUpdateComponent);
    this._service.popForm(item);
  }

  eliminar(id: number) {

    this._sweet.mensajeConConfirmacion('Eliminar', '¿Desea eliminar el registro?', 'warning').
      then((result) => {
        console.log(result);
        if (result) {
          this._service.eliminar(id).subscribe(resp => {
            this._service.mostrar();
            if (!resp.ok) {
              this._sweet.mensajeSimple('Ocurrio un error', 'CATEGORIAS', 'error');
            } else {
              let params = {
                operacion: 'ELIMINO',
                fecha: new Date(),
                idusuario: localStorage.getItem('user'),
                tabla: 'CATEGORIAS',
              }
              this._bitacora.crear(params).subscribe();
              this._sweet.mensajeSimple('Eliminado correctamente', 'CATEGORIAS', 'success');
            }
          })
        }
      })

  }

  
  impo() {
  let date = new Date();
    let url = '../../../assets/logo.jpg';
    let rawHTML = `
  <div id="otra">
  <img src="${url}" alt="">
  <div class="parraf">
  <h5>Tiendas Reysman</h5>
  <h5>Listado de Categorias</h5>
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
      documentTitle: 'Categorias',
      font_size: '10pt',
      ignoreElements: ['d']
    })
    let params = {
      operacion: 'INGRESO',
      fecha: new Date(),
      idusuario: localStorage.getItem('user'),
      tabla: 'CATEGORIAS'
    };
    this._bitacora.crear(params).subscribe((resp) => resp);
  }

}
