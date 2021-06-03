import { of } from 'rxjs';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { InterpretDetailComponent } from './interpret-detail.component';

describe('InterpretDetailComponent', () => {
  let component: InterpretDetailComponent;
  let fixture: ComponentFixture<InterpretDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpretDetailComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            params: of({ id: '1' }),
          },
        },
        HttpClient,
        HttpHandler,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpretDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
