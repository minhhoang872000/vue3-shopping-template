<template>
  <header class="h-[90px] sticky z-50 bg-main">
    <div class="container flex items-center justify-between">
      <NuxtLink :to="headerData.home_link">
        <img :src="headerData.logo" alt="">
      </NuxtLink>
      <div class="flex items-center">
        <nav class="text-[24px] ">
          <ul class="flex ">
            <li v-for="(item, index) in headerData.nav" :key="index" class="px-[12px] py-[8px]">
              <NuxtLink :to="item.link" class="w-full h-full">{{ item.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <nav class="ml-[40px] flex items-center">
          <ul class="flex items-center gap-[12px]">
            <li v-for="(item, index) in headerData.login" :key="index" >
              <NuxtLink class="bg-secondary rounded-[30px] px-[16px] py-[6px] font-opens" :to="item.link">{{ item.text }}</NuxtLink> 
            </li>
          </ul>
        </nav>
        <img :src="headerData.truck" alt="" class="mx-[40px]">
        <div class="flex gap-[13px]">
          <span>{{ headerData.cart }}</span>
          <div class="relative">
            <img :src="headerData.icon_cart" alt="">
            <span class="absolute -top-[4px] -right-[4px] inline-flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#F00] text-[10px]">0</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import headerData from "@/data/header.json";
</script>

<style scoped lang="scss">
</style>
<!-- d="M57.9469 10.3445C47.78 8.57739 37.2547 8.84721 26.953 9.13381C18.2851 9.37496 6.9709 11.7784 3.15836 20.1707C0.352078 26.348 2.84032 32.3737 8.51169 36.068C14.5132 39.9774 21.5669 41.9156 28.6697 43.0516C41.329 45.0763 54.3158 45.4401 67.1029 44.5255C81.0029 43.5314 94.8205 41.3976 108.545 39.1562C113.887 38.2839 123.795 36.6972 129.589 35.1731C133.352 34.1835 135.029 33.5989 137.859 31.3479C140.949 28.8911 142.937 25.707 141.551 21.8727C140.238 18.238 136.993 15.3565 133.872 13.0818C123.065 5.20658 107.584 3.44732 94.4603 2.62398C80.4675 1.74613 66.313 2.01478 52.2982 2.13267C48.3126 2.1662 44.1967 2.19087 40.2255 2.69417C35.8059 3.2543 34.5306 3.87365 30.0358 4.6594"
stroke="#F8A423"
stroke-width="3"
stroke-linecap="round" -->
