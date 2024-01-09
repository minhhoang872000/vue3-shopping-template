<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="bg-[#FFFAE0] pt-[90px] pb-[40px]">
    <div class="container relative">
      <img :src="block.combo_image3" alt="" class="absolute right-0">
     <div class="flex items-center gap-[10px] mb-[60px]">
      <h2>{{ block.title }}</h2>
      <img :src="block.icon_title" alt="">
     </div>
     <h3 class="text-[rgb(255,0,0)] mb-[40px]" v-html="block.subtitle" >
     </h3>
     <div class="flex items-center justify-start gap-[10px] relative">
      <div>
        <img :src="block.combo_image1" alt="" class="w-full h-full object-cover background__image">
      </div>
      <div>
        <img :src="block.combo_image2" alt="" class="w-full h-full object-cover background__image">
      </div>
      <img :src="block.deco2" alt="" class="absolute right-0 bottom-[18px]">
     </div>
     <img :src="block.deco1" alt="" class="ml-[20px]">
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
<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .bestseller__item {
    grid-column: span 2 / span 2;
  }
  .background__image{
    border: 3px solid var(--color-anchor, --color-secondary);
  }
}
</style>
