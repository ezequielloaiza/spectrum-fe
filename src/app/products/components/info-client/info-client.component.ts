import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() product;
  membership: any;
  client: any;

  @Output("getClient") getClient: EventEmitter<any> = new EventEmitter();



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
    let currentUser = this.user.userResponse;

    if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
      this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.listCustomers = res.data;
          this.listCustomers.map((i) => {
            const accSpct = !!i.accSpct ? i.accSpct + ' - ' : '';
            const certificationCode = !!i.certificationCode ? i.certificationCode + ' | ' : '';
            i.fullName = accSpct + i.name + ' | ' + certificationCode + i.country.name;
            return i;
          });
        }
      });
    } else if (this.user.role.idRole === 3) {
      this.client = currentUser.idUser;
      let accSpct = !!currentUser.accSpct ? currentUser.accSpct + ' - ' : '';
      this.product.client = accSpct + currentUser.name + ' | ' + currentUser.country.name;
      this.findShippingAddress(this.client);
    }
  }

  onSelectedClient(clientSelect) {
    if (clientSelect !== undefined) {
      this.client = clientSelect;
      this.findShippingAddress(this.product.client);
      this.setClient(this.client);
      //this.membership = clientSelect.membership.idMembership;
      //this.definePrice(clienteSelect.membership.idMembership);
    } else {
      //this.client = '';
      this.product.shippingAddress = '';
      this.membership = 0;
      this.product.priceSale = '';
    }
  }

  setClient(client) {
    this.getClient.emit(client);
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
