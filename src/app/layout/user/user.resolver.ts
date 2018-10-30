import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BreadcrumbService } from '../../shared/modules/breadcrumb/breadcrumb.service';
import { Breadcrumb } from '../../shared/models/breadcrumb';
import { Observable } from 'rxjs';



@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(private router: Router, private breadcrumbService: BreadcrumbService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {

    const id = route.paramMap.get('id');
    if (state.url === '/user') {
      this.breadcrumbService.push(new Breadcrumb('List of Customers', 'fa fa-users', './'));
    } else {
      if (id) {
       this.breadcrumbService.push(new Breadcrumb('Customer', 'fa fa-user', '/user/' + id + '/edit'));
       }
    }
  }

}
