import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() id!: number;
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() quantity: string = '';
  @Input() available: boolean = false;
  @Input() btnText: string = '';

  @Output() shortedList = new EventEmitter<any>();

  getDescription(description: string) {
    alert(description);
  }

  addToShortList() {
    this.shortedList.emit({ idElement: this.id, idUser: 5 });
  }
}
