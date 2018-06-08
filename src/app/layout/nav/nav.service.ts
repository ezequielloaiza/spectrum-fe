import { Injectable } from '@angular/core';
import { Nav } from './nav';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public listNav = new Array<Nav>();
  nav: Nav = new Nav();

  constructor() {
    this.nav.name = 'sss';
    this.nav.routerLink = './';
    this.listNav.push(this.nav);
    console.log(this.listNav);
  }

  public addNav(nav: Nav): void {
    this.listNav.push(nav);
  }

  public getNav(): Array<Nav> {
    return this.listNav;
  }
}
