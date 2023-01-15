import { Component } from '@angular/core';
import { Observable } from "rxjs"
import { Subscription } from "rxjs"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  promiseData!: string;
  // observableData!: string;
  // observableSubs: Subscription;
  promiseObj!: Promise<string>;
  observableObj!: Observable<string>;

  getPromise() {
    return new Promise<string>( function( resolve, reject ) {
      setTimeout(() => {
        resolve('Timer1 finalizado');
      }, 2000)
    })
  }

  getObservable() {
    return new Observable<string>((observer: { next: (arg0: string) => void; }) => {
      setTimeout(() => {
        observer.next('Timer2 finalizado');
      }, 4000);
    })
  }

  constructor() {
    // this.getPromise().then(( v: string ) => this.promiseData = v);
    // this.observableSubs = this.getObservable()
                                  // .subscribe( ( v: string ) => this.observableData = v);

   this.promiseObj = this.getPromise();
   this.observableObj = this.getObservable();
  }


}
