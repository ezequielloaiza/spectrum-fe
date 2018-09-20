import { Component, OnInit } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { Input } from '@angular/core';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { environment } from '../../../../../src/environments/environment';
import { saveAs } from 'file-saver';

const URL = environment.apiUrl + 'fileProductRequested/downloadFile/';

@Component({
  selector: 'app-supplier-euclid',
  templateUrl: './supplier-euclid.component.html',
  styleUrls: ['./supplier-euclid.component.scss']
})
export class SupplierEuclidComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  @Input() files: Array<FileProductRequested>;
  constructor(private fileProductRequestedService: FileProductRequestedService) { }

  ngOnInit() {
  }

  downloadFile(item) {
    this.fileProductRequestedService.downloadFile$(item.name).subscribe(res => {
      saveAs(res, item.name);
    }, error => {
      console.log('error', error);
    });
  }

}
