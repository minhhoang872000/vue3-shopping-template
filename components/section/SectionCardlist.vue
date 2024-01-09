<template>
    <section :id="block.id" :data-cms-bind="dataBinding" class="pt-[90px] pb-[100px]">
        <div class="container">
            <div class="flex items-center justify-center mb-[60px] gap-[8px]">
                <h2 class=" text-center">
                {{ block.title }}
                </h2>
                <img :src="block.icon_title" alt="" class="-mt-[20px]">
            </div>
            <div class="grid md:grid-cols-2 grid-flow-row-dense gap-[24px]">
                <div v-for="(item, index) in block.cardlist" :key="index" class="" >
                    <img :src="item.image" :alt="item.image_alt" class="border-tr-[60px] border-bl-[60px]">
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
  </style>
  