import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpersonComponent } from './showperson.component';

describe('ShowpersonComponent', () => {
  let component: ShowpersonComponent;
  let fixture: ComponentFixture<ShowpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
