import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-seller',
  templateUrl: './detail-seller.component.html',
  styleUrls: ['./detail-seller.component.scss']
})
export class DetailSellerComponent implements OnInit {
  
  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
