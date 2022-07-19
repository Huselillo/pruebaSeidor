import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutOrderComponent } from './componentes/checkout-order/checkout-order.component';
import { CheckoutPaidComponent } from './componentes/checkout-paid/checkout-paid.component';
import { CheckoutComponent } from './componentes/checkout/checkout.component';
import { HomeComponent } from './componentes/home/home.component';
//Añadimos las rutas necesarias para las diferentes pantallas
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'checkoutOrder',
    component:CheckoutOrderComponent
  }
  ,
  {
    path:'checkoutPaid',
    component:CheckoutPaidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
