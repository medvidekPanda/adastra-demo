import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretListItemComponent } from './interpret-list-item.component';

describe('InterpretListItemComponent', () => {
  let component: InterpretListItemComponent;
  let fixture: ComponentFixture<InterpretListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpretListItemComponent ]
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
