import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickSwapComponent } from './click-swap.component';

describe('ClickSwapComponent', () => {
  let component: ClickSwapComponent;
  let fixture: ComponentFixture<ClickSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickSwapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
