import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {
  positions: GeolocationPosition[] = [];
  subscription: Subscription = new Subscription();

  constructor() {}

  geoObservable = new Observable<GeolocationPosition>((o) => {
    let watchId: number;

    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (position: GeolocationPosition) => {
          o.next(position);
        },
        (error: GeolocationPositionError) => {
          o.error(error);
        }
      );
    } else {
      o.error('Your browser does not support geolocation...');
    }

    return {
      unsubscribe() {
        navigator.geolocation.clearWatch(watchId);
      },
    };
  });

  observer = {
    next: (pos: GeolocationPosition) => {
      console.log(pos);
      this.positions.push(pos);
    },
    error: (e: any) => {
      console.log('Error: ', e);
    },
    complete: () => {},
  };

  ngOnInit(): void {}

  startGettingPositions() {
    this.subscription = this.geoObservable.subscribe(this.observer);
  }

  stopGettingPositions() {
    this.subscription.unsubscribe();
  }
}
