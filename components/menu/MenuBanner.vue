<template>
    <section :id="block.id" :data-cms-bind="dataBinding" class="object-cover h-[760px] menu" :style="{ background: `url(${block.background}) center no-repeat` }">
      <div class="container pt-[100px]">
        <div class="">
            <h2 class="">{{ block.title }}</h2>
            <p class="text-[24px] inline-block clip__text relative bg-[#FCC309] pt-[12px] pb-[6px] pl-[6px] pr-[30px]">{{ block.time }}</p>
            <h5 v-html="block.subtitle" class="font-signs text-[34px] -tracking-[0.68px] uppercase"></h5>
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
<style lang="scss">
.menu{
  .clip__text::before {
  content:"";
  width: 307px;
  height: 35px;
  position:absolute;
  z-index:-1;
  top:0;
  left:0;
  right:0;
  bottom:0;
  clip-path: polygon(100% 0%, 95% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
  background-color: orangered;
}
.clip__text::after{
  content:"";
  width: 307px;
  height: 35px;
  position:absolute;
  z-index:-2;
  top:0;
  left:0;
  right:0;
  bottom:0;
clip-path: polygon(100% 0%, 95% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
  background-color: red;
}
h5{
    span{
        color: #F00;
    }
}
}

</style>
  