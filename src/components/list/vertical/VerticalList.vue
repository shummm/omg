<template>
  <div class="list-vertical hide-scrollbar">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style>
.list-vertical {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
