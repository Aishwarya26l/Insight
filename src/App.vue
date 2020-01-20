<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <!-- Sidebar  -->
        <b-col sm="2" class="sidebar-col">
          <nav id="sidebar">
            <div class="sticky-top">
              <div class="sidebar-header">
                <h3>
                  <font-awesome-icon icon="university" class="icon" />Insight
                </h3>
              </div>
              <ul class="list-unstyled components">
                <li><Navigation></Navigation></li>
              </ul>
            </div>
          </nav>
        </b-col>
        <!-- Content -->
        <b-col sm="10" class="content-col">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "app",
  components: {
    Navigation: Navigation
  }
};
</script>
