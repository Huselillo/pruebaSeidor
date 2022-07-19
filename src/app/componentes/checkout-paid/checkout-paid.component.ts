import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { TranslateService } from '@ngx-translate/core';
//Importamos el servicio creado para traernos los datos
@Component({
  selector: 'app-checkout-paid',
  templateUrl: './checkout-paid.component.html',
  styleUrls: ['./checkout-paid.component.css']
})
export class CheckoutPaidComponent implements OnInit {

  constructor(private RestService: RestService,
    private translate: TranslateService) { }
  public data: any = [];
  public dataAux: any = [];
  language = '';

  ngOnInit(): void {
    this.cargarData();
    this.language = this.translate.getDefaultLang();
  }
//Funcion que carga los datos en la variable, y en funcion del idioma cargamos uno u otro
  public cargarData(){
    this.RestService.get('https://run.mocky.io/v3/95e7b265-de4d-44aa-987f-3c723ebfee6a')
    .subscribe(respuesta => {
      this.dataAux = respuesta;
    if(this.language == 'en'){
      this.data.push({
        "title": this.dataAux.title.en,
        "message": this.dataAux.message.en})
    }else{
      this.data.push({
        "title": this.dataAux.title.es,
        "message": this.dataAux.message.es})
    }
    })
  }

}
