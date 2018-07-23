import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../http/user-storage.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    user: any;

    constructor(private userStorageService: UserStorageService) {
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }

    ngOnInit() {}
}
