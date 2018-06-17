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
      this.breadcrumbList.push(new Breadcrumb('List of Clients', 'fa fa-users', './'));
    } else {
      this.breadcrumbList.push(new Breadcrumb('List of Clients', 'fa fa-users', './'));
      this.breadcrumbService.push(new Breadcrumb('Client', 'fa fa-user', state.snapshot.url));
    }
  }



  getBreadcrumb(): void {
    this.breadcrumbService.get().subscribe( res => {
      if (res.name === 'List of Clients') {
        this.breadcrumbList = new Array();
      }
      this.breadcrumbList.push(res);
    });
  }


}
