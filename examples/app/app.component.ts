/**
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core'

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  template: `
    <gauge-chart
      [canvasWidth]="canvasWidth"
      [needleValue]="needleValue"
      [centralLabel]="centralLabel"
      [options]="options"
    ></gauge-chart>
  `,
})
export class AppComponent implements OnInit {
  public canvasWidth: number
  public needleValue: number
  public centralLabel: string
  public options
  public bottomLabel = '24.0'

  ngOnInit() {
    this.canvasWidth = 300
    this.needleValue = 0
    // this.centralLabel = '' + this.needleValue
    this.options = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(0,204,38)', 'rgb(236,239,0)', 'rgb(255,1,0)'],
      arcDelimiters: [30],
      rangeLabel: ['0', '100'],
      needleStartValue: 50,
    }

    // @ts-ignore
    setInterval(() => {
      this.bottomLabel = '' + (+this.bottomLabel + 10) + '.0'
    }, 2000)
  }
}
