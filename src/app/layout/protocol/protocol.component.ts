import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
