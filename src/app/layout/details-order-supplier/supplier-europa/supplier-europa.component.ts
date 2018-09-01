import { Component, OnInit, Input } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';

@Component({
  selector: 'app-supplier-europa',
  templateUrl: './supplier-europa.component.html',
  styleUrls: ['./supplier-europa.component.scss']
})
export class SupplierEuropaComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  constructor() { }

  ngOnInit() {
  }
}
