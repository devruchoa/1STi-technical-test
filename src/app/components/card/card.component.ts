import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Weather } from '../weather';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
  @Input() weatherData!: Weather;
  @Output() closeClicked = new EventEmitter<void>();

  closeCard() {
    this.closeClicked.emit();
  }
}
