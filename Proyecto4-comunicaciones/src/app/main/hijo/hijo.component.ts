import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
// import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() sNombre: string;
  @Output() eRespuesta: EventEmitter;
  sNuevoNombre: string;

  constructor() {
    this.eRespuesta = new EventEmitter(); // En este caso debe ir en el constructor, antes de crear el arbol DOM
  }

  ngOnInit() {
    this.sNuevoNombre = '';
  }

  responder() {
    this.eRespuesta.emit(this.sNuevoNombre);
  }

}
