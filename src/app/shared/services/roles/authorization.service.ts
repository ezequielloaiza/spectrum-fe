import { Injectable } from '@angular/core';
import { UserStorageService } from '../../../http/user-storage.service';

@Injectable()
export class AuthorizationService {
     permissions: Array<string>; // Store the actions for which this user has permission
     constructor(private userService: UserStorageService) { }
     hasPermission(authGroup: String) {
           console.log("permission: ", this.permissions);
          if (this.permissions && this.permissions.find(permission => {
                    return permission === authGroup;
               })) {
               return true;
          }
          return false;
     }

     // This method is called once and a list of permissions is stored in the permissions property
     initializePermissions() {
          return new Promise((resolve, reject) => {
               // Call API to retrieve the list of actions this user is permitted to perform.
               // In this case, the method returns a Promise, but it could have been implemented as an Observable
               let roles = this.userService.getRoles();
               if(roles.length > 0){
                  this.permissions = roles;
                  resolve();
               }else{
                  reject();
               }
          });
      }
}
