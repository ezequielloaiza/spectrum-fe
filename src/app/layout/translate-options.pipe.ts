import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';
import * as _ from 'lodash';

@Pipe({
  name: 'translateOptions'
})
export class TranslateOptionsPipe implements PipeTransform, OnDestroy {

  constructor(private translateService: TranslateService) { }

  /*transform(items: Array<User>): Array<User> {
    for (const item of items) {
      this.translateService.onLangChange.subscribe(event => {
        this.translateService.get(item.country).subscribe(result => {
          item.country = result;
        });
      });
    }
    return items;
  }*/
  transform(items: any) {
    const observable = Observable.create(observer => {
      this.translateService.get(items).subscribe(result => {
        // result will be an object
        // e.g. { 'JOBS.UX': 'UX Designer', 'JOBS.DEVELOPER': 'Developer' }
        observer.next(result);
      });

      this.translateService.onLangChange.subscribe(event => {
        this.translateService.get(items).subscribe(result => {
          observer.next(result);
        });
      });
  });
    return observable;
  }

  ngOnDestroy() {
    this.translateService.onLangChange.unsubscribe();
  }
}
