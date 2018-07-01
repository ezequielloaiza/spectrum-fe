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
              { name: 'Diameter', type:"number", values: [ '13.00', '14.50' ], selected: null },
              { name: 'Base Curve', type:"number", values: [ '7.70', '8.00', '8.30', '8.60', '8.90', '9.20', '9.50', '9.80' ], selected: null  },
              { name: 'Axis Toric', type:"number", values: [ ['(Pasos de 5°) Todos'] ] }, //TODO --> verificar rangos.
              
              { name: 'Cylinder Toric', type:"number", values: [ '-0.80', '-0.75' ], selected: null  },
              { name: 'Sphere', type:"number", values:[ '-30.00','-29.75','-29.50','-29.25','-29.00','-28.75','-28.50','-28.25','-28.00','-27.75','-27.50','-27.25','-27.00','-26.75','-26.50','-26.25','-26.00','-25.75','-25.50','-25.25','-25.00','-24.75','-24.50','-24.25','-24.00','-23.75','-23.50','-23.25','-23.00','-22.75','-22.50','-22.25','-22.00','-21.75','-21.50','-21.25','-21.00','-20.75','-20.50','-20.25','-20.00','-19.75','-19.50','-19.25','-19.00','-18.75','-18.50','-18.25','-18.00','-17.75','-17.50','-17.25','-17.00','-16.75','-16.50','-16.25','-16.00','-15.75','-15.50','-15.25','-15.00','-14.75','-14.50','-14.25','-14.00','-13.75','-13.50','-13.25','-13.00','-12.75','-12.50','-12.25','-12.00','-11.75','-11.50','-11.25','-11.00','-10.75','-10.50','-10.25','-10.00','-9.75','-9.50','-9.25','-9.00','-8.75','-8.50','-8.25','-8.00','-7.75','-7.50','-7.25','-7.00','-6.75','-6.50','-6.25','-6.00','-5.75','-5.50','-5.25','-5.00','-4.75','-4.50','-4.25','-4.00','-3.75','-3.50','-3.25','-3.00','-2.75','-2.50','-2.25','-2.00','-1.75','-1.50','-1.25','-1.00','-0.75','-0.50','-0.25','0.00','0.25','0.50','0.75','1.00','1.25','1.50','1.75','2.00','2.25','2.50','2.75','3.00','3.25','3.50','3.75','4.00','4.25','4.50','4.75','5.00','5.25','5.50','5.75','6.00','6.25','6.50','6.75','7.00','7.25','7.50','7.75','8.00','8.25','8.50','8.75','9.00','9.25','9.50','9.75','10.00','10.25','10.50','10.75','11.00','11.25','11.50','11.75','12.00','12.25','12.50','12.75','13.00','13.25','13.50','13.75','14.00','14.25','14.50','14.75','15.00','15.25','15.50','15.75','16.00','16.25','16.50','16.75','17.00','17.25','17.50','17.75','18.00','18.25','18.50','18.75','19.00','19.25','19.50','19.75','20.00','20.25','20.50','20.75','21.00','21.25','21.50','21.75','22.00','22.25','22.50','22.75','23.00','23.25','23.50','23.75','24.00','24.25','24.50','24.75','25.00','25.25','25.50','25.75','26.00','26.25','26.50','26.75','27.00','27.25','27.50','27.75','28.00','28.25','28.50','28.75','29.00','29.25','29.50','29.75','30.00' ], selected: null  },
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
              { name: 'Diameter', type:"number", values: [ '14.00' ], selected: null },
              { name: 'Base Curve', type:"number", values: [ '8.00', '8.20', '8.40', '8.60', '8.80', '9.00' ], selected: null },
              { name: 'Axis Toric', type:"number", values: [ ['(Pasos de 5°) Todos'] ] },
              { name: 'Cylinder Toric', type:"number", values: [ '-0.80', '-0.75' ], selected: null },
              { name: 'Sphere', type:"number", values: [ '-12.00','-11.75','-11.50','-11.25','-11.00','-10.75','-10.50','-10.25','-10.00','-9.75','-9.50','-9.25','-9.00','-8.75','-8.50','-8.25','-8.00','-7.75','-7.50','-7.25','-7.00','-6.75','-6.50','-6.25','-6.00','-5.75','-5.50','-5.25','-5.00','-4.75','-4.50','-4.25','-4.00','-3.75','-3.50','-3.25','-3.00','-2.75','-2.50','-2.25','-2.00','-1.75','-1.50','-1.25','-1.00','-0.75','-0.50','-0.25','0.00','0.25','0.50','0.75','1.00','1.25','1.50','1.75','2.00','2.25','2.50','2.75','3.00','3.25','3.50','3.75','4.00','4.25','4.50','4.75','5.00','5.25','5.50','5.75','6.00','6.25','6.50','6.75','7.00','7.25','7.50','7.75','8.00' ], selected: null },
             
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
              { name: 'Cylinder Toric', type:"number", values: [ '-0.80', '-0.75' ], selected: null },
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
              { name: 'Diameter', type:"number", values: [ '14.40' ], selected: null},
              { name: 'Base Curve', type:"number", values: [ '8.70' ], selected: null },
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
              { name: 'Diameter', type:"number", values: [ '14.30' ], selected: null },
              { name: 'Base Curve', type:"number", values: [' 8.60' ], selected: null },
              { name: 'Axis Toric', type:"number", values: [], selected: null },
              { name: 'Cylinder Toric', type:"number", values: [], selected: null },
              { name: 'Sphere', type:"number", values: [ '-10.00','-9.50','-9.00','-8.50','-8.00','-7.50','-7.00','-6.50','-6.00','-5.75',-'5.50','-5.25','-5.00','-4.75','-4.50','-4.25','-4.00','-3.75','-3.50','-3.25','-3.00','-2.75','-2.50','-2.25','-2.00','-1.75','-1.50','-1.25','-1.00','-0.75','-0.50','-0.25','0.00','0.25','0.50','0.75','1.00','1.25','1.50','1.75','2.00','2.25','2.50','2.75','3.00','3.25','3.50','3.75','4.00','4.50','5.00','5.50','6.00','6.50','7.00','7.50','8.00','8.50','9.00','9.50','10.00'], selected: null },
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
              { name: 'Cylinder Toric', type:"number", values: [ '14.40' ] },
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
              { name: 'Cylinder Toric', type:"number", values: [ '14.40' ] },
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
              { name: 'Cylinder Toric', type:"number", values: [ '14.40' ] },
              { name: 'Sphere', type:"number", values: [] },
              
            ],
            selected: false
          }],

      }
    ];

    console.log(this.products);
  }

}
