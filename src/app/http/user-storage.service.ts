import { Injectable } from '@angular/core';
import { RoleAdmin } from '../shared/enum/role-admin.enum';
import { RoleSeller } from '../shared/enum/role-seller.enum';
import { RoleUser } from '../shared/enum/role-user.enum';

const CURRENT_USER = 'currentUser';
const LANGUAGE     = 'language';

@Injectable()
export class UserStorageService {

  currentUser = {token: '', role: {idRole: null, name: ''}, roles: []};

  constructor() { }

  signOut() {
    window.sessionStorage.removeItem(CURRENT_USER);
    window.sessionStorage.clear();
  }

  public saveCurrentUser(user: any) {
    window.sessionStorage.removeItem(CURRENT_USER);
    window.sessionStorage.setItem(CURRENT_USER,  user);
    window.sessionStorage.setItem(LANGUAGE,  'en');
  }

  public getCurrentUser(): string {
    return sessionStorage.getItem(CURRENT_USER);
  }

  public getToke(): string {
    this.currentUser = JSON.parse(sessionStorage.getItem(CURRENT_USER));
    return this.currentUser ? this.currentUser.token : '';
  }

  public setLanguage(language) {
    sessionStorage.setItem(LANGUAGE, language);
  }

  public getLanguage(): string {
    return sessionStorage.getItem(LANGUAGE);
  }
  public getRoles(): Array<string> {
    this.currentUser = JSON.parse(sessionStorage.getItem(CURRENT_USER));
    let roles: Array<string>;
    console.log('currentUser', this.currentUser.role.idRole);
    console.log('r', Object.keys(RoleAdmin));
    switch (this.currentUser.role.idRole) {
      case 1:
        roles = Object.keys(RoleAdmin);
          break;
      case 2:
        roles = Object.keys(RoleSeller);
        break;
      case 3:
        roles = Object.keys(RoleUser);
        break;
    }
    roles = roles.slice(roles.length / 2);
    return roles;
  }

}
