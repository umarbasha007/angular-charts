import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {


  public barChartOptions=  {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    
    
  };

  public barChartLabels  = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
 
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Company A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Company B' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
