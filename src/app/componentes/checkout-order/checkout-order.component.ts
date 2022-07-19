import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.css']
})
export class CheckoutOrderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
//Dependiendo de donde pulsemos, importando Router, redireccionamos a un sitio u otro
  goPaid(){
    this.router.navigate(['/checkoutPaid']);
  }
  goBack(){
    this.router.navigate(['/']);
  }

}
