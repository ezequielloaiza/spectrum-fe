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
        description: 'It is a product test',
        replacementPeriod: '3 months',
        warranty: 'One year',
        stock: 10,
        colors: [
            { name: 'Blue', selected: true },
            { name: 'Brown', selected: false },
            { name: 'Green', selected: false }
        ], //TODO --> preguntar si su existencia depende por types o por producto.
        types: [
          //TODO --> verificar la clasificacion por tipo y si son anidadas o no.
          //TODO --> verificar las unidades de medidas para c/u de los parametros. 
          /* DIAMETROS son milimetros */
          //TODO --> verificar si todos los parametros son requeridos para poder comprar.
          {
            name: 'Spheric & Toric',
            parameters: [
              { name: 'Addition', type:"radio", values: [
                { name: 'A', selected: true },
                { name: 'B', selected: false },
                { name: 'C', selected: false }]
              }, //TODO --> verificar si estos valores son por separado.
              { name: 'Multifocal Design', type:"radio", values: [
                                                                { name: 'CD', selected: true },
                                                                { name: 'CN', selected: false }]
              },
              { name: 'Diameter', type:"number", values: [ [13.00, 14.50] ], selected: 13.00 },
              { name: 'Base Curve', type:"number", values: [ [7.70, 8.00, 8.30, 8.60, 8.90, 9.20, 9.50, 9.80] ], selected: 7.70  },
              { name: 'Axis Toric', type:"number", values: [ ['(Pasos de 5°) Todos'] ] }, //TODO --> verificar rangos.
              
              { name: 'Cylinder Toric', type:"number", values: [ [-0.80, -0.75] ], selected: -0.80  },
              { name: 'Sphere', type:"number", values:[ [-30,-29.75,-29.5,-29.25,-29,-28.75,-28.5,-28.25,-28,-27.75,-27.5,-27.25,-27,-26.75,-26.5,-26.25,-26,-25.75,-25.5,-25.25,-25,-24.75,-24.5,-24.25,-24,-23.75,-23.5,-23.25,-23,-22.75,-22.5,-22.25,-22,-21.75,-21.5,-21.25,-21,-20.75,-20.5,-20.25,-20,-19.75,-19.5,-19.25,-19,-18.75,-18.5,-18.25,-18,-17.75,-17.5,-17.25,-17,-16.75,-16.5,-16.25,-16,-15.75,-15.5,-15.25,-15,-14.75,-14.5,-14.25,-14,-13.75,-13.5,-13.25,-13,-12.75,-12.5,-12.25,-12,-11.75,-11.5,-11.25,-11,-10.75,-10.5,-10.25,-10,-9.75,-9.5,-9.25,-9,-8.75,-8.5,-8.25,-8,-7.75,-7.5,-7.25,-7,-6.75,-6.5,-6.25,-6,-5.75,-5.5,-5.25,-5,-4.75,-4.5,-4.25,-4,-3.75,-3.5,-3.25,-3,-2.75,-2.5,-2.25,-2,-1.75,-1.5,-1.25,-1,-0.75,-0.5,-0.25,0,0.25,0.5,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3,3.25,3.5,3.75,4,4.25,4.5,4.75,5,5.25,5.5,5.75,6,6.25,6.5,6.75,7,7.25,7.5,7.75,8,8.25,8.5,8.75,9,9.25,9.5,9.75,10,10.25,10.5,10.75,11,11.25,11.5,11.75,12,12.25,12.5,12.75,13,13.25,13.5,13.75,14,14.25,14.5,14.75,15,15.25,15.5,15.75,16,16.25,16.5,16.75,17,17.25,17.5,17.75,18,18.25,18.5,18.75,19,19.25,19.5,19.75,20,20.25,20.5,20.75,21,21.25,21.5,21.75,22,22.25,22.5,22.75,23,23.25,23.5,23.75,24,24.25,24.5,24.75,25,25.25,25.5,25.75,26,26.25,26.5,26.75,27,27.25,27.5,27.75,28,28.25,28.5,28.75,29,29.25,29.5,29.75,30] ], selected: -30.00  },
            ],
            selected: true
          },{
            name: 'Multifocal',
            parameters: [
              { name: 'Addition', type:"radio", values: [
                { name: 'A', selected: true },
                { name: 'B', selected: false },
                { name: 'C', selected: false }]
              },
              { name: 'Multifocal Design', type:"radio", values: [
                                                                { name: 'CD', selected: true },
                                                                { name: 'CN', selected: false }]
              },
              { name: 'Diameter', type:"number", values: [ [14.00] ], selected: 14.00 },
              { name: 'Base Curve', type:"number", values: [ [8.00, 8.20, 8.40, 8.60, 8.80, 9.00] ], selected: 8.00 },
              { name: 'Axis Toric', type:"number", values: [ ['(Pasos de 5°) Todos'] ] },
              { name: 'Cylinder Toric', type:"number", values: [ [-0.80, -0.75] ], selected: -0.80 },
              { name: 'Sphere', type:"number", values: [ [-12,-11.75,-11.5,-11.25,-11,-10.75,-10.5,-10.25,-10,-9.75,-9.5,-9.25,-9,-8.75,-8.5,-8.25,-8,-7.75,-7.5,-7.25,-7,-6.75,-6.5,-6.25,-6,-5.75,-5.5,-5.25,-5,-4.75,-4.5,-4.25,-4,-3.75,-3.5,-3.25,-3,-2.75,-2.5,-2.25,-2,-1.75,-1.5,-1.25,-1,-0.75,-0.5,-0.25,0,0.25,0.5,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3,3.25,3.5,3.75,4,4.25,4.5,4.75,5,5.25,5.5,5.75,6,6.25,6.5,6.75,7,7.25,7.5,7.75,8.00] ], selected: -12.00 },
             
            ],
            selected: false
          },{
            name: 'UV Blocking', //TODO --> verificar si viene anidado con el Spheryc & Toric
            parameters:  [
              { name: 'Addition', type:"radio", values: [
                { name: 'A', selected: true },
                { name: 'B', selected: false },
                { name: 'C', selected: false }]
              },
              { name: 'Multifocal Design', type:"radio", values: [
                                                                { name: 'CD', selected: true },
                                                                { name: 'CN', selected: false }]
              },
              { name: 'Diameter', type:"number", values: [], selected: null }, //TODO --> cuando no tiene el parametro que rangos manejamos
              { name: 'Base Curve', type:"number", values: [], selected: null },
              { name: 'Axis Toric', type:"number", values: [ ['(Pasos de 5°) Todos'] ] },
              { name: 'Cylinder Toric', type:"number", values: [ [-0.80, -0.75] ], selected: -0.80 },
              { name: 'Sphere', type:"number", values: [], selected: null },
              
            ],
            selected: false
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
        colors: [
            { name: 'Blue', selected: true },
            { name: 'Brown', selected: false },
            { name: 'Green', selected: false }
        ],
        types: [
          {
            name: 'Spheric & Toric & Rx Design',
            parameters: [
              { name: 'Addition', type:"radio", values: [
                                                      { name: 'Low', selected: true },
                                                      { name: 'High', selected: false }]
              },
              { name: 'Multifocal Design', type:"radio", values: [
                                                                { name: 'CD', selected: true },
                                                                { name: 'CN', selected: false }]
              },
              { name: 'Diameter', type:"number", values: [ [14.40] ], selected: 14.40 },
              { name: 'Base Curve', type:"number", values: [ [8.70] ], selected: 8.70 },
              { name: 'Axis Toric', type:"number", values: [], selected: null },
              { name: 'Cylinder Toric', type:"number", values: [], selected: null },
              { name: 'Sphere', type:"number", values: [], selected: null  },
              
            ],
            selected: true
          },{
            name: 'Multifocal',
            parameters: [
              { name: 'Addition', type:"radio", values: [
                                                      { name: 'Low', selected: true },
                                                      { name: 'High', selected: false }]
              },
              { name: 'Multifocal Design', type:"radio", values: [
                                                                { name: 'CD', selected: true },
                                                                { name: 'CN', selected: false }]
              },
              { name: 'Diameter', type:"number", values: [ [14.30] ], selected: 14.30 },
              { name: 'Base Curve', type:"number", values: [ [8.60] ], selected: 8.60 },
              { name: 'Axis Toric', type:"number", values: [], selected: null },
              { name: 'Cylinder Toric', type:"number", values: [], selected: null },
              { name: 'Sphere', type:"number", values: [
                          [-10,-9.5,-9,-8.5,-8,-7.5,-7,-6.5,-6],
                          [-6,-5.75,-5.5,-5.25,-5,-4.75,-4.5,-4.25,-4,-3.75,-3.5,-3.25,-3,-2.75,-2.5,-2.25,-2,-1.75,-1.5,-1.25,-1,-0.75,-0.5,-0.25,0,0.25,0.5,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3,3.25,3.5,3.75,4],
                          [4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10],
                        ], selected: null },
              
            ],
            selected: false
          },{//DE AQUI PA ABAJO TA LOCO SOLO SIRVE EL NAME
            name: 'Toric',
            parameters: [
              { name: 'Addition', type:"radio", values: [
                                                      { name: 'A', selected: true },
                                                      { name: 'B', selected: false },
                                                      { name: 'C', selected: false }]
              },
              { name: 'Multifocal Design', type:"radio", values: [
                                                                { name: 'CD', selected: true },
                                                                { name: 'CN', selected: false }]
              },
              { name: 'Diameter', type:"number", values: [] },
              { name: 'Base Curve', type:"number", values: [] },
              { name: 'Axis Toric', type:"number", values: [ ['(Pasos de 5°) Todos'] ] },
              { name: 'Cylinder Toric', type:"number", values: [ [14.40] ] },
              { name: 'Sphere', type:"number", values: [] },
              
            ],
            selected: false
          },{//DE AQUI PA ABAJO TA LOCO SOLO SIRVE EL NAME
            name: 'Toric & Rx Design',
            parameters: [
              { name: 'Addition', type:"radio", values: [
                                                      { name: 'A', selected: true },
                                                      { name: 'B', selected: false },
                                                      { name: 'C', selected: false }]
              },
              { name: 'Multifocal Design', type:"radio", values: [
                                                                { name: 'CD', selected: true },
                                                                { name: 'CN', selected: false }]
              },
              { name: 'Diameter', type:"number", values: [] },
              { name: 'Base Curve', type:"number", values: [] },
              { name: 'Axis Toric', type:"number", values: [ ['(Pasos de 5°) Todos'] ] },
              { name: 'Cylinder Toric', type:"number", values: [ [14.40] ] },
              { name: 'Sphere', type:"number", values: [] },
              
            ],
            selected: false
          },{//DE AQUI PA ABAJO TA LOCO SOLO SIRVE EL NAME
            name: 'Spheric',
            parameters: [
              { name: 'Addition', type:"radio", values: [
                                                      { name: 'A', selected: true },
                                                      { name: 'B', selected: false },
                                                      { name: 'C', selected: false }]
              },
              { name: 'Multifocal Design', type:"radio", values: [
                                                                { name: 'CD', selected: true },
                                                                { name: 'CN', selected: false }]
              },
              { name: 'Diameter', type:"number", values: [] },
              { name: 'Base Curve', type:"number", values: [] },
              { name: 'Axis Toric', type:"number", values: [ ['(Pasos de 5°) Todos'] ] },
              { name: 'Cylinder Toric', type:"number", values: [ [14.40] ] },
              { name: 'Sphere', type:"number", values: [] },
              
            ],
            selected: false
          }],

      }
    ];

    console.log(this.products);
  }

}
