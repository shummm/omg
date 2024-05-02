<template>
  <div class="page">
    <VerticalList>
      <VerticalListItem v-for="vEl in verticalElements" :key="vEl">
        <HorizontalList />
      </VerticalListItem>
    </VerticalList>
  </div>
</template>

<script setup lang="ts">
import VerticalList from "@/components/list/vertical/VerticalList.vue";
import HorizontalList from "@/components/list/horizontal/HorizontalList.vue";
import VerticalListItem from "@/components/listItem/vertical/VerticalListItem.vue";
import { generateRandomElements } from "@/helpers/helpers";
import { COUNT_VERTICAL_ELEMENTS } from "@/constants/constants";
import { ref } from "vue";

const verticalElements = ref(generateRandomElements(COUNT_VERTICAL_ELEMENTS));
</script>

<style>
.page {
  display: flex;
  width: 70vw;
  height: 80vh;
  padding: 3px;
  overflow: hidden;
  box-shadow: 0px -5px 40px 20px #c6cccc50;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
