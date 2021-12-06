import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-product',
  templateUrl: './breadcrumb-product.component.html',
  styleUrls: ['./breadcrumb-product.component.scss']
})
export class BreadcrumbProductComponent implements OnInit {

  @Input() product: any;

  ngOnInit(): void {
  }

  constructor() {}
}
