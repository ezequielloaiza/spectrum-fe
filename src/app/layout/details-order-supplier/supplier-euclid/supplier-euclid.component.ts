import { Component, OnInit } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { Input } from '@angular/core';

@Component({
  selector: 'app-supplier-euclid',
  templateUrl: './supplier-euclid.component.html',
  styleUrls: ['./supplier-euclid.component.scss']
})
export class SupplierEuclidComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  constructor() { }

  ngOnInit() {
  }

}
