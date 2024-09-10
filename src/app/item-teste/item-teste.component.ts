import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-teste',
  templateUrl: './item-teste.component.html',
  styleUrl: './item-teste.component.css'
})
export class ItemTesteComponent {
  @Input() curso1: string = "";
  @Input() curso2: string = "";
  @Input() tit_sobre: string = ""; 
}
