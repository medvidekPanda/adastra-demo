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

  favouriteInterprets: any[] = [];

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

  ngOnInit(): void {
    // console.log({ ...localStorage });
    // console.log(Object.keys(localStorage).filter(item => item.includes('interpret-')));
    this.favouriteList();
  }

  searchFromApi() {
    const value: string | undefined = this.searchFormGroup.value.searchValue.replace(' ', '+') || undefined;
    this.searchKey$.next(value);
  }

  goToDetail(id: string) {
    this.router.navigate([`../interpret-detail/${id}`], { relativeTo: this.activatedRoute });
  }

  favouriteList() {
    const keys = Object.keys(localStorage).filter(item => item.includes('interpret-'));
    const values = [];

    for (const key of keys) {
      const interpret = localStorage.getItem(key);
      if (interpret) {
        const parsedValue = JSON.parse(interpret);
        values.push({albums: parsedValue.length, ...parsedValue[0]});
      }
    }

    this.favouriteInterprets = values.map(interpret => {
      return {
        artistId: interpret.artistId,
        artistName: interpret.artistName,
        albums: interpret.albums,
      }
    });
    console.log(this.favouriteInterprets);
  }

}
