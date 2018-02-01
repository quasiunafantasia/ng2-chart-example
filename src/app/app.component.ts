import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataSet1;
  dataSet2;

  constructor() {
    setTimeout(() => {
      this.dataSet1 = [1, 2, 3, 4, 5, 6, 7];
    }, 1000);

    setTimeout(() => {
      this.dataSet2 = [11, 12, 13, 14, 15, 16, 17];
    }, 2000);
  }
}
