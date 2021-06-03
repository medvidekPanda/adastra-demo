import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FetchApiDataService } from '../../../services/fetch-api-data.service';
import { Interpret } from '../models/music.model';

@Component({
  selector: 'app-interpret-list',
  templateUrl: './interpret-list.component.html',
  styleUrls: ['./interpret-list.component.scss']
})

export class InterpretListComponent implements OnInit {
  private searchKey$ = new BehaviorSubject<string | undefined>(undefined);
  searchFormGroup = new FormGroup({
    searchValue: new FormControl(''),
  });
  favouriteInterprets: Interpret[] = [];

  interprets$ = this.searchKey$.pipe(
    switchMap(key => {
      if (key) {
        return this.fetchApiDataService.searchApiValues$(key);
      }
      return of(undefined);
    }),
  );

  constructor(
    private fetchApiDataService: FetchApiDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.favouriteList();
  }

  searchFromApi() {
    const value: string = this.searchFormGroup.value.searchValue.replace(' ', '+');
    this.searchKey$.next(value);
  }

  favouriteList() {
    const keys = Object.keys(localStorage).filter(item => item.includes('interpret-'));
    const values: Interpret[] = [];

    for (const key of keys) {
      const interpret = localStorage.getItem(key);
      if (interpret) {
        const parsedValue = JSON.parse(interpret);
        values.push({ albums: parsedValue.length, ...parsedValue[0] });
      }
    }

    this.favouriteInterprets = values.map(interpret => {
      return {
        artistId: interpret.artistId,
        artistName: interpret.artistName,
        primaryGenreName: interpret.primaryGenreName,
        albums: interpret.albums,
      }
    });
  }

  clearSearch() {
    this.searchKey$.next(undefined);
    this.searchFormGroup.patchValue({ searchValue: undefined });
  }

  goToDetail(id?: string) {
    this.router.navigate([`../interpret-detail/${id}`], { relativeTo: this.activatedRoute });
  }

  clearList() {
    this.favouriteInterprets = [];
    localStorage.clear();
  }

}
