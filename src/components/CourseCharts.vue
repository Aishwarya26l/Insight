<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col
          ><h4 class="categoryHeader">
            {{ textToDisplay }}
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
            ><highcharts :options="feedBackChartOption"></highcharts></b-card
        ></b-col>
        <b-col
          ><b-card
            ><highcharts :options="popularityChartOption"></highcharts
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
      if (newSelectedItem && newSelectedItem.type === "course") {
        // Update dashboard item
        let dashboardItem = dashboard[newSelectedItem.type][newSelectedItem.id];

        // Update text to display
        this.textToDisplay =
          "Course - " + newSelectedItem.id + " : " + newSelectedItem.name;

        // Update score chart
        this.scoreChartOptions.series = dashboardItem.score.value;
        this.scoreChartOptions.xAxis.categories = dashboardItem.score.acadYear;

        // Update gender chart
        this.genderChartOptions.title.text = dashboardItem.gender.name;
        this.genderChartOptions.series[0].data = dashboardItem.gender.data;

        // Update feedback chart
        this.feedBackChartOption.xAxis.categories =
          dashboardItem.courseFeedback.acadYear;
        this.feedBackChartOption.series[0].data =
          dashboardItem.courseFeedback.data;

        // Update popularity chart
        this.popularityChartOption.xAxis.categories =
          dashboardItem.coursePopularity.acadYear;
        this.popularityChartOption.series = dashboardItem.coursePopularity.data;
      }
    }
  },
  data() {
    return {
      textToDisplay:
        "Course - " + this.selectedItem.id + " : " + this.selectedItem.name,
      popularityChartOption: {
        chart: {
          type: "column",
          height: 300,
          events: {
            redraw: function() {}
          }
        },
        title: {
          text: "Course popularity"
        },
        xAxis: {
          categories:
            dashboard[this.selectedItem.type][this.selectedItem.id]
              .coursePopularity.acadYear
        },
        yAxis: {
          min: 0,
          title: {
            text: "Class strength"
          },
          stackLabels: {
            enabled: true
          }
        },
        tooltip: {
          headerFormat: "<b>{point.x}</b><br/>",
          pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
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
        series:
          dashboard[this.selectedItem.type][this.selectedItem.id]
            .coursePopularity.data
      },
      feedBackChartOption: {
        chart: {
          height: 300,
          type: "line",
          events: {
            redraw: function() {}
          }
        },
        title: {
          text: "Course Feedback over the years"
        },
        xAxis: {
          title: {
            text: "Academic year"
          },
          categories:
            dashboard[this.selectedItem.type][this.selectedItem.id]
              .courseFeedback.acadYear
        },
        yAxis: {
          title: {
            text: "Feedback score"
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
        series: [
          {
            name: "Feedback",
            data:
              dashboard[this.selectedItem.type][this.selectedItem.id]
                .courseFeedback.data
          }
        ]
      },
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
            text: "Academic year"
          },
          categories:
            dashboard[this.selectedItem.type][this.selectedItem.id].score
              .acadYear
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
        series:
          dashboard[this.selectedItem.type][this.selectedItem.id].score.value
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
          text:
            dashboard[this.selectedItem.type][this.selectedItem.id].gender.name
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.y}</b>"
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
            showInLegend: true,
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.y}"
            }
          }
        },
        series: [
          {
            name: "Gender",
            colorByPoint: true,
            data:
              dashboard[this.selectedItem.type][this.selectedItem.id].gender
                .data
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
