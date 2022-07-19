import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba técnica';
//Añadimos los idiomas que tiene la pagina, y por defecto, asignamos el idioma EN
  constructor(private translate: TranslateService){
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
  }

}
