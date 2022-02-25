import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models/Animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private service: AnimalService) {}

  ngOnInit(): void {
    this.service.animals$.subscribe((animals) => {
      this.animals = animals;
      console.log(this.animals);
    });
    this.service.getAnimals();
  }
}
