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
              <b-row class="searchBar"
                ><vue-simple-suggest
                  v-model="chosen"
                  :placeholder="searchText"
                  :list="simpleSuggestionList"
                  :filter-by-query="true"
                >
                </vue-simple-suggest
              ></b-row>
              <b-row class="searchBar"
                ><b-button
                  size="lg"
                  text="Button"
                  variant="outline-secondary"
                  class="searchButton"
                >
                  <font-awesome-icon icon="search" class="icon" /> Search
                </b-button></b-row
              >
            </div>
          </b-container>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import category from "../data/category.json";
export default {
  data() {
    return {
      activeItem: "course",
      name: "Home",
      searchText: "Search by course",
      chosen: "",
      suggestionList: []
    };
  },
  methods: {
    resetSuggestion: function() {
      this.chosen = "";
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
      // switch (this.activeItem) {
      //   case "course":
      //     this.suggestionList = category.course.map(
      //       element => element.id + " : " + element.name
      //     );
      //     break;
      //   case "instructor":
      //     this.suggestionList = category.instructor.map(
      //       element => element.id + " : " + element.name
      //     );
      //     break;
      //   case "major":
      //     this.suggestionList = category.major.map(
      //       element => element.id + " : " + element.name
      //     );
      //     break;
      //   default:
      //     break;
      // }

      this.suggestionList = category[this.activeItem].map(
        element => element.id + " : " + element.name
      );
      return this.suggestionList;
    }
  }
};
</script>
