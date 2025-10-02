import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoPageComponent } from './customer-info-page.component';

describe('CustomerInfoPageComponent', () => {
  let component: CustomerInfoPageComponent;
  let fixture: ComponentFixture<CustomerInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerInfoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
