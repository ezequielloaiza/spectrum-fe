import { Injectable, NgModule } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService, UserService } from '../services';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../http/user-storage.service';
import * as _ from 'lodash';

@Injectable()
export class RoleGuard implements CanActivateChild {

  constructor(protected router: Router, 
              protected authorizationService: AuthorizationService, 
              private userService: UserStorageService) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    if (this.verifyPermission(childRoute.data['option'])) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
 
  verifyPermission(action: string): boolean {
    return _.includes(this.userService.getRoles(), action);
  }
  
  protected hasRequiredPermission(authGroup: string): Promise<boolean> | boolean {
  //If user’s permissions already retrieved from the API
    if (this.authorizationService.permissions) {
      if (authGroup) {
        return this.authorizationService.hasPermission(authGroup);
      } else {
        return this.authorizationService.hasPermission(null); }
    } else {
    // Otherwise, must request permissions from the API first
      const promise = new Promise<boolean>((resolve, reject) => {
      this.authorizationService.initializePermissions()
            .then(() => {
                    if (authGroup) {
                      resolve(this.authorizationService.hasPermission(authGroup));
                    } else {
                      resolve(this.authorizationService.hasPermission(null));
                    }
            }).catch(() => {
                    resolve(false);
            });
      });
      return promise;
    }
  }
}
