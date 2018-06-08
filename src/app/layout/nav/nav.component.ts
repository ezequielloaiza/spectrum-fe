import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';
import { Nav } from './nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listNav = new Array<Nav>();

  constructor(public nav: NavService) { }

  ngOnInit() {
    this.listNav = this.nav.getNav();
    console.log('a', this.listNav);
  }

}
