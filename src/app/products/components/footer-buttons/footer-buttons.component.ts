import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { viewParentEl } from '@angular/core/src/view/util';

@Component({
  selector: 'app-footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrls: ['./footer-buttons.component.scss']
})
export class FooterButtonsComponent implements OnInit {

  @Input() buttons: any;
  @Output("buttonAction") buttonAction: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }
  
  executeAction(fn) {
    this.buttonAction.emit(fn);
  }
}
