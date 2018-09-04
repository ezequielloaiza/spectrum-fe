import { Component, OnInit, Input } from '@angular/core';
import { ProductRequested } from '../../../shared/models/productrequested';
import { FileProductRequested } from '../../../shared/models/fileproductrequested';
import { FileProductRequestedService } from '../../../shared/services/fileproductrequested/fileproductrequested.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { environment } from '../../../../../src/environments/environment';

const URL = environment.apiUrl + 'fileProductRequested/downloadFile/';

@Component({
  selector: 'app-supplier-markennovy',
  templateUrl: './supplier-markennovy.component.html',
  styleUrls: ['./supplier-markennovy.component.scss']
})
export class SupplierMarkennovyComponent implements OnInit {

  @Input() lista: Array<ProductRequested>;
  @Input() files: Array<FileProductRequested>;
  constructor(private fileProductRequestedService: FileProductRequestedService) { }

  ngOnInit() {
  }

  downloadFile(item) {
    this.fileProductRequestedService.downloadFile$(item.name).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        console.log('Delete files');
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }
}
