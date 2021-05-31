import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretDetailComponent } from './interpret-detail.component';

describe('InterpretDetailComponent', () => {
  let component: InterpretDetailComponent;
  let fixture: ComponentFixture<InterpretDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpretDetailComponent ]
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
