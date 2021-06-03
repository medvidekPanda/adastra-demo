import { Component, Input } from '@angular/core';

import { Interpret } from '../models/music.model';

@Component({
  selector: 'app-dnd-item',
  templateUrl: './dnd-item.component.html',
})
export class DndItemComponent {
  @Input() item?: Interpret;
}
