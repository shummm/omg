<template>
  <div id="horizontalList" class="horizontal-list hide-scrollbar">
    <HorizontalListItem
      v-for="hEl in horizontalElements"
      :id="hEl"
      :updateVisibleElements="updateVisibleElements"
      :key="hEl"
    />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import HorizontalListItem from "@/components/listItem/horizontal/HorizontalListItem.vue";
import {
  generateRandomNumber,
  getRandomElement,
  randomNumberArray,
} from "@/helpers/helpers";
import { COUNT_DIGITS, COUNT_HORIZONTAL_ELEMENTS } from "@/constants/constants";

const horizontalElements = ref<Array<number>>([]);

onMounted(() => {
  horizontalElements.value = randomNumberArray(
    COUNT_HORIZONTAL_ELEMENTS,
    COUNT_DIGITS
  );
});
let visibleElements = ref<Array<{ id: number; isVisible: boolean }>>([]);

const updateVisibleElements = ({
  id,
  isVisible,
}: {
  id: number;
  isVisible: boolean;
}): void => {
  if (isVisible) {
    visibleElements.value = visibleElements.value.concat({
      id,
      isVisible,
    });
  } else {
    visibleElements.value = visibleElements.value.filter((el) => el.id !== id);
  }
};

const updateRandomItem = () => {
  const index = getRandomElement(0, visibleElements.value.length - 1);
  visibleElements.value.forEach((el, eachIndex) => {
    if (index === eachIndex) {
      const newValue = generateRandomNumber(11);
      const indexElement = horizontalElements.value.findIndex(
        (value) => value === el.id
      );
      if (indexElement >= 0) {
        horizontalElements.value[indexElement] = newValue;
      }
    }
  });
};

let interval: number | undefined;

onMounted(() => {
  interval = setInterval(() => {
    updateRandomItem();
  }, 1000);
});

onBeforeUnmount(() => {
  return clearInterval(interval);
});
</script>

<style>
.horizontal-list {
  display: flex;
  overflow-x: auto;
  gap: 3px;
}
</style>
