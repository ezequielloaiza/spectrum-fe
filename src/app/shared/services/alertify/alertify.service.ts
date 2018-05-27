import { Injectable, Component } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})

export class AlertifyService {

  constructor() { }

  confirm(title: string, message: string, okCallBack: () => any, cancelCallBack: () => any) {
    alertify.confirm(title, message, function (e) {
      if (e) {
        okCallBack();
      } else {
        // Do anything
      }
    }, function(e) {
      if(e) {
        cancelCallBack();
      } else {
        // Do anything
      }
    }).set('labels', {ok: 'Ok', cancel:'No'});
  }
  
  success(message: string) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.success(message);
  }

  error(message: string) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.error(message);
  }

  warning(message: string) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.warning(message);
  }

  message(message: string) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.message(message);
  }

}
