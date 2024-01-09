<template>
  <section
    :id="block.id"
    :data-cms-bind="dataBinding"
    class="giftcard py-[90px]"
  >
    <div class="container">
      <div class="flex items-center justify-center gap-[7px] mb-[60px]">
        <h2 v-html="block.title" class="text-center"></h2>
        <img :src="block.icon_title" alt="" class="-mt-[20px]" />
      </div>
      <div class="grid grid-cols-[440px_1fr] gap-[60px]">
        <div class="">
          <h3 class="mb-[40px]" v-html="block.subtitle"></h3>
          <p class="textstyle border-2 border-secondary mb-[30px]">{{ block.content }}</p>
          <NuxtLink :to="block.button.url" class="sublink self-baseline">{{
            block.button.text
          }}</NuxtLink>
        </div>
        <div class="min-h-[476px] relative border-tr-[60px] border-br-[60px]" :style="{ background: `url(${block.bg_image}) center no-repeat` }" >
          <img :src="block.image" alt="" class="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
          <img :src="block.deco" alt="" class="absolute bottom-[28px] -left-[73px]">
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
<style lang="scss" scoped>
.giftcard {
  background: linear-gradient(
      0deg,
      rgba(175, 212, 194, 0.1) 0%,
      rgba(175, 212, 194, 0.1) 100%
    ),
    var(--color-primary);
}
</style>
