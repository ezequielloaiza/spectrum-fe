import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserStorageService } from '../../../http/user-storage.service';
import { BasketService } from '../../services/basket/basket.service';
import { CodeHttp } from '../../enum/code-http.enum';
import { AngularFireDatabase } from '@angular/fire/database';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pushRightClass: string = 'push-right';
  user: any;
  count = 0;

  constructor(private translate: TranslateService,
    public router: Router,
    private userStorageService: UserStorageService,
    private basketService: BasketService,
    db: AngularFireDatabase) {

    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.use(this.userStorageService.getLanguage());
    this.user = JSON.parse(userStorageService.getCurrentUser());
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });

    db.list(this.user.userResponse.idUser).valueChanges().subscribe((data) => { 
      this.count = +data[0];
    });

  }

  ngOnInit() { }

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

  onLoggedout() {
    this.userStorageService.signOut();
    this.router.navigateByUrl('signin');
  }

  changeLang(language: string) {
    this.translate.use(language);
    this.userStorageService.setLanguage(language);
  }
}
