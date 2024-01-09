<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="">
    <div class="grid grid-cols-[1fr_1fr] ">
      <div :style="{ background: block.bg_color_right }" class="py-[40px]">
        <div class="mr-[20px] flex justify-end relative">
          <div class="self-center absolute right-[306px]">
            <img :src="block.deco_image" alt="" class="max-w-[245px]" />
          </div>
          <div class="">
            <img :src="block.hero_bg1" alt="" class="max-w-[412px]"/>
          </div>
        </div>
      </div>
      <div :style="{ background: block.bg_color_left }" class="py-[40px]">
        <div class="flex">
          <div>
            <img :src="block.hero_bg2" alt="" class="max-w-[269px] mr-[24px]"/>
          </div>
          <div>
            <img :src="block.hero_bg3" alt="" class="max-w-[302px]" />
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
