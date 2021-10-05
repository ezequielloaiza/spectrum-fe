import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../../../http/user-storage.service';

@Component({
  selector: 'app-order-type',
  templateUrl: './order-type.component.html',
  styleUrls: ['./order-type.component.scss']
})
export class OrderTypeComponent implements OnInit {

  typeOrder = 'new';
  user: any;

  constructor(private userStorageService: UserStorageService) {}

  ngOnInit(): void {
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
  }
}
