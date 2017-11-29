import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TareasComponent } from './tareas/tareas.component';
import { FormsModule } from '@angular/forms';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    TareasComponent,
    AcumuladorComponent,
    PipesComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
