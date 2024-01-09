<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="py-[90px]">
    <div class="container">
      <div class="flex items-center gap-[14px] justify-center mb-[60px]">
        <h2 class="text-center">{{ block.title }}</h2>
        <img :src="block.icon_title" class="-mt-[20px]" alt="" />
      </div>
      <div class="grid lg:grid-cols-2 grid-flow-row-dense gap-[30px]">
        <div v-for="(item, index) in block.review" :key="index" class="flex gap-[40px] items-center p-[40px] rounded-[30px] background">
            <img :src="item.image" :alt="item.image_alt">
            <div class="">
                <p class="font-sans mb-[8px]">{{ item.content }}</p>
                <span class="text-[18px]">{{ item.author }}</span>
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
.background{
    background: linear-gradient(90deg, #FFFAE0 0.17%, #DDE9E4 99.82%);
}
</style>
