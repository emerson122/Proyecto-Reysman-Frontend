import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VentasPackageService {

  private ventas = new BehaviorSubject<any[]>([]);
  public response$: Observable<any[]> = this.ventas.asObservable();

  private ventasdetalles = new BehaviorSubject<any[]>([]);
  public responsedetalles$: Observable<any[]> = this.ventasdetalles.asObservable();

    private clientess = new BehaviorSubject<any[]>([]);
  public responses$: Observable<any[]> = this.clientess.asObservable();

  private permiso = new BehaviorSubject<any[]>([]);
  public responsepermiso$: Observable<any[]> = this.permiso.asObservable();
  
  private articulos = new BehaviorSubject<any[]>([]);
  public responsearticulos$: Observable<any[]> = this.articulos.asObservable();

  private articulosid = new BehaviorSubject<any[]>([]);
  public responsearticulosid$: Observable<any[]> = this.articulosid.asObservable();

  private clientes = new BehaviorSubject<any[]>([]);
  public responseclientes$: Observable<any[]> = this.clientes.asObservable();

  private Cargando$ = new BehaviorSubject<boolean>(false);
  public responseCargando$: Observable<boolean> = this.Cargando$.asObservable();

  private url = `${environment.url}ventas`;

  productos:any[] = [];

  constructor(private _http:HttpClient,private _globals:GlobalService) { }

  register: FormGroup = new FormGroup({
    COD_VENTA: new FormControl(null),
    COD_CLIENTE: new FormControl('',Validators.required),
    COD_ARTICULO: new FormControl('',Validators.required),
    COS_UNITARIO: new FormControl('',Validators.required),
    CANTIDAD: new FormControl('',Validators.required),
    TOTALBRUTO: new FormControl('',Validators.required),
    TOTALFINAL: new FormControl('',Validators.required),
    STOCK: new FormControl('',Validators.required),
  });

  inicializarForm(){
    this.register.setValue({
      COD_VENTA: null,
      COD_CLIENTE: '',
      COD_ARTICULO: '',
      COS_UNITARIO: '',
      CANTIDAD: '',
      TOTALBRUTO: '',
      TOTALFINAL: '',
      STOCK: ''
    });
  }

  
  mostrarpermiso(rol:any,objeto){
    const request$ = this._globals.obtener(`permisossistemaid/${rol}/${objeto}`).pipe(tap((resp:any)=>{
     this.permiso.next(resp)
   }));
    return request$.subscribe();
  }

  popForm(data:any){
    this.register.setValue(data);
  }

   mostrar(){
    this.Cargando$.next(true);
    const request$ = this._globals.obtener('ventas').pipe(tap((resp:any)=>{
      console.log(resp)
    this.Cargando$.next(false);
     this.ventas.next(resp)
   }));
    return request$.subscribe();
  }

  mostrardetalles(id:any){
    this.Cargando$.next(true);
    const request$ = this._globals.obtener('ventasdetalles/'+id).pipe(tap((resp:any)=>{
      console.log(resp)
    this.Cargando$.next(false);
     this.ventasdetalles.next(resp)
   }));
    return request$.subscribe();
  }


  mostrararticulos(){
    const request$ = this._globals.obtener('articulos').pipe(tap((resp:any)=>{
     this.articulos.next(resp)
   }));
    return request$.subscribe();
  }

  mostrarClientes(){
    this.Cargando$.next(true);
    const request$ = this._globals.obtener('clientes').pipe(tap((resp:any)=>{
      console.log(resp);
    this.Cargando$.next(false);
     this.clientess.next(resp)
   }));
    return request$.subscribe();
  }

  mostrararticulosid(id:any){
    const request$ = this._globals.obtener('articulosid/'+id).pipe(tap((resp:any)=>{
     this.articulosid.next(resp)
   }));
    return request$.subscribe();
  }


  // mostrararclientes(){
  //   const request$ = this._globals.obtener('clientes').pipe(tap((resp:any)=>{
  //    this.proveedores.next(resp)
  //  }));
  //   return request$.subscribe();
  // }

  crear(params:any):Observable<any>{
    return this._http.post(this.url,params).pipe(map((resp:any)=>resp));
  }

  actualizar(params:any):Observable<any>{
    return this._http.put(this.url,params).pipe(map((resp:any)=>resp));
  }

  eliminar(id:any):Observable<any>{
    console.log(id)
    //return this._http.request('Delete',this.url,{ body:id }).pipe(map((resp:any)=>resp));
    return this._http.delete(this.url+'/'+id);
  }

}
