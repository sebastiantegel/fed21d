import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss'],
})
export class AddAnimalComponent implements OnInit {
  animalForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    type: [''],
    age: [0],
    nickNames: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get nicknames(): FormArray {
    return this.animalForm.get('nickNames') as FormArray;
  }

  addNickname() {
    this.nicknames.push(this.fb.control(''));
  }

  handleSubmit() {
    console.log(this.animalForm.value);
  }
}
