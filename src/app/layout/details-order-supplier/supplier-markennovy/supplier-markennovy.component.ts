import { Component, OnInit, Input } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';

@Component({
  selector: 'app-supplier-markennovy',
  templateUrl: './supplier-markennovy.component.html',
  styleUrls: ['./supplier-markennovy.component.scss']
})
export class SupplierMarkennovyComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  constructor() { }

  ngOnInit() {
  }
}
