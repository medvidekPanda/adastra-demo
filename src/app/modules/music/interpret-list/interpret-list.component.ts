import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

import { switchMap, tap } from 'rxjs/operators';
import { FetchApiDataService } from 'src/app/services/fetch-api-data.service';

@Component({
  selector: 'app-interpret-list',
  templateUrl: './interpret-list.component.html',
  styleUrls: ['./interpret-list.component.scss']
})

export class InterpretListComponent implements OnInit {
  searchFormGroup = new FormGroup({
    searchValue: new FormControl(''),
  });

  private searchKey$ = new BehaviorSubject<string | undefined>(undefined);

  interprets$ = this.searchKey$.pipe(
    switchMap(key => {
      if (key) {
        return this.fetchApiDataService.searchApiValues$(key);
      }
      return of(undefined);
    }),
    tap(console.log),
  );

  constructor(
    private fetchApiDataService: FetchApiDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void { }

  searchFromApi() {
    const value: string | undefined = this.searchFormGroup.value.searchValue.replace(' ', '+') || undefined;
    this.searchKey$.next(value);
  }

  goToDetail(id: string) {
    this.router.navigate([`../interpret-detail/${id}`], { relativeTo: this.activatedRoute });
  }

}
