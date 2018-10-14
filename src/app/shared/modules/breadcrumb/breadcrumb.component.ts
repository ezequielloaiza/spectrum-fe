import { Component, OnInit, Input } from '@angular/core';
import { Breadcrumb } from '../../models/breadcrumb';
import { BreadcrumbService } from './breadcrumb.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, RouterState, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {


  @Input() heading: string;
  @Input() icon: string;

  breadcrumbList: Array<Breadcrumb> = new Array();

  constructor(private breadcrumbService: BreadcrumbService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getBreadcrumb();
    const state: RouterState = this.router.routerState;
    if (state.snapshot.url === '/user') {
      this.breadcrumbList.push(new Breadcrumb('List of Customers', 'fa fa-users', './'));
    } else if(state.snapshot.url.substring(0,5) ==='/user') {
      this.breadcrumbList.push(new Breadcrumb('List of Customers', 'fa fa-users', './'));
      this.breadcrumbService.push(new Breadcrumb('Customer', 'fa fa-user', state.snapshot.url));
    }
    else if(state.snapshot.url === '/seller'){
      this.breadcrumbList.push(new Breadcrumb('List of Sellers', 'fa fa-users', './'));
    }else if(state.snapshot.url.substring(0,5) ==='/seller'){
      this.breadcrumbList.push(new Breadcrumb('List of Sellers', 'fa fa-users', './'));
      this.breadcrumbService.push(new Breadcrumb('Seller', 'fa fa-user', state.snapshot.url));
    }
    else if (state.snapshot.url === '/order-list-client'){
      this.breadcrumbList.push(new Breadcrumb('Orders List', 'fa fa-folder-open', './'));
      this.breadcrumbService.push(new Breadcrumb('Order', 'fa fa-folder-open', state.snapshot.url));
    }
  }



  getBreadcrumb(): void {
    this.breadcrumbService.get().subscribe( res => {
      if (res.name === 'List of Customers' || res.name ==='List of Sellers' || res.name ==='order-list-client') {
        this.breadcrumbList = new Array();
      }
      this.breadcrumbList.push(res);
    });
  }


}
