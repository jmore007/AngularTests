import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html', // Vista
  styleUrls: ['./cabecera.component.css']
})

// Controller
export class CabeceraComponent implements OnInit {

  title: string;
  constructor() { }

  // Se ejecuta al inicio del componente (Despues del constructor),
  // ngOnInit ya tiene disponible el arbol DOM. Otros ejemplos: ngOnDestroy
  ngOnInit() {
    this.title = 'Servicios en Angular';
  }

}
