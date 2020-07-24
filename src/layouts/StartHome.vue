<template>
  <div>
    <navBar />
    <slot></slot>
  </div>
</template>

<script>
import navBar from "@/components/GeneralComponents/navBar.vue";

export default {
  components: {
    navBar
  }
};
</script>

<style></style>
