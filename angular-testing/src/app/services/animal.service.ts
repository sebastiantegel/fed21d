import { HttpClient } from '@angular/common/http';
import { IAnimalService } from './IAnimalService';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Animal } from '../models/Animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService implements IAnimalService {
  private animals = new Subject<Animal[]>();
  public animals$: Observable<Animal[]> = this.animals.asObservable();

  constructor(private http: HttpClient) {}

  getAnimals(): void {
    this.http
      .get<Animal[]>('https://animals.azurewebsites.net/api/animals')
      .subscribe((animals) => {
        this.animals.next(animals);
      });
  }
}
