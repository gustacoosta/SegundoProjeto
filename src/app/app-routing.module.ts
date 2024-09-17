import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemProjeto2Component } from './item-projeto2/item-projeto2.component';
import { ItemProjetosComponent } from './item-projetos/item-projetos.component';
import { ConectaComponent } from './conecta/conecta.component';


const routes: Routes = [
  {path: 'proj', component:ItemProjetosComponent},
  {path: 'proj2', component:ItemProjeto2Component},
  {path: 'conecta', component:ConectaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }