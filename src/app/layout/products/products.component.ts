import { Component, OnInit, NgModule } from '@angular/core';
import { StatComponent } from '../../shared/modules/stat/stat.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

@NgModule({
  imports: [
      StatComponent,
      CommonModule
  ],
  declarations: [
      ProductsComponent
  ]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
