import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';

const AXIS_SIZE = 10;
const AXIS_FONT_SIZE = 18;
const AXIS_WIDTH = 3;

@Component({
  selector: 'app-buble-chart',
  templateUrl: './buble-chart.component.html',
  styleUrls: ['./buble-chart.component.css'],
  styles: [':host { display: block; }']
})
export class BubleChartComponent implements OnInit, OnChanges {
  private chart;
  @ViewChild('chart') chartElement;
  @Input() yAxisName: string;
  @Input() yAxisColor: string;
  @Input() xAxisName: string;
  @Input() xAxisColor: string;
  @Input() plot: {
    x: number,
    y: number
  };
  @Input() plotColor: string;

  constructor() {
  }

  ngOnChanges() {
    this.chart = new Chart(this.chartElement.nativeElement, {
      type: 'bubble',
      data: {
        datasets: [
          {
            backgroundColor: this.plotColor,
            data: [{
              ...this.plot,
              r: 15
            }]
          }
        ]
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: this.yAxisName,
              fontColor: this.yAxisColor,
              fontSize: AXIS_FONT_SIZE
            },
            ticks: {
              display: false,
              min: -AXIS_SIZE,
              max: AXIS_SIZE
            },
            gridLines: {
              zeroLineColor: this.yAxisColor,
              zeroLineWidth: AXIS_WIDTH
            }
          }],
          xAxes: [{
            position: 'top',
            scaleLabel: {
              display: true,
              labelString: this.xAxisName,
              fontColor: this.xAxisColor,
              fontSize: AXIS_FONT_SIZE
            },
            ticks: {
              display: false,
              min: -AXIS_SIZE,
              max: AXIS_SIZE
            },
            gridLines: {
              zeroLineColor: this.xAxisColor,
              zeroLineWidth: AXIS_WIDTH
            }
          }]
        }
      }
    });
  }

  ngOnInit() {

  }

}
