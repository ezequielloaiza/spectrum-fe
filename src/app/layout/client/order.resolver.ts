import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BreadcrumbService } from '../../shared/modules/breadcrumb/breadcrumb.service';
import { Breadcrumb } from '../../shared/models/breadcrumb';
import { Observable } from 'rxjs';



@Injectable()
export class OrderResolver implements Resolve<any> {

  constructor(private router: Router, private breadcrumbService: BreadcrumbService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {

    const id = route.paramMap.get('id');
    if (state.url === '/order-list-client') {
      this.breadcrumbService.push(new Breadcrumb('Orders List', 'fa fa-folder-open', './'));
    } else {
      if (id) {
       this.breadcrumbService.push(new Breadcrumb('Order', 'fa fa-folder-open', 'details-order/' + id + '/view'));
       }
    }
  }

}
