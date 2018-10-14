import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

   place = {
    address_components: []
  };

  constructor(private http: HttpClient) { }

  public searchCities$(input: string, locale: string): Observable<any> {
    return this.http.get(environment.apiUrl + 'google/searchCities/' + input + '/' + locale).pipe(
      map(response => response['predictions'])
    );
  }

  public placeById$(placeId: string, locale: string): Observable<any> {
    return this.http.get(environment.apiUrl + 'google/placeById/' + placeId + '/' + locale);
  }

  public setPlace(_place) {
    this.place = _place;
  }

  public getState(): string {
    return this.getComponentType('administrative_area_level_1');
  }

  public getCity(): string {
    return this.getComponentType('locality');
  }

  public getCountry(): string {
    return this.getComponentType('country');
  }

  public getPostalCode(): string {
    return this.getComponentType('postal_code');
  }

  private getComponentType(type: string): any {
    if (!this.place || !this.place.address_components.length) {
      return null;
    }

    const component = _.find(this.place.address_components, function(comp) {
      return _.some(comp.types, function(_type) { return _type === type; });
    });

    if (component) {
      return component.long_name;
    }
  }
}
