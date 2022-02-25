import { AnimalComponent } from './../animal/animal.component';
import { MockAnimalService } from 'src/app/services/MockAnimalService';
import { AnimalService } from 'src/app/services/animal.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsComponent } from './animals.component';

describe('AnimalsComponent', () => {
  let component: AnimalsComponent;
  let fixture: ComponentFixture<AnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalsComponent, AnimalComponent],
      imports: [HttpClientModule],
      providers: [{ provide: AnimalService, useClass: MockAnimalService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data', () => {
    expect(component.animals.length).toBe(3);
    expect(component.animals[0].name).toBe('Majsan');
  });

  it('should show lis', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('li').length).toBe(3);
  });
});
