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
        <b-col>
          <b-card>
            <highcharts
              class="chart"
              ref="chart"
              :options="genderChartOptions"
            ></highcharts></b-card
        ></b-col>
        <b-col
          ><b-card>
            <highcharts :options="scoreChartOptions"></highcharts>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="chartLayout">
        <b-col
          ><b-card
            ><highcharts :options="scoreChartOptions"></highcharts></b-card
        ></b-col>
        <b-col
          ><b-card
            ><highcharts :options="scoreChartOptions"></highcharts
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
  watch: {
    selectedItem: function(newSelectedItem) {
      this.scoreChartOptions.series =
        dashboard.course[newSelectedItem.id].score.value;
      this.scoreChartOptions.xAxis.categories =
        dashboard.course[newSelectedItem.id].score.category;
      this.genderChartOptions.series[0].data =
        dashboard.course[newSelectedItem.id].gender;
    }
  },
  data() {
    return {
      scoreChartOptions: {
        chart: {
          height: 300,
          type: "area",
          events: {
            redraw: function() {}
          }
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
          type: "pie",
          events: {
            redraw: function() {}
          }
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
