import { Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() insertor: any;
  @Input() header: any;

  inserts = 5; //pass it from product-view-xcel

  constructor() {}

  ngOnInit(): void {

  }
//Warning: Includes   Inserts (DMV): USD $5.00
  setHeaderValue(parameter, value) {

    _.each(this.header, function (param) {
      if (param.name === parameter.name) {
        param.selected = value;
      }
    });

  }

  checkDmvSelection() {
    let selection;
    _.each(this.header, function (param) {
      selection = (param.name === 'DMV' && param.selected === 'Yes');
    });

    return selection;
  }

}
