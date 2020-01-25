import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  public radarChartOptions = {
    responsive: true,
  };
  public radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData= [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Person A' },
    { data: [48, 76, 60, 32, 96, 27, 52], label: 'Person B' }
  ];
  public radarChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
