import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  @Input() animal: Animal = { id: 0, name: '', imageUrl: '' };

  constructor() {}

  ngOnInit(): void {}
}
