import {Component, OnInit, Input} from '@angular/core';
import {Customer} from '../customer';

@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.scss']
})
export class CustomerslistComponent implements OnInit {
  @Input() get customers(): Customer [] {
    return this.filteredCustomers;
  }

  set customers(c: Customer[]) {
    this.filteredCustomers = c;
  }

  filteredCustomers: Customer[] = [];
  customerOrderTotal: number;
  currencyCode = 'INR';

  filter(data: string) {
    if (data) {
      console.log(data + ' Output data');
      this.filteredCustomers = this.customers.filter(value => {
        return value.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          value.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          value.orderTotal.toString().indexOf(data.toLowerCase()) > -1;
      });
    } else {
      return this.filteredCustomers = this.customers;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
