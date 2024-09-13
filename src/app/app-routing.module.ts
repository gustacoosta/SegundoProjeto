import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemProjeto2Component } from './item-projeto2/item-projeto2.component';
import { ItemProjetosComponent } from './item-projetos/item-projetos.component';

const routes: Routes = [
  {path: 'conecta', component:ItemProjetosComponent},
  {path: 'proj2', component:ItemProjeto2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }