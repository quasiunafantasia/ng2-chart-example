import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import Chart from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  styles: [':host { display: block; }']
})
export class ChartComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('chart') chart;

  ngOnInit() {
  }

  ngAfterViewInit() {
    const chart = new Chart(this.chart.nativeElement, {
      type: 'radar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "My First dataset",
          borderColor: 'rgb(255, 99, 132)',
          fill:false,
          data: [5, 10, 5, 2, 20, 30, 45],
        },
          {
            label: "My Second dataset",
            fill:false,
            borderColor: 'rgb(123, 4, 56)',
            data: [10, 6, 15, 22, 30, 3, 5],
          }]
      },
    });
  }

}
