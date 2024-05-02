<template>
  <div class="item-vertical">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListItem",
});
</script>

<style>
.item-vertical {
  display: flex;
  width: 100%;
  height: 46px;
}
</style>
