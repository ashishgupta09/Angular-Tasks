import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from 'src/services/api.service';
Chart.register(...registerables)

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chartData: any[] = [];
  labelData: any[] = [];
  realData: any[] = [];
  colorData: any[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData() {
    this.apiService.loadData().subscribe((res: any) => {
      this.chartData = res;
      if (this.chartData !== null) {
        this.chartData.map(o => {
          this.labelData.push(o.year);
          this.realData.push(o.amount);
          this.colorData.push(o.colorcode);
        })
      }
      this.renderBarChart(this.labelData, this.realData, this.colorData);
      this.renderPieChart(this.labelData, this.realData, this.colorData);
      this.renderDoughNutChart(this.labelData, this.realData, this.colorData);
      this.renderPolarAreaChart(this.labelData, this.realData, this.colorData);
      this.renderRadarChart(this.labelData, this.realData, this.colorData);
      this.renderLineChart(this.labelData, this.realData, this.colorData);
      this.renderBubbleChart(this.labelData, this.realData, this.colorData);
      this.renderScatterChart(this.labelData, this.realData, this.colorData);
    })
  }

  renderBarChart(labelData:any, valueData:any, colorData:any){
   this.renderChart(labelData,valueData,colorData,'barchart','bar')
  }

  renderPieChart(labelData:any, valueData:any, colorData:any){
   this.renderChart(labelData,valueData,colorData,'piechart','pie')
  }

  renderDoughNutChart(labelData:any, valueData:any, colorData:any){
   this.renderChart(labelData,valueData,colorData,'doughnutchart','doughnut')
  }

  renderPolarAreaChart(labelData:any, valueData:any, colorData:any){
   this.renderChart(labelData,valueData,colorData,'polarAreachart','polarArea')
  }

  renderRadarChart(labelData:any, valueData:any, colorData:any){
   this.renderChart(labelData,valueData,colorData,'radarChart','radar')
  }

  renderLineChart(labelData:any, valueData:any, colorData:any){
   this.renderChart(labelData,valueData,colorData,'lineChart','line')
  }

  renderBubbleChart(labelData:any, valueData:any, colorData:any){
    const myChar = new Chart('bubbleChart', {
      type: 'bubble',
      data: {
        datasets: [
          {
           label:'Yearly Sales',
           data:[
            {
              x:20,
              y:40,
              r:70
            },
            {
              x:30,
              y:50,
              r:60
            },
            {
              x:13,
              y:15,
              r:16
            }
           ],
           backgroundColor:['red','yellow','orange']
          }
        ]
      },
      options: {
      }
    })
  }

  renderScatterChart(labelData:any, valueData:any, colorData:any){
    const myChar = new Chart('scatterChart', {
      type: 'scatter',
      data: {
        datasets: [
          {
           label:'Yearly Sales',
           data:[
            {
              x:20,
              y:40,
              r:70
            },
            {
              x:30,
              y:50,
              r:60
            },
            {
              x:13,
              y:15,
              r:16
            }
           ],
           backgroundColor:['red','yellow','orange']
          }
        ]
      },
      options: {
      }
    })
  }

  renderChart(labelData: any, valuedata: any, colordata: any, chartId: string, charttype: any) {
    const myChar = new Chart(chartId, {
      type: charttype,
      data: {
        labels: labelData,
        datasets: [
          {
            data: valuedata,
            backgroundColor: colordata
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

}
