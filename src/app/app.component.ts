import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pairwise, take, takeUntil, skipUntil } from 'rxjs/operators';
import { interval, of, timer, Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // FakeLink:- https://my-json-server.typicode.com/amitAC81/database
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  title = 'rxjs-operator';
  data;
  name = 'Angular';
  datas = [
    {
      id: 1,
      name: 'abc',
      city: 'valsad',
      mobile: 111111
    },
    {
      id: 2,
      name: 'abc',
      city: 'valsad',
      mobile: 111111
    },
    {
      id: 3,
      name: 'abc',
      city: 'valsad',
      mobile: 111111
    },
    {
      id: 4,
      name: 'abc',
      city: 'valsad',
      mobile: 111111
    }
  ];
  employee: Observable<any>;
  constructor(
    private http: HttpClient
  ) {
    // const destroy = Observable.fromEvent().first();

    // // RXJS Pairwise example...
    // this.name = 'RXJS Pairwise';
    // interval(1000)
    // .pipe(
    //   pairwise(),
    //   take(5)
    // )
    // .subscribe(console.log);

    // // RXJS Take example...
    // this.name = 'RXJS Take';
    // // emit 1, 2, 7, 4, 3
    // const source = of(this.data);
    // // take the first emitted value then complete
    // const example = source.pipe(take(2));
    // // output: 1, 2, 7
    // example.subscribe(val => console.log(val));

    // // RXJS TakeUntil example...
    // this.name = 'RXJS TakeUntil';
    // // emit value every 1s
    // const source = of(this.data);
    // // after 5 seconds, emit value
    // const timer$ = timer(1000);
    // // when timer emits after 5s, complete source
    // const example = source.pipe(takeUntil(timer$));
    // // output: 0,1,2,3
    // const subscribe = example.subscribe(val => console.log(val));

    // // RXJS SkipUntil example...
    //   this.name = 'RXJS SkipUntil';
    //   // emit every 1s
    //   const source = interval(1000);
    //   // skip emitted values from source until inner observable emits (6s)
    //   const example = source.pipe(skipUntil(timer(6000)));
    //   // output: 5...6...7...8........
    //   const subscribe = example.subscribe(val => console.log(val));
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`https://my-json-server.typicode.com/amitAC81/database/Employee`);
  }

  take() {
    this.getEmployees().pipe(take(2)).subscribe(data => {
      console.log(data);
      this.data = data;
    });

  }
  takeUntil() {
    this.getEmployees().pipe(takeUntil(this.destroyed$)).subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
  skipUntil() {
    this.getEmployees().pipe(skipUntil(this.destroyed$)).subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
  pairwise() {

  }

  onOff() {
    this.OnDestroy();
  }
  OnDestroy() {
    this.destroyed$.next(true);
    console.log('Stop');
    this.destroyed$.complete();
  }
}
