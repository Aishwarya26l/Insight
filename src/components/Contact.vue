<template>
  <div>
    <b-card>
      <b-card-title
        ><font-awesome-icon
          icon="paper-plane"
          class="icon"
        />Contact</b-card-title
      >
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam
        donec adipiscing tristique risus nec. Aliquet eget sit amet tellus cras.
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      email: "john.doe@xyz.com",
      web: "www.google.com"
    };
  }
};
</script>
