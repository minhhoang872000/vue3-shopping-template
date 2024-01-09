<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="">
  
  </section>
</template>
<script lang="ts" setup>
interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();
</script>
<style lang="scss" scoped>
</style>
