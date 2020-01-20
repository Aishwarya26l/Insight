<template>
  <div>
    <nav>
      <router-link
        v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
        ><font-awesome-icon :icon="routes.icon" class="icon" />{{
          routes.text
        }}</router-link
      >
      <hr />
      <router-link
        class="other_routes"
        v-for="routes in other_routes"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
        ><font-awesome-icon :icon="routes.icon" class="icon" />{{
          routes.text
        }}</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Home",
          page: "/Home",
          icon: "home"
        },
        {
          id: 1,
          text: "My Dashboard",
          page: "/Dashboard",
          icon: "chart-bar"
        },
        {
          id: 2,
          text: "Contact",
          page: "/Contact",
          icon: "paper-plane"
        }
      ],
      other_routes: [
        {
          id: 3,
          text: "Sign up / Log in",
          page: "/Login",
          icon: "user"
        }
      ]
    };
  }
};
</script>
