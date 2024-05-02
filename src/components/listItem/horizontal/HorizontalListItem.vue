<template>
  <div
    ref="itemCell"
    @mouseenter="onMouseEnterLeave"
    @mouseleave="onMouseEnterLeave"
    :id="id"
  >
    <div
      class="item-horizontal"
      :class="isMouseEnter ? 'animation-cell-enter' : 'animation-cell-leave'"
    >
      {{ id }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// eslint-disable-next-line no-undef
const props = defineProps<{
  id: number;
  updateVisibleElements: ({
    id,
    isVisible,
  }: {
    id: number;
    isVisible: boolean;
  }) => void;
}>();

const itemCell = ref<any>(null);

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.95,
  });
  observer.observe(itemCell.value);
});

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("data-visible", "true");
      props.updateVisibleElements({
        id: parseInt(entry.target.id),
        isVisible: true,
      });
    } else {
      props.updateVisibleElements({
        id: parseInt(entry.target.id),
        isVisible: false,
      });
      entry.target.setAttribute("data-visible", "false");
    }
  });
};

const isMouseEnter = ref<boolean>(false);
const onMouseEnterLeave = () => {
  isMouseEnter.value = !isMouseEnter.value;
};
</script>

<style>
.item-horizontal {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid #2c3e5025;
  border-radius: 5px;
  cursor: pointer;
}
.animation-cell-enter {
  transform: scale(80%);
  transition-duration: 0.2s;
}
.animation-cell-leave {
  transform: scale(100%);
  transition-duration: 0.1s;
}
</style>
