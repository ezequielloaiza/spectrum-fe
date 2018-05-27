import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from './modals/user-modal/user-modal.component';
import { UserService } from '../../shared/services';
import { CodeHttp } from '../../shared/enum/code-http.enum';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  listUsers: Array<any> = new Array;

  constructor(private modalService: NgbModal, private userService: UserService) { }

  ngOnInit() {
    this.getListUser();
  }


  openModal(): void {
    const modalRef = this.modalService.open(UserModalComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.result.then((result) => {
      this.getListUser();
    } , (reason) => {
    });
  }

  getListUser(): void {
    this.userService.allUserBySeller$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listUsers = res.data;
      }
    });
  }

}
