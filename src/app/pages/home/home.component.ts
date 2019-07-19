import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myprogressbar: boolean = false;

  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {

    // let chart1 = am4core.create("chartdiv1", am4charts.PieChart3D);
    // chart1.hiddenState.properties.opacity = 0; // this creates initial fade-in

    // chart1.legend = new am4charts.Legend();

    // chart1.data = [
    //   {
    //     type: "QUOTATION",
    //     budget: 865381086.39
    //   },
    //   {
    //     type: "TENDER",
    //     budget: 2274441431.27
    //   },
    // ];

    // chart1.innerRadius = 100;

    // let series = chart1.series.push(new am4charts.PieSeries3D());
    // series.dataFields.value = "budget";
    // series.dataFields.category = "type";


    this.getChartTenderVsQuotation();
    this.getChartCompanyTenderAndQuotation();
    this.getChartSpendingByMinistry();
    this.getChartAwrdByCompany();
    
  }


  getChartTenderVsQuotation() {

    // Create chart instance
    let chart = am4core.create("chartdiv_tendervsquotation", am4charts.PieChart);

    // Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(40);

    // Add data
    chart.data = [{
      "type": "QUOTATION",
      "budget": 865381086.39,
      "company": 1500
    }, {
      "type": "TENDER",
      "budget": 2274441431.27,
      "company": 990
    }];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "budget";
    pieSeries.dataFields.category = "type";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // Disabling labels and ticks on inner circle
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    // Disable sliding out of slices
    pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
    pieSeries.slices.template.states.getKey("hover").properties.scale = 0.9;

    // Add second series
    let pieSeries2 = chart.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "company";
    pieSeries2.dataFields.category = "type";
    pieSeries2.slices.template.stroke = am4core.color("#fff");
    pieSeries2.slices.template.strokeWidth = 2;
    pieSeries2.slices.template.strokeOpacity = 1;
    pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
    pieSeries2.slices.template.states.getKey("hover").properties.scale = 1.1;

  }


  getChartCompanyTenderAndQuotation() {

    let chart = am4core.create("chartdiv_companytenderandquotation", am4charts.PieChart);

    // Add data
    chart.data = [{
      "type": "QUOTATION",
      "company": 14429
    }, {
      "type": "TENDER",
      "company": 10426
    }];

    // Set inner radius
    chart.innerRadius = am4core.percent(50);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "company";
    pieSeries.dataFields.category = "type";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

  }


  getChartSpendingByMinistry() {


    let chart = am4core.create("chartdiv_spendingbyministry", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [{
      "name": "JPM",
      "points": 283,
    }, {
      "name": "MOF",
      "points": 98,
    }, {
      "name": "MOT",
      "points": 105,
    }, {
      "name": "KKR",
      "points": 40,
    }, {
      "name": "MITI",
      "points": 4,
    }, {
      "name": "MOHR",
      "points": 425,
    }, {
      "name": "KPKT",
      "points": 99,
    }, {
      "name": "MINDEF",
      "points": 671,
    }, {
      "name": "KLN",
      "points": 7,
    }, {
      "name": "KBS",
      "points": 193,

    }, {
      "name": "KKM",
      "points": 1548,
    }, {
      "name": "KWP",
      "points": 12,
    }, {
      "name": "MOA",
      "points": 356,
    }, {
      "name": "KPM",
      "points": 1974,
    }, {
      "name": "MOTAC",
      "points": 63,
    }, {
      "name": "MESTECC",
      "points": 227,
    }, {
      "name": "KPLB",
      "points": 241,
    }, {
      "name": "KATS",
      "points": 219,
    }, {
      "name": "KPWKM",
      "points": 99,
    }, {
      "name": "KPDNHEP",
      "points": 30,
    }, {
      "name": "KKMM",
      "points": 69,
    }, {
      "name": "KDN",
      "points": 472,
    }, {
      "name": "MEA",
      "points": 20,
    }, {
      "name": "MED",
      "points": 7,
    }];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.fontSize = 11;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 2100;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.minGridDistance = 30;
    // axis break
    let axisBreak = valueAxis.axisBreaks.create();
    axisBreak.startValue = 200;
    axisBreak.endValue = 810;
    axisBreak.breakSize = 0.05;

    // make break expand on hover
    let hoverState = axisBreak.states.create("hover");
    hoverState.properties.breakSize = 1;
    hoverState.properties.opacity = 0.1;
    hoverState.transitionDuration = 1500;

    axisBreak.defaultState.transitionDuration = 1000;
    /*
    // this is exactly the same, but with events
    axisBreak.events.on("over", function() {
      axisBreak.animate(
        [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
        1500,
        am4core.ease.sinOut
      );
    });
    axisBreak.events.on("out", function() {
      axisBreak.animate(
        [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
        1000,
        am4core.ease.quadOut
      );
    });*/

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "name";
    series.dataFields.valueY = "points";
    series.columns.template.tooltipText = "{valueY.value}";
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

  }



  getChartAwrdByCompany() {

    let chart = am4core.create("chartdiv_awardbycompany", am4charts.SankeyDiagram);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      { from: "Tender", to: "SEGI SERI SDN. BHD.", value: 51740357.12  },
      { from: "Tender", to: "MUTIARA SMART SDN BHD", value: 25470768.00 },
      { from: "Tender", to: "PARDUS ENGINEERING SDN BHD", value: 22090000.00 },
      { from: "Tender", to: "GLOBAL ELITE VENTURES SDN. BHD.", value: 20675036.00 },
      { from: "Tender", to: "PERNEC INTEGRATED NETWORK SYSTEMS SDN. BHD.", value: 19791600.00 },
      { from: "Tender", to: "TELEKOM MALAYSIA BERHAD", value: 19252168.00 },
      { from: "Tender", to: "KOPERASI GURU-GURU MELAYU PAHANG BARAT BERHAD", value: 16567398.69 },
      { from: "Tender", to: "N.N.D ENTERPRISE", value: 16059290.00 },
      { from: "Tender", to: "KOMPUTER SISTEM (M) SDN. BHD.", value: 15918957.60 },
      { from: "Tender", to: "NTROUPE RESOURCES", value: 15571920.00 },
      { from: "Quotation", to: "M.S. ALLY PHARMA SDN. BHD.", value: 33201780.05 },
      { from: "Quotation", to: "QUALITY REPUTATION SDN BHD", value: 10230023.67 },
      { from: "Quotation", to: "MUTIARA MURNI SDN BHD", value: 8624181.50 },
      { from: "Quotation", to: "ALAM MEDIK SDN BHD", value: 7377482.11 },
      { from: "Quotation", to: "PHARMANIAGA LOGISTICS SDN BHD", value: 6912248.80 },
      { from: "Quotation", to: "GELIGA SISTEM SDN BHD", value: 6399704.91 },
      { from: "Quotation", to: "MEDILIANCE(M) SDN BHD", value: 5921873.50 },
      { from: "Quotation", to: "PRIMABUMI SDN BHD", value: 4742538.94 },
      { from: "Quotation", to: "PUTARAN SEMASA SDN. BHD.", value: 4349824.68 },
      { from: "Quotation", to: "ADVANCE COMBINATION (M) SDN. BHD.", value: 4191658.26 }
    ];
    

    let hoverState = chart.links.template.states.create("hover");
    hoverState.properties.fillOpacity = 0.6;

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";

    // for right-most label to fit
    chart.paddingRight = 30;

    // make nodes draggable
    let nodeTemplate = chart.nodes.template;
    nodeTemplate.inert = true;
    nodeTemplate.readerTitle = "Drag me!";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.width = 20;

    // make nodes draggable
    nodeTemplate = chart.nodes.template;
    nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer

  }

}
