import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { CompanyService } from 'src/app/services/company.service';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {

  myprogressbar: boolean = false;
  company_one: string;
  company_two: string;
  dataCompanyOne: any;
  dataCompanyTwo: any;
  dataComp: any;
  join_rate: number;
  result_div:boolean = false;
  dataComp1_flag: any;
  dataComp2_flag: any;

  constructor(
    private _company: CompanyService,
  ) { }

  ngOnInit() {
  }

  evaluate() {

    this.myprogressbar = true;

    this._company.getCompany(this.company_one, this.company_two).subscribe(
      success=>{

        this.dataComp = success.comp;
        this.dataCompanyOne = success.comp1;
        this.dataCompanyTwo = success.comp2;

        this.join_rate = this.dataComp.flag_rate * 100;
        this.result_div = true;

        this.dataComp1_flag = success.comp1_flag;
        this.dataComp2_flag = success.comp2_flag;
      },
      error=>{
        console.error(error.status);
      },
      ()=>{
        this.evaluatChart(this.join_rate);
        this.myprogressbar = false;

        // console.log('Join Rate: ' + this.join_rate);
      } 
    );

  }

  evaluatChart(join_rate) {

    // create chart
    let chart = am4core.create("chartdiv", am4charts.GaugeChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart.innerRadius = -25;

    let axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
    // let axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;
    axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
    axis.renderer.grid.template.strokeOpacity = 0.3;

    let colorSet = new am4core.ColorSet();

    let range0 = axis.axisRanges.create();
    range0.value = 0;
    range0.endValue = 50;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = colorSet.getIndex(0);
    range0.axisFill.zIndex = - 1;

    let range1 = axis.axisRanges.create();
    range1.value = 50;
    range1.endValue = 80;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = colorSet.getIndex(6);
    range1.axisFill.zIndex = -1;

    let range2 = axis.axisRanges.create();
    range2.value = 80;
    range2.endValue = 100;
    range2.axisFill.fillOpacity = 1;
    range2.axisFill.fill = colorSet.getIndex(8);
    range2.axisFill.zIndex = -1;

    let hand = chart.hands.push(new am4charts.ClockHand());
    // hand.showValue(this.join_rate * 100, 1000, am4core.ease.cubicOut);


    // using chart.setTimeout method as the timeout will be disposed together with a chart
    chart.setTimeout(randomValue, 2000);

    function randomValue() {
      hand.showValue(join_rate, 1000, am4core.ease.cubicOut);
      chart.setTimeout(randomValue, 2000);
    }

  }

}
