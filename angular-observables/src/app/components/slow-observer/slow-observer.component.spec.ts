import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowObserverComponent } from './slow-observer.component';

describe('SlowObserverComponent', () => {
  let component: SlowObserverComponent;
  let fixture: ComponentFixture<SlowObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlowObserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
