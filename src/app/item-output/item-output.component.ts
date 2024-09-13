<<<<<<< HEAD
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  
  habilidades: string[] = [];

  addNewItem(value: string): void {
    if (value) {  
      this.habilidades.push(value);
    }
  }
}
=======
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  
  habilidades: string[] = [];

  addNewItem(value: string): void {
    if (value) {  
      this.habilidades.push(value);
    }
  }
}
>>>>>>> 854de8d61ddb495d6d88b522355779a1cf50aa89
