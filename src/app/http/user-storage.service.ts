import { Injectable } from '@angular/core';


const CURRENT_USER = 'currentUser';

@Injectable()
export class UserStorageService {

  currentUser = {token: ''};

  constructor() { }

  signOut() {
    window.sessionStorage.removeItem(CURRENT_USER);
    window.sessionStorage.clear();
  }

  public saveCurrentUser(user: any) {
    window.sessionStorage.removeItem(CURRENT_USER);
    window.sessionStorage.setItem(CURRENT_USER,  user);
   // window.localStorage.setItem(CURRENT_USER,  user);
  }

  public getCurrentUser(): string {
    return sessionStorage.getItem(CURRENT_USER);
  }

  public getToke(): string {
    this.currentUser = JSON.parse(sessionStorage.getItem(CURRENT_USER));
    return this.currentUser ? this.currentUser.token : '';
  }
}
