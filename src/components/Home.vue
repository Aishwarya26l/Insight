<template>
  <div>
    <b-card>
      <b-card-title
        ><font-awesome-icon icon="university" class="icon" />Insight : A venture
        by ALSET</b-card-title
      >
      <b-card-text>
        Insight displays historic data about NUS curriculum to guide NUS
        students, instructors, and staff in decision-making.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam
        donec adipiscing tristique risus nec. Aliquet eget sit amet tellus cras.
      </b-card-text>
    </b-card>
    <b-card>
      <b-card-title
        ><font-awesome-icon icon="search" class="icon" />Search for Courses,
        Instructors, and Majors.</b-card-title
      >
      <b-card-text>
        Select which category you would like to search and enter course numbers,
        title, or keywords.
        <br />
        <br />
        <b-container fluid>
          <div class="dashboard-selection">
            <b-nav pills justified>
              <b-nav-item
                @click="setActive('course')"
                :class="{ active: isActive('course') }"
                >Courses</b-nav-item
              >
              &nbsp;
              <b-nav-item
                @click="setActive('instructor')"
                :class="{ active: isActive('instructor') }"
                >Instructors</b-nav-item
              >
              &nbsp;
              <b-nav-item
                @click="setActive('major')"
                :class="{ active: isActive('major') }"
                >Majors</b-nav-item
              >
            </b-nav>
          </div>
          <div class="dashboard-selection">
            <b-input-group>
              <b-input-group-append>
                <b-button
                  text="Button"
                  variant="outline-secondary"
                  class="searchButton"
                  ><font-awesome-icon icon="search" class="icon"
                /></b-button>
              </b-input-group-append>
              <b-form-input
                id="search-criteria"
                type="text"
                :placeholder="searchText"
              ></b-form-input>
            </b-input-group></div
        ></b-container>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: "course",
      name: "Home",
      searchText: "Search by course"
    };
  },
  methods: {
    isActive: function(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
      this.setSearchText();
    },
    setSearchText: function() {
      this.searchText = "Search by " + this.activeItem;
    }
  }
};
</script>
