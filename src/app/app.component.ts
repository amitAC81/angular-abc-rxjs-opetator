import { Component } from '@angular/core';
// RxJS v6+
import { of, interval, timer  } from 'rxjs';
import { take, pairwise, takeUntil, skipUntil } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor() {
    // this.name = 'Take';
    // //emit 1,2,3,4,5
    // const source = of(1, 2, 3, 4, 5);
    // //take the first emitted value then complete
    // const example = source.pipe(take(1));
    // //output: 1
    // const subscribe = example.subscribe(val => console.log(val));

    // this.name = 'Pairwise';
    // //Returns: [0,1], [1,2], [2,3], [3,4], [4,5]
    // interval(1000)
    //   .pipe(
    //     pairwise(),
    //     take(5)
    //   )
    //   .subscribe(console.log);

    // this.name = 'TakeUntil';
    // //emit value every 1s
    // const source = interval(1000);
    // //after 5 seconds, emit value
    // const timer$ = timer(5000);
    // //when timer emits after 5s, complete source
    // const example = source.pipe(takeUntil(timer$));
    // //output: 0,1,2,3
    // const subscribe = example.subscribe(val => console.log(val));

    // this.name = 'SkipUntil';
    // //emit every 1s
    // const source = interval(1000);
    // //skip emitted values from source until inner observable emits (6s)
    // const example = source.pipe(skipUntil(timer(6000)));
    // //output: 5...6...7...8........
    // const subscribe = example.subscribe(val => console.log(val));

  }
}
