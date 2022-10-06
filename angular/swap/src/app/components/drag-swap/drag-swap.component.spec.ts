import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragSwapComponent } from './drag-swap.component';

describe('DragSwapComponent', () => {
  let component: DragSwapComponent;
  let fixture: ComponentFixture<DragSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragSwapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
