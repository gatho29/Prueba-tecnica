import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PieceraComponent } from './piecera/piecera.component';



@NgModule({
  declarations: [
    BeneficiosComponent,
    ServiciosComponent,
    PieceraComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BeneficiosComponent,
    ServiciosComponent,
    PieceraComponent
  ]
})
export class CuerpoMedioModule { }
