import { Injectable } from '@angular/core';
import { Breadcrumb } from '../../models/breadcrumb';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  breadcrumbList = new Subject<any>();

  constructor() { }

  public get(): Observable<any> {
    return this.breadcrumbList.asObservable();
  }

  public push(breadcrumb: Breadcrumb): void {
    this.breadcrumbList.next(breadcrumb);
  }

  public clean(): void {
    this.breadcrumbList = new Subject<Breadcrumb>();
  }

}
