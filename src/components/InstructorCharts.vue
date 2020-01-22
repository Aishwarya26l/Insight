<template>
  <div>
    <b-container fluid>
      <b-row> Selected {{ typeof selectedItem }} - {{ selectedItem }} </b-row>
      <br />
      <b-row>
        <b-col
          ><b-card><highcharts :options="barChartOptions"></highcharts></b-card
        ></b-col>
        <b-col
          ><b-card><highcharts :options="pieChartOptions"></highcharts></b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "InstructorCharts", //this is the name of the component
  props: ["selectedItem"],
  data() {
    return {
      barChartOptions: {
        chart: {
          type: "bar"
        },
        title: { text: "Sample bar chart" },
        series: [
          {
            data: [11, 42, 32] // sample data
          }
        ]
      },
      pieChartOptions: {
        chart: {
          type: "pie"
        },
        title: { text: "Sample pie chart" },
        series: [
          {
            data: [11, 22, 13] // sample data
          }
        ]
      }
    };
  }
};
</script>
