import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//Importamos la libreria para traducir las pantallas
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
//Creamos las variables necesarias, un array con los idiomas, y una variable que es la que por defecto, es la que saldra seleccionada en el Select, para que no se pierda al cambiar de paginas.
  constructor(private translate: TranslateService) { }
  languages = [
    { id: 1, label: "en" },
    { id: 2, label: "es" }
]
lang = '';
//En el inicio del componente, obtenemos cual es el idioma por defecto, y lo aplicamos y asignamos la option value selected mediante la variable lang.
  ngOnInit(): void {
    this.lang = this.translate.getDefaultLang();
    this.translate.use(this.lang)
  }
//Al cambiar el idioma, lo asignamos como por defecto y lo aplicamos
  onChange(event : any){
    this.translate.setDefaultLang(event.target.value);
    this.translate.use(event.target.value);
  }

}
