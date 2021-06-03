import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchApiDataService } from '../../../services/fetch-api-data.service';

import { InterpretListComponent } from './interpret-list.component';

describe('InterpretListComponent', () => {
  let component: InterpretListComponent;
  let fixture: ComponentFixture<InterpretListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpretListComponent ],
      providers: [
        FetchApiDataService,
        HttpClient,
        HttpHandler,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpretListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
