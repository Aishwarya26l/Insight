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
            <div class="insHeaderWrapper">
              <div class="insHeader">
                <h5>{{ coursesHandledHeader }}</h5>
              </div>
            </div>

            <div class="instructorTable">
              <b-table
                sticky-header
                hover
                :bordered="true"
                :items="coursesHandled"
              ></b-table>
            </div> </b-card
        ></b-col>
        <b-col
          ><b-card>
            <highcharts :options="insFbChartOption"></highcharts>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import dashboard from "@/data/dashboard.json";

export default {
  name: "InstructorCharts", //this is the name of the component
  props: ["selectedItem"],
  watch: {
    selectedItem: function(newSelectedItem) {
      if (newSelectedItem && newSelectedItem.type === "instructor") {
        // Update dashboard item
        let dashboardItem = dashboard[newSelectedItem.type][newSelectedItem.id];

        // Update text to display
        this.textToDisplay =
          "Instructor - " + newSelectedItem.id + " : " + newSelectedItem.name;

        //Update coursesHandled
        this.coursesHandled = dashboardItem.coursesHandled.data;
        this.coursesHandledHeader = dashboardItem.coursesHandled.name;

        //Update feedbackChart
        this.insFbChartOption.series = dashboardItem.insFeedback.data;
        this.insFbChartOption.xAxis.categories =
          dashboardItem.insFeedback.acadYear;
      }
    }
  },
  data() {
    return {
      textToDisplay:
        "Instructor - " + this.selectedItem.id + " : " + this.selectedItem.name,
      coursesHandled:
        dashboard[this.selectedItem.type][this.selectedItem.id].coursesHandled
          .data,
      coursesHandledHeader:
        dashboard[this.selectedItem.type][this.selectedItem.id].coursesHandled
          .name,

      insFbChartOption: {
        chart: {
          height: 300,
          type: "line",
          events: {
            redraw: function() {}
          }
        },
        title: {
          text: "Instructor Feedback"
        },
        xAxis: {
          title: {
            text: "Academic year"
          },
          categories:
            dashboard[this.selectedItem.type][this.selectedItem.id].insFeedback
              .acadYear
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
        series:
          dashboard[this.selectedItem.type][this.selectedItem.id].insFeedback
            .data
      }
    };
  }
};
</script>
