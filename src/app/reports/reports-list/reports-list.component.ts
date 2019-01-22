import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../../http/user-storage.service';
import { NgbModal, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

  listReport: [{id: 1, name: 'Report 1'} , {id: 2, name: 'Report 2'}, {id: 3, name: 'Report 3'}, {id: 4, name: 'Report 4'}];
  currentUser: any;
  user: any;
  products: Array<any> = new Array;
  constructor(private userStorageService: UserStorageService,
              private modalService: NgbModal,
              public router: Router,
              private spinner: NgxSpinnerService) {
    this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
    this.user = JSON.parse(userStorageService.getCurrentUser());
  }

  ngOnInit() {
    
  }


  onSelection(id) {
    if (this.user.role.idRole === 1) {
      // this.router.navigate(['/products/' + idSupplier + '/internal']);
      console.log('works', id);
    }
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'filter2' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

}
