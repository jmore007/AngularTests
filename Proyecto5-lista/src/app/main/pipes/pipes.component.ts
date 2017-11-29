import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  sNombre: string;
  nPrecio: number;
  nValor: number;
  dFecha: Date;
  oDatos: {};
  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe perez';
    this.nPrecio = 25.5;
    this.nValor = 542.123439;
    this.dFecha = new Date(); // Fecha de hoy
    this.oDatos = {
      sNombre: this.sNombre,
      nPrecio: this.nPrecio,
      nValor: this.nValor,
      dFecha: this.dFecha
    };
  }

}
