import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { UserStorageService } from '../../http/user-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userStorageService: UserStorageService) {}

  canActivate() {
    if (this.userStorageService.getCurrentUser()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/signin']);
    return false;
  }
}
