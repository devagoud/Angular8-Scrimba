import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
import {CustomerServiceService} from '../customer-service.service';

@Component({
  selector: 'app-customes',
  templateUrl: './customes.component.html',
  styleUrls: ['./customes.component.scss']
})
export class CustomesComponent implements OnInit {
 title: string;
 people: Customer[];
 total: number;
  constructor(private customerService: CustomerServiceService) { }

  ngOnInit() {
    this.title = 'Customers';
    this.people = [
      { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
      { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
      { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
      { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
    ];
    const customers = this.people.filter(value => value.id === 1).reverse();
    console.log(customers);
    this.total = this.people.length;
    this.customerService.getUsers().subscribe(value => {
      this.people = value;
    });
  }

}
