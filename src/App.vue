<template>
  <Page />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Page from "./components/Page.vue";

export default defineComponent({
  name: "App",
  components: {
    Page,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  margin: 45px;
  padding: 0;
  box-sizing: border-box;
}
</style>
