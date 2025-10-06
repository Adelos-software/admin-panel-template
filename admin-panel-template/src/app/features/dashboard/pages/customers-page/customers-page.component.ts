import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

/**
 * CustomersPageComponent
 * 
 * Displays a list of customers in a table format.
 * Retrieves customer data from the CustomerService and provides navigation to customer details.
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
   * @param router Angular Router used for navigation to customer details.
   */
  constructor(private customerService: CustomerService, private router: Router) { }

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * Retrieves the list of customers from the service.
   */
  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

  /**
   * Navigates to the detail page for the selected customer.
   * @param id The unique identifier of the customer.
   */
  goToCustomer(id: number) {
    this.router.navigate(['/dashboard/customers', id]);
  }
}
