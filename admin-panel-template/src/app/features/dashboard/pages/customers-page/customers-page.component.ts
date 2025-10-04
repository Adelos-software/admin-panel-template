import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

/**
 * CustomersPageComponent
 * 
 * Displays a list of customers in a table format.
 * Retrieves customer data from the CustomerService.
 */
@Component({
  selector: 'app-customers-page',
  standalone: true,
  imports: [],
  templateUrl: './customers-page.component.html',
  styleUrl: './customers-page.component.scss'
})
export class CustomersPageComponent implements OnInit {
  /** Array to hold the list of customers displayed on the page */
  customers: Customer[] = [];

  /**
   * Constructs the CustomersPageComponent.
   * @param customerService Service used to retrieve customer data.
   */
  constructor(private customerService: CustomerService) { }

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * Retrieves the list of customers from the service.
   */
  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }
}
