import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { FetchApiDataService } from 'src/app/services/fetch-api-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-interpret-detail',
  templateUrl: './interpret-detail.component.html',
  styleUrls: ['./interpret-detail.component.scss']
})
export class InterpretDetailComponent implements OnInit {
  private interpretId?: string;
  favourite: { collectionName: string, artworkUrl60: string, copyright: string, releaseDate: string }[] = [];

  private interpretData$ = this.activatedRoute.params.pipe(
    take(1),
    switchMap((value: any) => this.fetchApiDataService.getApiItem$(value.id)),
  );

  interpretInfo$ = this.interpretData$.pipe(
    filter(Boolean),
    map((res: any) => res.results[0]),
    tap(res => {
      this.interpretId = String(res.artistId);
      this.loadSetup();
    }),
  );

  albumsList$: Observable<{ collectionName: string, artworkUrl60: string, copyright: string, releaseDate: string }[]> = this.interpretData$.pipe(
    map((res: any) => res.results.slice(1)),
    tap(console.log),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private fetchApiDataService: FetchApiDataService,
    private location: Location,
  ) { }

  ngOnInit(): void { }

  drop(event: CdkDragDrop<any>) {
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
