import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private router: Router) { }
  src1 = '../assets/logo1.png';
  src2 = '../assets/logo2.png';
  //Mediante las variables controlamos que se muestre una imagen u otra, en funcion de en la url en la que nos encontremos
  ngOnInit(): void {
    if(this.router.url == '/checkoutOrder'){
      this.src1='../assets/logocheck.png';
    }
    if(this.router.url == '/checkoutPaid'){
      this.src1='../assets/logocheck.png';
      this.src2='../assets/logocheck.png';
    }
  }

}
