import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { environment } from '../../../../../src/environments/environment';

const URL = environment.apiUrl + 'fileProductRequested/downloadFile/';

@Component({
  selector: 'app-supplier-blue-light',
  templateUrl: './supplier-blue-light.component.html',
  styleUrls: ['./supplier-blue-light.component.scss']
})
export class SupplierBlueLightComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  constructor() { }

  ngOnInit() {
  }

}
