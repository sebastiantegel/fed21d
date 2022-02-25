import { Observable } from 'rxjs';
import { Animal } from '../models/Animal';

export interface IAnimalService {
  animals$: Observable<Animal[]>;

  getAnimals(): void;
}
