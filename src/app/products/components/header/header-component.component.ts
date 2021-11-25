import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() header: any;
  dmv: any;

  constructor() {}

  ngOnInit(): void {
    this.dmv =  _.find(this.header, {name: "DMV"});
  }

  setHeaderValue(parameter, value) {
    parameter.selected = value;
  }
}
