import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { UserStorageService } from '../../../http/user-storage.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { UserService } from '../../../shared/services';
import { ShippingAddressService } from '../../../shared/services/shippingAddress/shipping-address.service';

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.scss']
})
export class InfoClientComponent implements OnInit {

  @Input() idSupplier;

  product = {
    patient: null,
    client: null,
    shippingAddress: null
  };

  listCustomers: Array<any>;

  user: any;

  constructor(private userStorageService: UserStorageService,
              private shippingAddressService: ShippingAddressService,
              private userService: UserService,
              private notification: ToastrService,
              private translate: TranslateService) {}

  ngOnInit(): void {
    this.user = JSON.parse(this.userStorageService.getCurrentUser());
    this.getCustomer();
  }

  getCustomer() {
  if ( this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.userService.allCustomersAvailableBuy$(this.idSupplier).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listCustomers = res.data;
          this.listCustomers.map((i) => {
            const accSpct = !!i.accSpct ?  i.accSpct + ' - ' : '';
            i.fullName = accSpct + i.name + ' | ' +  i.certificationCode + ' | ' + i.country.name;
            return i;
          });
        }
      });
    }
  }

  onSelectedClient(clientSelect) {
    if (clientSelect !== undefined) {
      // this.client = clientSelect;
      this.findShippingAddress(this.product.client);
      // this.definePrice(clientSelect.membership.idMembership);
    } else {
      // this.client = '';
      this.product.shippingAddress = '';
      // this.product.priceSale = '';
    }
  }

  findShippingAddress(idCliente) {
    this.shippingAddressService.findIdUser$(idCliente).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country.name;
      } else if (res.code === CodeHttp.notContent) {
        this.product.shippingAddress = '';
        this.translate.get('You must enter a main address in the shipping address module',
         {value: 'You must enter a main address in the shipping address module'}).subscribe(( res: string) => {
          this.notification.warning('', res);
        });
      } else {
        this.product.shippingAddress = '';
      }
    });
  }
}
