import { Component, Input, Inject } from '@angular/core';
import { from, timer, interval, of, Observable } from 'rxjs';
import { map, scan, reduce } from 'rxjs/operators';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  @Input() name: string;
  var1: Observable<any>;

  constructor(@Inject(DOCUMENT) private document: any) {

  }
  ngOnInit() {
    // this.method1();
    // this.scanAndReduceExample();

    //document.write('abc');
  }

  public method1(): any {
    this.var1 = of(1, 2, 3, 4);

    this.var1.subscribe(x => {
      console.log(x);
    });
  }

  public timerEx(): void {

    let x = timer(500);


  }

  public scanAndReduceExample(): void {
    let var2 = of(1, 2, 3, 4, 5);

    /* scan */
    let scanex = var2.pipe(scan((a, b) => a + b, 0));

    let scany = scanex.subscribe(x => { console.log(x); });

    /* reduce */
    let reduceex = var2.pipe(reduce((a, b) => a + b, 0));

    let reducey = reduceex.subscribe(x => { console.log('result : ' + x); });
  }
  
}



