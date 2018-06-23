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
            name: 'Spheryc & Toric', 
            parameters: [
              { name: 'Diameter', values: [ { rangeStart: 13.00, rangeEnd: 14.50, step: null } ] },
              { name: 'Base Curve', values: [ {rangeStart: 7.70, rangeEnd: 9.80, step: 0.30} ] },
              { name: 'Axis Toric', values: [ '(Pasos de 5°) Todos'] },
              { name: 'Addition', values: [ 'A-B-C' ] }, //verificar si estos valores son por separado.
              { name: 'Cylinder Toric', values: [ {rangeStart: -0.75, rangeEnd: -0.80, step: 0.25} ] },
              { name: 'Sphere', values: [ {rangeStart: -30.00, rangeEnd: -30.00, step: 0.25} ] },
              { name: 'Multifocal Design', values: [ 'CD - CN' ] }
            ]
          },{
            name: 'Multifocal', 
            parameters: [
              { name: 'Diameter', values: [ {rangeStart: 14.00, rangeEnd: 14.00, step: null} ] },
              { name: 'Base Curve', values: [ {rangeStart: 8.00, rangeEnd: 9.00, step: 0.20} ] },
              { name: 'Axis Toric', values: [ '(Pasos de 5°) Todos' ] },
              { name: 'Addition', values: [ 'A-B-C'] },
              { name: 'Cylinder Toric', values: [ {rangeStart: -0.75, rangeEnd: -0.80, step: 0.25} ] },
              { name: 'Sphere', values: [ {rangeStart: -12.00, rangeEnd: 8.00, step: 0.25} ] },
              { name: 'Multifocal Design', values: [ 'CD - CN' ] }
            ]
          },{
            name: 'UV Blocking', //verificar si viene anidado con el Spheryc & Toric
            parameters:  [
              { name: 'Diameter', values: [] },
              { name: 'Base Curve', values: [] },
              { name: 'Axis Toric', values: [ '(Pasos de 5°) Todos' ] },
              { name: 'Addition', values: [ 'A-B-C' ] },
              { name: 'Cylinder Toric', values: [ {rangeStart: -0.75, rangeEnd: -0.80, step: 0.25} ] },
              { name: 'Sphere', values: []  },
              { name: 'Multifocal Design', values: [ 'CD - CN' ] }
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
            name: 'Spheryc & Toric & Rx Design', 
            parameters: [
              { name: 'Diameter', values: [ {rangeStart: 14.40, rangeEnd: 14.40, step: null} ] },
              { name: 'Base Curve', values: [ {rangeStart: 8.70, rangeEnd: 8.70, step: null} ] },
              { name: 'Axis Toric', values: [] },
              { name: 'Addition', values: [ 'Low - High' ] },
              { name: 'Cylinder Toric', values: [] },
              { name: 'Sphere', values: []  },
              { name: 'Multifocal Design', values: [ 'CD - CN' ] }
            ]
          },{
            name: 'Multifocal', 
            parameters: [
              { name: 'Diameter', values: [ {rangeStart: 14.30, rangeEnd: 14.30, step: null} ] },
              { name: 'Base Curve', values: [ {rangeStart: 8.60, rangeEnd: 8.60, step: null} ] },
              { name: 'Axis Toric', values: [] },
              { name: 'Addition', values: [ 'Low - High' ] },
              { name: 'Cylinder Toric', values: [] },
              { name: 'Sphere', values: [
                          {rangeStart: -6.00, rangeEnd: -10.00, step: 0.50},
                          {rangeStart: -6.00, rangeEnd: 4.00, step: 0.25},
                          {rangeStart: 4.00, rangeEnd: 10.00, step: 0.50}
                        ] },
              { name: 'Multifocal Design', values: [ 'CD - CN' ] }
            ]
          },{//DE AQUI PA ABAJO TA LOCO SOLO SIRVE EL NAME
            name: 'Toric', 
            parameters: [
              { name: 'Diameter', values: [] },
              { name: 'Base Curve', values: [] },
              { name: 'Axis Toric', values: [ '(Pasos de 5°) Todos' ] },
              { name: 'Addition', values: [ 'A-B-C' ] },
              { name: 'Cylinder Toric', values: [ {rangeStart: -0.75, rangeEnd: -0.80, step: 0.25} ] },
              { name: 'Sphere', values: [] },
              { name: 'Multifocal Design', values: [ 'CD - CN' ] }
            ]
          },{//DE AQUI PA ABAJO TA LOCO SOLO SIRVE EL NAME
            name: 'Toric & Rx Design', 
            parameters: [
              { name: 'Diameter', values: [] },
              { name: 'Base Curve', values: [] },
              { name: 'Axis Toric', values: [ '(Pasos de 5°) Todos' ] },
              { name: 'Addition', values: [ 'A-B-C' ] },
              { name: 'Cylinder Toric', values: [ {rangeStart: -0.75, rangeEnd: -0.80, step: 0.25} ] },
              { name: 'Sphere', values: [] },
              { name: 'Multifocal Design', values: [ 'CD - CN' ] }
            ]
          },{//DE AQUI PA ABAJO TA LOCO SOLO SIRVE EL NAME
            name: 'Spheric', 
            parameters: [
              { name: 'Diameter', values: [] },
              { name: 'Base Curve', values: [] },
              { name: 'Axis Toric', values: [ '(Pasos de 5°) Todos' ] },
              { name: 'Addition', values: [ 'A-B-C' ] },
              { name: 'Cylinder Toric', values: [ {rangeStart: -0.75, rangeEnd: -0.80, step: 0.25} ] },
              { name: 'Sphere', values: [] },
              { name: 'Multifocal Design', values: [ 'CD - CN' ] }
            ]
          }],
          
      }
    ];
  }

}
