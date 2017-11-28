import { Component, OnInit, ElementRef } from '@angular/core';
// import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {

  // El tipo ElemRef es una referencia al DOM
  // similar a la que retorna $(selector) el JQuery
  // que incluye al elemento en la propiedad nativeElement
  // @ViewChild('nombre') sName: ElementRef;
  constructor() { }

  ngOnInit() {
    // console.log(this.sName);
    // this.sName.nativeElement.value = 'Pepe';
  }

}
