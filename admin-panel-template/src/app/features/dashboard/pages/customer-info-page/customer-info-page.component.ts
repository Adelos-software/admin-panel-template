import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

/**
 * CustomerInfoPageComponent
 *
 * Displays detailed information for a specific customer.
 * Retrieves the customer data based on the route parameter (customer ID).
 */
@Component({
  selector: 'app-customer-info-page',
  standalone: true,
  imports: [],
  templateUrl: './customer-info-page.component.html',
  styleUrl: './customer-info-page.component.scss'
})
export class CustomerInfoPageComponent implements OnInit {
  /** Holds the customer object to be displayed, or undefined if not found */
  customer: Customer | undefined;

  /**
   * Constructs the CustomerInfoPageComponent.
   * @param route ActivatedRoute for accessing route parameters.
   * @param customerService Service used to retrieve customer data.
   */
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * Retrieves the customer ID from the route and fetches the corresponding customer.
   */
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.customer = this.customerService.getCustomerById(id);
  }
}
