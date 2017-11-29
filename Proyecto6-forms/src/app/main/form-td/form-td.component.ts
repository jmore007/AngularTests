import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { ImpresoraModel, DepartamentoModel, UsuarioModel } from '../datos.model';


@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

  aImpresoras: Array<ImpresoraModel>;
  oImpresora: ImpresoraModel;
  aDepartamentos: Array<DepartamentoModel>;
  oDepartamento: DepartamentoModel;
  oUsuario: UsuarioModel;
  isColor: boolean;
  isClaro: boolean;

  @ViewChild('formTD') formulario; // tiene que apuntar al #formTD de la vista

  constructor() { }

  ngOnInit() {
    this.aImpresoras = [
      {id: '1', nombre: 'HP'},
      {id: '2', nombre: 'Lexmark'},
      {id: '3', nombre: 'Cannon'}
    ];
    this.aDepartamentos = [
      {id: '1', nombre: 'Servicios Financieros'},
      {id: '2', nombre: 'Tecnologías Digitales'},
      {id: '3', nombre: 'Ciberseguridad'},
      {id: '4', nombre: 'Administraciones Públicas'}
    ];
    this.oUsuario = { nombre: '', apellidos: '', telefono: ''};
    console.log(this.formulario);
  }

  sendForm() {
    console.log('Formulario enviado');
  }

  deleteForm() {
    // También puede usarse formulario.resetForm()
    this.formulario.reset();
  }

}
