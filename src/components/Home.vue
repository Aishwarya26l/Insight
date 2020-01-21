<template>
  <div>
    <b-card>
      <b-card-title>
        <font-awesome-icon icon="university" class="icon" />Insight : A venture
        by ALSET
      </b-card-title>
      <b-card-text>
        Insight displays historic data about NUS curriculum to guide NUS
        students, instructors, and staff in decision-making.
        <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing
        diam donec adipiscing tristique risus nec. Aliquet eget sit amet tellus
        cras.
      </b-card-text>
    </b-card>
    <b-card>
      <b-card-title>
        <font-awesome-icon icon="search" class="icon" />Search for Courses,
        Instructors, and Majors.
      </b-card-title>
      <b-card-text>
        Select which category you would like to search and enter course numbers,
        title, or keywords.
        <div class="category-selection">
          <b-container fluid>
            <div class="dashboard-selection">
              <b-nav pills justified>
                <b-nav-item
                  @click="setActive('course')"
                  :class="{ active: isActive('course') }"
                  >Courses</b-nav-item
                >&nbsp;
                <b-nav-item
                  @click="setActive('instructor')"
                  :class="{ active: isActive('instructor') }"
                  >Instructors</b-nav-item
                >&nbsp;
                <b-nav-item
                  @click="setActive('major')"
                  :class="{ active: isActive('major') }"
                  >Majors</b-nav-item
                >
              </b-nav>
            </div>
            <div class="dashboard-selection">
              <b-row class="searchBar">
                <vue-simple-suggest
                  v-model="selectedText"
                  display-attribute="displayName"
                  :placeholder="searchText"
                  :list="simpleSuggestionList"
                  @suggestion-click="onSuggestClick"
                  :filter-by-query="true"
                ></vue-simple-suggest>
              </b-row>
              <b-row class="searchBar">
                <b-button
                  size="lg"
                  text="Button"
                  variant="outline-secondary"
                  class="searchButton"
                  @click="searchSelected()"
                >
                  <font-awesome-icon icon="search" class="icon" />Search
                </b-button>
              </b-row>
            </div>
          </b-container>
        </div>
        <div class="chartDisplay" :class="{ active: this.chartActive }">
          <b-container fluid>
            <component
              v-bind:is="currentView"
              v-bind:selectedItem="selectedItem"
            >
              <!-- component changes when vm.currentView changes! -->
            </component>
          </b-container>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import CourseCharts from "./CourseCharts";
import InstructorCharts from "./InstructorCharts";
import MajorCharts from "./MajorCharts";

import category from "../data/category.json";

export default {
  name: "Home",
  components: {
    course: CourseCharts,
    instructor: InstructorCharts,
    major: MajorCharts
  },
  data() {
    return {
      activeItem: "course",
      currentView: null,
      chartActive: false,
      searchText: "Search by course",
      selectedText: null,
      selectedItem: null,
      suggestionList: []
    };
  },
  methods: {
    resetSuggestion: function() {
      this.selectedText = null;
      this.selectedItem = null;
      this.chartActive = false;
      this.suggestionList = [];
    },
    isActive: function(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
      this.resetSuggestion();
      this.setSearchText();
    },
    setSearchText: function() {
      this.searchText = "Search by " + this.activeItem;
    },
    simpleSuggestionList: function() {
      category[this.activeItem].forEach(item => {
        item["displayName"] = item.id + " : " + item.name;
        if (this.suggestionList.indexOf(item) === -1)
          this.suggestionList.push(item);
      });
      return this.suggestionList;
    },
    onSuggestClick: function(suggest) {
      this.selectedItem = suggest;
    },
    searchSelected: function() {
      if (this.selectedItem) {
        this.chartActive = true;
        this.currentView = this.activeItem;
      } else {
        this.chartActive = false;
      }
    }
  }
};
</script>
