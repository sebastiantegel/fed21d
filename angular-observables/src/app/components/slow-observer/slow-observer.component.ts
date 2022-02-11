import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slow-observer',
  templateUrl: './slow-observer.component.html',
  styleUrls: ['./slow-observer.component.scss'],
})
export class SlowObserverComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let slowObservable = new Observable<number>((o) => {
      let sequence: number[] = [1, 1, 2, 3, 5, 8, 13];
      let timeout: NodeJS.Timeout;

      function getValue(i: number) {
        timeout = setTimeout(() => {
          o.next(sequence[i]);

          if (i === sequence.length - 1) {
            o.complete();
          } else {
            getValue(++i);
          }
        }, 2000);
      }

      getValue(0);

      return {
        unsubscribe() {
          clearTimeout(timeout);
        },
      };
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

    slowObservable.subscribe(observer);
  }
}
