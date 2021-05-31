import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretListComponent } from './interpret-list.component';

describe('MusicListComponent', () => {
  let component: InterpretListComponent;
  let fixture: ComponentFixture<InterpretListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpretListComponent ]
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
