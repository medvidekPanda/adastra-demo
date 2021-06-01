import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { FetchApiDataService } from 'src/app/services/fetch-api-data.service';

@Component({
  selector: 'app-interpret-detail',
  templateUrl: './interpret-detail.component.html',
  styleUrls: ['./interpret-detail.component.scss']
})
export class InterpretDetailComponent implements OnInit {

  albums$: Observable<{ artistName: string, artworkUrl60: string }[]> = this.activatedRoute.params.pipe(
    switchMap((value: any) => {
      const id = value.id;
      return this.fetchApiDataService.getApiItem$(id).pipe(
        map((res: any) => res.results.slice(1)),
      );
    }),
    tap(console.log),
  );

  favourite: { artistName: string, artworkUrl60: string }[] = [
    // {
    //   artistName: 'TEST',
    //   artworkUrl60: "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/ba/99/f9/ba99f923-03a6-41cf-f55f-a762d25b2f43/source/60x60bb.jpg"
    // }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fetchApiDataService: FetchApiDataService,
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

}
