<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="pt-[137px] pb-[90px] bg-[#F9F9F9]">
    <div class="container">
      <div class="flex items-center justify-center mb-[60px] gap-[8px]">
        <h2 class="text-center">
          {{ block.title }}
        </h2>
        <img :src="block.icon_title" alt="" class="-mt-[20px]" />
      </div>
      <div class="">
        <div v-for="(item, index) in block.term" :key="index" class="[&:not(:last-child)]:mb-[30px]">
            <span>{{ index + 1 }}. </span>
            <span class="font-abril text-[18px] leading-[20px] tracking-[0.44px]">{{ item.title }}: </span>
            <span class="font-sans text-[18px] leading-[24px] tracking-[0.1px]"> {{ item.subtitle }}</span>
        </div>
      </div>
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
