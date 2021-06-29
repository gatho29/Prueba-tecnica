import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MaterialModule } from '../material/material.module';
import { FormularioComponent } from './formulario/formulario.component';
import { InformacionComponent } from './informacion/informacion.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    FormularioComponent,
    InformacionComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CabeceraComponent,
    InformacionComponent
  ]
})
export class CuerpoModule { }
