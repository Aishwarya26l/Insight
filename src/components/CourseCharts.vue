<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col
          ><h4 class="categoryHeader">
            Course - {{ selectedItem.id }} : {{ selectedItem.name }}
          </h4></b-col
        >
      </b-row>
      <b-row class="chartLayout">
        <b-col
          ><b-card
            ><highcharts :options="genderChartOptions"></highcharts></b-card
        ></b-col>
        <b-col
          ><b-card
            ><highcharts :options="scoreChartOptions"></highcharts
          ></b-card>
        </b-col>
      </b-row>
      <b-row class="chartLayout">
        <b-col
          ><b-card
            ><highcharts :options="scoreLineChartOptions"></highcharts></b-card
        ></b-col>
        <b-col
          ><b-card
            ><highcharts :options="scoreColumnChartOptions"></highcharts
          ></b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import dashboard from "@/data/dashboard.json";

export default {
  name: "CourseCharts", //this is the name of the component
  props: ["selectedItem"],
  data() {
    return {
      barChartOptions: {
        chart: {
          height: 300,
          type: "bar"
        },
        title: { text: "Sample bar chart" },
        series: [
          {
            data: [1, 2, 3] // sample data
          }
        ],
        credits: {
          enabled: false
        }
      },
      scoreLineChartOptions: {
        chart: {
          height: 300,
          type: "line"
        },
        title: {
          text: "Final score over the years"
        },
        xAxis: {
          title: {
            text: "Academic semester"
          },
          categories: dashboard.course[this.selectedItem.id].score.category
        },
        yAxis: {
          title: {
            text: "Score"
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            }
          }
        },
        credits: {
          enabled: false
        },
        series: dashboard.course[this.selectedItem.id].score.value
      },
      scoreColumnChartOptions: {
        chart: {
          height: 300,
          type: "column"
        },
        title: {
          text: "Final score over the years"
        },
        xAxis: {
          title: {
            text: "Academic semester"
          },
          categories: dashboard.course[this.selectedItem.id].score.category
        },
        yAxis: {
          title: {
            text: "Score"
          }
        },
        plotOptions: {
          column: {
            stacking: "normal",
            dataLabels: {
              enabled: true
            }
          }
        },
        credits: {
          enabled: false
        },
        series: dashboard.course[this.selectedItem.id].score.value
      },
      scoreChartOptions: {
        chart: {
          height: 300,
          type: "area"
        },
        title: {
          text: "Final score over the years"
        },
        xAxis: {
          title: {
            text: "Academic semester"
          },
          categories: dashboard.course[this.selectedItem.id].score.category
        },
        yAxis: {
          title: {
            text: "Score"
          }
        },
        plotOptions: {
          area: {
            dataLabels: {
              enabled: false
            }
          }
        },
        credits: {
          enabled: false
        },
        series: dashboard.course[this.selectedItem.id].score.value
      },
      genderChartOptions: {
        chart: {
          height: 300,
          type: "pie"
        },
        title: {
          text: "Class demographic"
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        accessibility: {
          point: {
            valueSuffix: "%"
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %"
            }
          }
        },
        series: [
          {
            name: "Gender",
            colorByPoint: true,
            data: dashboard.course[this.selectedItem.id].gender
          }
        ],
        credits: {
          enabled: false
        }
      }
    };
  }
};
</script>
