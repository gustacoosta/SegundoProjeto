import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  nome = 'Gustavo Lima Costa';
  curso1 = 'Análise e Desenvolvimento de Sistemas';
  curso2 = 'Engenharia da Computação';
  tit_sobre = 'Sobre mim';
  tit_formacao = 'Formação Acadêmica';
}