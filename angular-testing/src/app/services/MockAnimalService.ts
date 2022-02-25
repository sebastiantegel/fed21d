import { Observable, Subject } from 'rxjs';
import { Animal } from '../models/Animal';
import { IAnimalService } from './IAnimalService';

export class MockAnimalService implements IAnimalService {
  private animals = new Subject<Animal[]>();
  public animals$: Observable<Animal[]> = this.animals.asObservable();

  private testData: Animal[] = [
    new Animal(999, 'Majsan', '...'),
    new Animal(998, 'Sven', '...'),
    new Animal(997, 'Tweet', '...'),
  ];

  getAnimals(): void {
    this.animals.next(this.testData);
  }
}
