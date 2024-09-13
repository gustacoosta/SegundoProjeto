import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-formacao',
  templateUrl: './item-formacao.component.html',
  styleUrl: './item-formacao.component.css'
})
export class ItemFormacaoComponent {
  @Input() curso1: string = "";
  @Input() curso2: string = ""; 
  @Input() tit_formacao: string = "";
}