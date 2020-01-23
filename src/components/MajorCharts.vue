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
          <b-card> <highcharts :options="gpaChartOption"></highcharts></b-card
        ></b-col>
        <b-col
          ><b-card>
            <highcharts :options="majPopChartOption"></highcharts>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import dashboard from "@/data/dashboard.json";

export default {
  name: "MajorCharts", //this is the name of the component
  props: ["selectedItem"],
  watch: {
    selectedItem: function(newSelectedItem) {
      if (newSelectedItem && newSelectedItem.type === "major") {
        // Update dashboard item
        let dashboardItem = dashboard[newSelectedItem.type][newSelectedItem.id];

        // Update text to display
        this.textToDisplay =
          "Major - " + newSelectedItem.id + " : " + newSelectedItem.name;

        // Update popularity chart
        this.majPopChartOption.xAxis.categories =
          dashboardItem.majorPopularity.acadYear;
        this.majPopChartOption.series = dashboardItem.majorPopularity.data;

        // Update GPA chart
        this.gpaChartOption.xAxis.categories = dashboardItem.gpa.acadYear;
        this.gpaChartOption.series = dashboardItem.gpa.value;
      }
    }
  },
  data() {
    return {
      textToDisplay:
        "Major - " + this.selectedItem.id + " : " + this.selectedItem.name,
      gpaChartOption: {
        chart: {
          height: 300,
          type: "area",
          events: {
            redraw: function() {}
          }
        },
        title: {
          text: "Final GPA over the years"
        },
        xAxis: {
          title: {
            text: "Academic year"
          },
          categories:
            dashboard[this.selectedItem.type][this.selectedItem.id].gpa.acadYear
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
          dashboard[this.selectedItem.type][this.selectedItem.id].gpa.value
      },
      majPopChartOption: {
        chart: {
          type: "column",
          height: 300,
          events: {
            redraw: function() {}
          }
        },
        title: {
          text: "Major popularity"
        },
        xAxis: {
          categories:
            dashboard[this.selectedItem.type][this.selectedItem.id]
              .majorPopularity.acadYear
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
            .majorPopularity.data
      }
    };
  }
};
</script>
