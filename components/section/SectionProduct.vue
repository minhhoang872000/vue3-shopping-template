<template>
    <section :id="block.id" :data-cms-bind="dataBinding" class="">
    <div class="container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-[30px] mb-[60px]">
            <div v-for="(item, index) in block.product" :key="index" class="">
               <div>
                    <img :src="item.image" :alt="item.image_alt" class="w-full h-full">
               </div>
               <div class="pt-[50px] pb-[60px] pl-[40px] pr-[35px] rounded-b-[26px] bg-[#F2F2F2]">
                    <span v-html="item.label" class="font-sans text-[20px] font-normal">
                    </span>
                    <div class="flex items-center justify-between mt-[30px]">
                        <span class="text-[34px] font-signs tracking-[-0.68px] font-normal text-[#F00]">${{ item.price }}</span>
                        <NuxtLink class="sublink" :to="item.button.url">{{ item.button.text }}</NuxtLink>
                    </div>
               </div>
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
  