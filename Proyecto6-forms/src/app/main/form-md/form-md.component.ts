import { Component, OnInit } from '@angular/core';
import { ImpresoraModel, DepartamentoModel } from '../datos.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {

  aImpresoras: Array<ImpresoraModel>;
  aDepartamentos: Array<DepartamentoModel>;
  formulario: FormGroup;

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
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\d{9}$')]),
      impresora: new FormControl(),
      departamento: new FormControl(),
      isColor: new FormControl(),
      isClaro: new FormControl()
    });
  }
  sendForm() {
    console.log('Formulario enviado');
  }

  deleteForm() {
  }

}
