import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expresiones',
  templateUrl: './expresiones.component.html',
  styleUrls: ['./expresiones.component.css']
})
export class ExpresionesComponent implements OnInit {

  isSpanish: boolean;
  sName: string;
  constructor() { }

  ngOnInit() {
    this.sName = 'Pepe';
    this.isSpanish = false;
  }

}
