import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<any> = new Array;
  constructor() { }

  ngOnInit() {
    this.products = [
      { id: 1, name: 'Quattro',
        priceBase: 2000, price1: 1500, price2: 1600, price3: 1700,
        category: 'Contact Lenses',
        subCategory: 'MarkEnnovy Contact Lenses',
        material: 'Hidrogel, Filcon I 1 49%',
        description: 'Its a product test',
        replacementPeriod: '3 months',
        warranty: 'One year',
        stock: 10,
        colors: ['blue', 'brown', 'green'],
        types: [
          {
            name: 'Spheric & Toric', 
            parameters: [
              { name: 'Diameter', type:"number", values: [ { rangeStart: 13.00, rangeEnd: 14.50, step: null } ] },
              { name: 'Base Curve', type:"number", values: [ {rangeStart: 7.70, rangeEnd: 9.80, step: 0.30} ] },
              { name: 'Axis Toric', type:"number", values: [ '(Pasos de 5°) Todos'] },
              { name: 'Addition', type:"radio", values: [ 'A', 'B', 'C' ] }, //verificar si estos valores son por separado.
              { name: 'Cylinder Toric', type:"number", values: [ {rangeStart: -0.75, rangeEnd: -0.80, step: 0.25} ] },
              { name: 'Sphere', type:"number", values: [ {rangeStart: -30.00, rangeEnd: -30.00, step: 0.25} ] },
              { name: 'Multifocal Design', type:"radio", values: [ 'CD', 'CN' ] }
            ]
          },{
            name: 'Multifocal', 
            parameters: [
              { name: 'Diameter', type:"number", values: [ {rangeStart: 14.00, rangeEnd: 14.00, step: null} ] },
              { name: 'Base Curve', type:"number", values: [ {rangeStart: 8.00, rangeEnd: 9.00, step: 0.20} ] },
              { name: 'Axis Toric', type:"number", values: [ '(Pasos de 5°) Todos' ] },
              { name: 'Addition', type:"radio", values: [ 'A', 'B', 'C' ] },
              { name: 'Cylinder Toric', type:"number", values: [ {rangeStart: -0.75, rangeEnd: -0.80, step: 0.25} ] },
              { name: 'Sphere', type:"number", values: [ {rangeStart: -12.00, rangeEnd: 8.00, step: 0.25} ] },
              { name: 'Multifocal Design', type:"radio", values: [ 'CD', 'CN' ] }
            ]
          },{
            name: 'UV Blocking', //verificar si viene anidado con el Spheryc & Toric
            parameters:  [
              { name: 'Diameter', type:"number", values: [] },
              { name: 'Base Curve', type:"number", values: [] },
              { name: 'Axis Toric', type:"number", values: [ '(Pasos de 5°) Todos' ] },
              { name: 'Addition', type:"radio", values: [ 'A', 'B', 'C' ] },
              { name: 'Cylinder Toric', type:"number", values: [ {rangeStart: -0.75, rangeEnd: -0.80, step: 0.25} ] },
              { name: 'Sphere', type:"number", values: []  },
              { name: 'Multifocal Design', type:"radio", values: [ 'CD', 'CN' ] }
            ]
          }],
          
      },
      { id: 2, name: 'Xtensa',
        priceBase: 4000, price1: 3500, price2: 3600, price3: 3700,
        category: 'Contact Lenses',
        subCategory: 'MarkEnnovy Contact Lenses',
        material: 'Hidrogel, Filcon IV I 55%',
        description: 'Its a product test 2',
        replacementPeriod: '3 months',
        warranty: 'One year',
        stock: 10,
        colors: ['blue', 'brown', 'green'],
        types: [
          {
            name: 'Spheric & Toric & Rx Design', 
            parameters: [
              { name: 'Diameter', type:"number", values: [ {rangeStart: 14.40, rangeEnd: 14.40, step: null} ] },
              { name: 'Base Curve', type:"number", values: [ {rangeStart: 8.70, rangeEnd: 8.70, step: null} ] },
              { name: 'Axis Toric', type:"number", values: [] },
              { name: 'Addition', type:"radio", values: [ 'Low', 'High' ] },
              { name: 'Cylinder Toric', type:"number", values: [] },
              { name: 'Sphere', type:"number", values: []  },
              { name: 'Multifocal Design', type:"radio", values: [ 'CD', 'CN' ] }
            ]
          },{
            name: 'Multifocal', 
            parameters: [
              { name: 'Diameter', type:"number", values: [ {rangeStart: 14.30, rangeEnd: 14.30, step: null} ] },
              { name: 'Base Curve', type:"number", values: [ {rangeStart: 8.60, rangeEnd: 8.60, step: null} ] },
              { name: 'Axis Toric', type:"number", values: [] },
              { name: 'Addition', type:"radio", values: [ 'Low', 'High' ] },
              { name: 'Cylinder Toric', type:"number", values: [] },
              { name: 'Sphere', type:"number", values: [
                          {rangeStart: -10.00, rangeEnd: -6.00, step: 0.50},
                          {rangeStart: -6.00, rangeEnd: 4.00, step: 0.25},
                          {rangeStart: 4.00, rangeEnd: 10.00, step: 0.50}
                        ] },
              { name: 'Multifocal Design', type:"radio", values: [ 'CD', 'CN' ] }
            ]
          },{//DE AQUI PA ABAJO TA LOCO SOLO SIRVE EL NAME
            name: 'Toric', 
            parameters: [
              { name: 'Diameter', type:"number", values: [] },
              { name: 'Base Curve', type:"number", values: [] },
              { name: 'Axis Toric', type:"number", values: [ '(Pasos de 5°) Todos' ] },
              { name: 'Addition', type:"radio", values: [ 'A', 'B', 'C' ] },
              { name: 'Cylinder Toric', type:"number", values: [ {rangeStart: -0.75, rangeEnd: -0.80, step: 0.25} ] },
              { name: 'Sphere', type:"number", values: [] },
              { name: 'Multifocal Design', type:"radio", values: [ 'CD' , 'CN' ] }
            ]
          },{//DE AQUI PA ABAJO TA LOCO SOLO SIRVE EL NAME
            name: 'Toric & Rx Design', 
            parameters: [
              { name: 'Diameter', type:"number", values: [] },
              { name: 'Base Curve', type:"number", values: [] },
              { name: 'Axis Toric', type:"number", values: [ '(Pasos de 5°) Todos' ] },
              { name: 'Addition', type:"radio", values: [ 'A' , 'B', 'C' ] },
              { name: 'Cylinder Toric', type:"number", values: [ {rangeStart: -0.75, rangeEnd: -0.80, step: 0.25} ] },
              { name: 'Sphere', type:"number", values: [] },
              { name: 'Multifocal Design', type:"radio", values: [ 'CD' , 'CN' ] }
            ]
          },{//DE AQUI PA ABAJO TA LOCO SOLO SIRVE EL NAME
            name: 'Spheric', 
            parameters: [
              { name: 'Diameter', type:"number", values: [] },
              { name: 'Base Curve', type:"number", values: [] },
              { name: 'Axis Toric', type:"number", values: [ '(Pasos de 5°) Todos' ] },
              { name: 'Addition', type:"radio", values: [ 'A' , 'B', 'C' ] },
              { name: 'Cylinder Toric', type:"number", values: [ {rangeStart: -0.75, rangeEnd: -0.80, step: 0.25} ] },
              { name: 'Sphere', type:"number", values: [] },
              { name: 'Multifocal Design', type:"radio", values: [ 'CD' , 'CN' ] }
            ]
          }],
          
      }
    ];
  }

}
