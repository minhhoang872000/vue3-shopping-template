<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="py-[90px]">
    <div class="container">
      <div class="flex items-center justify-center mb-[40px] gap-[8px]">
        <h2 class="text-center">
          {{ block.title }}
        </h2>
        <img :src="block.icon_title" alt="" class="-mt-[20px]" />
      </div>
      <div class="grid md:grid-cols-[380px_1fr]">
        <div class="">
          <div v-for="(item, index) in block.store" :key="index" class="flex gap-[15px] [&:not(:last-child)]:mb-[40px]">
            <div class="">
              <img :src="item.image" alt="" class="max-w-[183px] h-full object-cover rounded-tr-[30px] rounded-bl-[30px]" />
            </div>
            <div class="flex items-start flex-col gap-[4px]">
              <h5 class="max-w-[182px] font-signs text-[18px] leading-[21.82px] -tracking-[2%]">{{ item.title }}</h5>
              <p class="font-sans font-light text-[16px] leading-[26px] -tracking-[1%]">{{ item.time }}</p>
              <span class="font-sans font-light text-[16px] leading-[26px] -tracking-[1%]">{{ item.date }}</span>
              <NuxtLink :to="item.button.url" class="sublink">{{ item.button.text }}</NuxtLink>
            </div>
          </div>
        </div>
        <iframe
          :src="block.map"
          width="778"
          height="794"
          frameborder="0"
        ></iframe>
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
