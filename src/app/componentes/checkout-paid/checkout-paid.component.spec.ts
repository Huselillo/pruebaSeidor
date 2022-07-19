import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPaidComponent } from './checkout-paid.component';

describe('CheckoutPaidComponent', () => {
  let component: CheckoutPaidComponent;
  let fixture: ComponentFixture<CheckoutPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutPaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
