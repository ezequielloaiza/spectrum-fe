import { Component, OnInit } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { Input } from '@angular/core';

@Component({
  selector: 'app-supplier-magic-look',
  templateUrl: './supplier-magic-look.component.html',
  styleUrls: ['./supplier-magic-look.component.scss']
})
export class SupplierMagicLookComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  constructor() { }

  ngOnInit() {
  }

}
