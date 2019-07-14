<template>
  <div id="app">
    <my-component></my-component>
  </div>
</template>

<script>
import MyComponent from "./components/MyComponent.vue";

export default {
  name: "app",
  components: {
    "my-component": MyComponent
  },
  mounted() {
    this.$vf.useIndexedDBDriver();
  }
};
</script>