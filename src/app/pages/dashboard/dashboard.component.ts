import { Component, OnInit } from '@angular/core';
// import { Chart, registerables } from 'node_modules/chart.js';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

    proveedores:any = 0;
    clientes:any = 0;
    personas:any = 0;
    usuarios:any = 0;
    mes:any[] = [];
    valormes:any[] = [];
    ano:any[] = [];
    valorano:any[] = [];

   constructor(private _global:GlobalService) { }

 ngOnInit(): void {
//     Chart.register(...registerables);

    this._global.obtener('rusuarios').subscribe(resp=>{
        this.usuarios = resp[0].cant
    })
    this._global.obtener('rpersona').subscribe(resp=>{
        this.personas = resp[0].cant
    })
    this._global.obtener('rclientes').subscribe(resp=>{
        this.clientes = resp[0].cant
    })
    this._global.obtener('rproveedores').subscribe(resp=>{
        console.log(resp);
        this.proveedores = resp[0].cant
   })
//     this._global.obtener('rmensuales').subscribe((resp:any[])=>{
//       console.log(resp)
//       resp.forEach(r=>{
//         this.mes.push(r.Mes);
//         this.valormes.push(r.Total)
//       })
//       const myChart = new Chart("myChart", {
//         type: 'bar',
//         data: {
//             labels: this.mes,
//             datasets: [{
//                 label: 'Ventas mensuales',
//                 data: this.valormes, 
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)',
//                     'rgba(158, 37, 148, 0.2)',
//                     'rgba(118, 77, 17, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)',
//                     'rgba(158, 37, 148, 1)',
//                     'rgba(118, 77, 17, 1)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
//     })

//      this._global.obtener('ranuales').subscribe((resp:any[])=>{
//         console.log(resp)
//         resp.forEach(r=>{
//           this.ano.push(r.Mes);
//           this.valorano.push(r.Total)
//         })
//         const myChart2 = new Chart("myChart2", {
//             type: 'line',
//             data: {
//                 labels: this.ano,
//                 datasets: [{
//                     label: 'Ventas anules',
//                     data: this.valorano, 
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 206, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(255, 159, 64, 0.2)',
//                         'rgba(158, 37, 148, 0.2)',
//                         'rgba(118, 77, 17, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)'
//                     ],
//                     borderColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)',
//                         'rgba(158, 37, 148, 1)',
//                         'rgba(118, 77, 17, 1)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)'
//                     ],
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });
      
//     })
  
    
    




  
//   const myChart3 = new Chart("myChart3", {
//     type: 'doughnut',
//     data: {
//         labels: ['Usuarios','Clientes','Proveedores'],
//         datasets: [{
//             label: 'Ventas mensuales',
//             data: [this.usuarios,this.clientes,this.proveedores], 
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(158, 37, 148, 0.2)',
//                 'rgba(118, 77, 17, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(158, 37, 148, 1)',
//                 'rgba(118, 77, 17, 1)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });


// const myChart4 = new Chart("myChart4", {
//   type: 'radar',
//   data: {
//       labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre.','Octubre','Novienbre','Diciembre'],
//       datasets: [{
//           label: 'Ventas anules',
//           data: [18, 77, 80, 95, 20, 45, 63, 100,10,30,80,50], 
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)',
//               'rgba(158, 37, 148, 0.2)',
//               'rgba(118, 77, 17, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)'
//           ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)',
//               'rgba(158, 37, 148, 1)',
//               'rgba(118, 77, 17, 1)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)'
//           ],
//           borderWidth: 1
//       }]
//   },
//   options: {
//       scales: {
//           y: {
//               beginAtZero: true
//           }
//       }
//   }
// });
   }
  

}
