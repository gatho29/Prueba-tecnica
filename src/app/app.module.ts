import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { CuerpoModule } from './cuerpo/cuerpo.module';
import { CuerpoMedioModule } from './cuerpo-medio/cuerpo-medio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    CuerpoModule,
    CuerpoMedioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
