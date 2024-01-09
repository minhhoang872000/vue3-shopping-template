<template>
    <section :id="block.id" :data-cms-bind="dataBinding" class="object-cover h-[326px] mb-[260px]" :style="{ background: `url(${block.background}) center no-repeat` }">
      <div class="container">
        <div class="flex items-center justify-center ">
          <h2 class="">{{ block.title }}</h2>
          <img :src="block.deco" alt="" class="-mt-[20px]">
        </div>
        <span class="text-[34px] mb-[40px] tracking-[-0.68px] block text-center">{{ block.subtitle }}</span>
        <div class="flex items-stretch justify-center gap-[24px] mb-[40px]">
          <div v-for="(item, index) in block.menu" :key="index" v-bind:class="{'border__item': checkRouter == item.cate}" class="bg-main rounded-[90px] border-2 border-[#9B9B9B] p-[12px] pb-[60px] flex items-center flex-col gap-[16px] " >
            <div class="mb-[16px] w-[110px] aspect-[1/1]">
              <img :src="item.image" :alt="item.image_alt" class="w-full h-full rounded-full">
            </div>
            <span class="text-[18px] font-sans uppercase font-bold max-w-[109px] text-center">
              {{ item.label }}
            </span>
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
  const route = useRoute();
  console.log(route);
  const checkRouter = route.params.slug.slice(-1).toString();
</script>
<style lang="scss" scoped>
.border__item{
  &:hover{
    border: 2px solid var(--color-anchor, --color-secondary);
    color: #f00;
  }
  &:active{
    border: 2px solid var(--color-anchor, --color-secondary);
    color: #f00;
  }
}
</style>