import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-showperson',
  templateUrl: './showperson.component.html',
  styleUrls: ['./showperson.component.scss'],
})
export class ShowpersonComponent implements OnInit {
  person: Person = new Person('Sebastian', 42, true);

  constructor() {}

  ngOnInit(): void {}
}
