import { of } from 'rxjs';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { InterpretListItemComponent } from './interpret-list-item.component';

describe('InterpretListItemComponent', () => {
  let component: InterpretListItemComponent;
  let fixture: ComponentFixture<InterpretListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpretListItemComponent],
      providers: [
        {
          provide: Router, useValue: of(),
        },
        {
          provide: ActivatedRoute, useValue: {
            params: of({ id: '1' }),
          },
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpretListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
