import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-counter',
  standalone: true,
  imports: [],
  templateUrl: './quantity-counter.component.html',
  styleUrl: './quantity-counter.component.css'
})
export class QuantityCounterComponent {

  @Input() quantity!: number;
  @Output() emitAddRemove: EventEmitter<boolean> = new EventEmitter<boolean>(); 
  /**
   * Emite true si se agrego
   */
  addItem(){
    this.emitAddRemove.emit(true);
  }

  /**
   * Emite false si se removio
   */
  removeItem(){
    this.emitAddRemove.emit(false);
  }

}
