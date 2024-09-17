import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemTesteComponent } from './item-teste/item-teste.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { ItemFormacaoComponent } from './item-formacao/item-formacao.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ItemProjetosComponent } from './item-projetos/item-projetos.component';
import { ItemProjeto2Component } from './item-projeto2/item-projeto2.component';
import { ConectaComponent } from './conecta/conecta.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemTesteComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    ItemFormacaoComponent,
    ItemProjetosComponent,
    ItemProjeto2Component,
    ConectaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }