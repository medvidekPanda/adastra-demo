import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { FetchApiDataService } from 'src/app/services/fetch-api-data.service';

@Component({
  selector: 'app-interpret-detail',
  templateUrl: './interpret-detail.component.html',
  styleUrls: ['./interpret-detail.component.scss']
})
export class InterpretDetailComponent implements OnInit {

  albums$ = this.activatedRoute.params.pipe(
    tap(console.log),
    switchMap((value: any) => {
      const id = value.id;
      return this.fetchApiDataService.getApiItem$(id);
    }),
    tap(console.log),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private fetchApiDataService: FetchApiDataService,
  ) { }

  ngOnInit(): void {}

}
