import { Component, Input } from '@angular/core';

import { Album } from '../models/music.model';

@Component({
  selector: 'app-dnd-item',
  templateUrl: './dnd-item.component.html',
  styleUrls: ['./dnd-item.component.scss']
})
export class DndItemComponent {
  @Input() item?: Album;
}
