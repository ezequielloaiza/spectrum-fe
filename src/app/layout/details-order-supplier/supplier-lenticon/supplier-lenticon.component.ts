import { Component, OnInit, Input } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';

@Component({
  selector: 'app-supplier-lenticon',
  templateUrl: './supplier-lenticon.component.html',
  styleUrls: ['./supplier-lenticon.component.scss']
})
export class SupplierLenticonComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  constructor() { }

  ngOnInit() {
  }


}
