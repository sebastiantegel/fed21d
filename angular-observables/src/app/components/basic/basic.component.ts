import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let observable = new Observable<number>((o) => {
      o.next(1);
      o.next(2);
      o.next(3);

      o.complete();
    });

    let observer = {
      next: (n: number) => {
        console.log(n);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      },
      complete: () => {
        console.log('Done, no more data');
      },
    };

    observable.subscribe(observer);

    let someObservable = of(1, 2, 3);
    someObservable.subscribe((n: number) => {
      console.log(n);
    });
  }
}
