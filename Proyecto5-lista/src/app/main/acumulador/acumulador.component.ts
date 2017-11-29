import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.css']
})
export class AcumuladorComponent implements OnInit {

  nTotal: number;
  constructor() { }

  ngOnInit() {
    this.nTotal = 0;
  }
  sumaUno() {
    this.nTotal += 1;
  }
  restaUno() {
    this.nTotal -= 1;
  }
}
