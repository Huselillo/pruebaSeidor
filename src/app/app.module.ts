import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CheckoutComponent } from './componentes/checkout/checkout.component';
import { StatusComponent } from './componentes/status/status.component';
import { CheckoutOrderComponent } from './componentes/checkout-order/checkout-order.component';
import { CheckoutPaidComponent } from './componentes/checkout-paid/checkout-paid.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//Importamos librerias necesarias para la traduccion
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CheckoutComponent,
    StatusComponent,
    CheckoutOrderComponent,
    CheckoutPaidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
