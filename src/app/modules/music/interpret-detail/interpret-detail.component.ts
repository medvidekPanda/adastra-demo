import { filter, map, switchMap, take } from 'rxjs/operators';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { FetchApiDataService } from '../../../services/fetch-api-data.service';
import { Interpret } from '../models/music.model';

@Component({
  selector: 'app-interpret-detail',
  templateUrl: './interpret-detail.component.html',
  styleUrls: ['./interpret-detail.component.scss']
})
export class InterpretDetailComponent {
  private interpretId?: string;
  favourite: Interpret[] = [];

  private interpretData$ = this.activatedRoute.params.pipe(
    take(1),
    switchMap(value => this.fetchApiDataService.getApiItem$(value.id)),
  );

  interpretInfo$ = this.interpretData$.pipe(
    filter(res => res.length > 0),
    map((res: Interpret[]) => {
      const interpret = res[0];
      this.interpretId = String(interpret.artistId);
      this.loadSetup();

      return interpret;
    }),
  );

  albumsList$ = this.interpretData$.pipe(
    filter(res => res.length > 0),
    map(res => res.slice(1)),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private fetchApiDataService: FetchApiDataService,
    private location: Location,
  ) { }

  drop(event: CdkDragDrop<Interpret[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  loadSetup() {
    if (this.interpretId) {
      const data = localStorage.getItem(`interpret-${this.interpretId}`);
      data ? this.favourite = JSON.parse(`${data}`) : null;
    }
  }

  saveList() {
    if (this.interpretId && this.favourite.length > 0) {
      localStorage.setItem(`interpret-${this.interpretId}`, JSON.stringify(this.favourite));
    } else if (this.interpretId && this.favourite.length === 0) {
      this.clearList()
    }
  }

  clearList() {
    if (this.interpretId && this.favourite.length > 0) {
      this.favourite = [];
      localStorage.removeItem(`interpret-${this.interpretId}`);
    }
  }

  goBack() {
    this.location.back();
  }

}
