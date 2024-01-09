<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="bg-[#FFFEF6] pb-[90px]">
    <div class="container">
      <div class="flex items-center justify-center gap-[24px] mb-[60px]">
        <div
          v-for="(item, index) in block.slider"
          :key="index"
          class="relative"
        >
          <img :src="item.image" alt="" />
          <span
            class="font-signs text-[34px] bg-[#FFFAE099] rounded-[90px] absolute bottom-[53px] p-[24px] left-1/2 -translate-x-1/2"
            >{{ item.label }}</span
          >
        </div>
      </div>
      <div class="flex justify-center">
        <NuxtLink :to="block.button.url" class="sublink">{{
          block.button.text
        }}</NuxtLink>
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
