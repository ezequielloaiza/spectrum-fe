import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserStorageService } from '../../../http/user-storage.service';
import { UserService } from '../../../shared/services';
import { SupplierService } from '../../../shared/services/suppliers/supplier.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';
    user: any;
    listSupplierUser: Array<any> = new Array;

    constructor(private translate: TranslateService, public router: Router, private userService: UserStorageService, private supplierService: SupplierService) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.use(this.userService.getLanguage());
        this.user = JSON.parse(userService.getCurrentUser());

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
      this.getSupplierByUser(this.user.userResponse.idUser);
    }

    getSupplierByUser(id: any) {
      this.supplierService.findByUser$(id).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listSupplierUser = res.data;
        }
      });
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
        this.userService.setLanguage(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
