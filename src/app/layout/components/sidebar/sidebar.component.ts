import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserStorageService } from '../../../http/user-storage.service';
import { UserService } from '../../../shared/services';
import { SageService } from '../../../shared/services/sage/sage.service';
import { ToastrService } from 'ngx-toastr';
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

    constructor(private translate: TranslateService,
                public router: Router,
                private userService: UserStorageService,
                private sage: SageService,
                private notification: ToastrService) {
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

    connectToSage() {
      this.sage.connectSage$().subscribe((res) => {
        window.open(res.data,"Sage","menubar=1,resizable=1,width=650,height=680,left=350");
      })
    }

    validSageIntegration(type) {
      let isValid = true;
      this.sage.findToken$().subscribe((res) => {
        if (res.code === CodeHttp.unauthorized) {
          this.translate.get('You must login in sage', { value: 'You must login in sage' }).subscribe((res: string) => {
            this.notification.error('', res);
          });
        } else {
          switch (type) {
            case 'manageCustomers':
              this.router.navigate(['/user']);
              break;
            case 'manageInvoices':
              this.router.navigate(['/invoice']);
              break;
            case 'manageOrders':
              this.addExpandClass('orders');
              break;
            case 'managePayments':
              this.addExpandClass('payments');
              break;
          }
        }
      });
    }
}
