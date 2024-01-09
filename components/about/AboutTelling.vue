<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="pb-[90px]">
    <div class="container bg-[#DDE9E4] py-[90px] px-[40px] rounded-[30px] relative">
      <img :src="block.deco" alt="" class="absolute right-0 -top-[180px]">
      <p v-html="block.content" class="block font-sans font-light -tracking-[-0.16px] "></p>
    </div>
  </section>
</template>
<script lang="ts" setup>
interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();
</script>
<style lang="scss" scoped></style>
