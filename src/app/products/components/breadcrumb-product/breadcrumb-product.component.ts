import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-product',
  templateUrl: './breadcrumb-product.component.html',
  styleUrls: ['./breadcrumb-product.component.scss']
})
export class BreadcrumbProductComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private route: ActivatedRoute) {}
}
