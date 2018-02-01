import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  styles: [':host { display: block; }']
})
export class ChartComponent implements OnInit, OnChanges {

  @Input() dataSet1: [number, number, number, number, number, number, number];
  @Input() dataSet2: [number, number, number, number, number, number, number];
  @ViewChild('chart') chartElement;

  private chart: any;

  private chartSettings = {
    type: 'radar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    }
  };

  private dataSet1Settings = {
    label: 'My First dataset',
    borderColor: 'rgb(255, 99, 132)',
    fill: false
  };

  private dataSet2Settings = {
    label: 'My Second dataset',
    fill: false,
    borderColor: 'rgb(123, 4, 56)'
  };

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.dataSet1 || this.dataSet2) {
      if (this.chart) {
        this.chart.data.datasets = [
          {
            ...this.dataSet1Settings,
            data: this.dataSet1 || []
          },
          {
            ...this.dataSet2Settings,
            data: this.dataSet2 || []
          }
        ];
        this.chart.update();
      } else {
        console.log('creating')
        this.chart = new Chart(this.chartElement.nativeElement, {
          ...this.chartSettings,
          data: {
            ...this.chartSettings.data,
            datasets: [
              {
                ...this.dataSet1Settings,
                data: this.dataSet1 || []
              },
              {
                ...this.dataSet2Settings,
                data: this.dataSet2 || []
              }
            ]
          }
        });
      }
    }
  }

}
