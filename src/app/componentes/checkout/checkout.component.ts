import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
//Creamos el formgroup
  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
//Validamos que sea el usuario que sale en el pdf y redireccionamos a la siguiente pagina
  onLogin(form: any){
    if(form.user == 'John' && form.password=='Doe'){
      this.router.navigate(['/checkoutOrder'])
    }
  }

}
