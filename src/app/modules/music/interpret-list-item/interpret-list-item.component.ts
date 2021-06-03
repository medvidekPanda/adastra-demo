import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Album } from '../models/music.model';

@Component({
  selector: 'app-interpret-list-item',
  templateUrl: './interpret-list-item.component.html',
  styleUrls: ['./interpret-list-item.component.scss']
})
export class InterpretListItemComponent {
  @Input() item?: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  goToDetail(id: string) {
    this.router.navigate([`../interpret-detail/${id}`], { relativeTo: this.activatedRoute });
  }
}
