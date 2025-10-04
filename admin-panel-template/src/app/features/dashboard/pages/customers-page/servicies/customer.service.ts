import { Injectable } from "@angular/core";
import { CUSTOMERS } from "../../../../../core/fake-db/fake-db";
import { Customer } from "../../../models/customer.model";

/**
 * CustomerService
 * 
 * Provides methods to retrieve customer data from the fake database.
 * Used for accessing customer lists and individual customer details.
 */
@Injectable({ providedIn: 'root' })
export class CustomerService {
  /**
   * Retrieves the full list of customers.
   * @returns An array of Customer objects.
   */
  getCustomers(): Customer[] {
    return CUSTOMERS;
  }

  /**
   * Retrieves a customer by their unique ID.
   * @param id The unique identifier of the customer.
   * @returns The Customer object if found, otherwise undefined.
   */
  getCustomerById(id: number): Customer | undefined {
    return CUSTOMERS.find(c => c.id === id);
  }
}