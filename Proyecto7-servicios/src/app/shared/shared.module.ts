import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CabeceraComponent,
    PieComponent,
    LogoComponent
  ],
  exports: [
    CabeceraComponent,
    PieComponent
  ]
})
export class SharedModule { }
