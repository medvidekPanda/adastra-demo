import { Component, Input } from '@angular/core';

import { Album } from '../models/music.model';

@Component({
  selector: 'app-interpret-list-item',
  templateUrl: './interpret-list-item.component.html',
  styleUrls: ['./interpret-list-item.component.scss']
})
export class InterpretListItemComponent {
  @Input() item?: Album;
}
