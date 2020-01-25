import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { InstructionsComponent } from './components/instructions/instructions.component';


const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent },
  {path: 'line-chart', component: LineChartComponent },
  {path: 'pie-chart', component: PieChartComponent },
  {path: 'doughnut-chart', component: DoughnutChartComponent },
  {path: 'radar-chart', component: RadarChartComponent },
  // {path: 'instructions', component : InstructionsComponent},
  {path: '**', component : BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
