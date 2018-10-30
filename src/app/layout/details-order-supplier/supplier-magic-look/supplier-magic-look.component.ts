import { Component, OnInit } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { Input } from '@angular/core';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { environment } from '../../../../../src/environments/environment';

@Component({
  selector: 'app-supplier-magic-look',
  templateUrl: './supplier-magic-look.component.html',
  styleUrls: ['./supplier-magic-look.component.scss']
})
export class SupplierMagicLookComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  @Input() files: Array<FileProductRequested>;
  constructor() { }

  ngOnInit() {
  }
}
