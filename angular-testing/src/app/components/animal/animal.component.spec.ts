import { Animal } from 'src/app/models/Animal';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalComponent } from './animal.component';

describe('AnimalComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, AnimalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the name', () => {
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h4')?.innerHTML).toBe('Majsan');
  });
});

@Component({
  template: `<app-animal [animal]="dataToSendToUser"></app-animal>`,
})
class TestHostComponent {
  dataToSendToUser: Animal = { id: 999, name: 'Majsan', imageUrl: '...' };
}
