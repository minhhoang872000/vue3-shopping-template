<template>
  <section
    :id="block.id"
    :data-cms-bind="dataBinding"
    class="pt-[165px] pb-[90px]"
  >
    <div class="container relative">
      <img
        :src="block.deco"
        alt=""
        class="absolute right-0 z-10 -top-[170px]"
      />
      <div
        class="relative min-h-[464px] w-full rounded-tr-[90px] rounded-bl-[90px] mb-[120px]"
        :style="{ background: `url(${block.bg_image}) center no-repeat` }"
      >
        <img
          :src="block.image_coffee1"
          alt=""
          class="absolute -top-[80px] rounded-tr-[90px] rounded-bl-[90px]"
        />
        <img
          :src="block.image_coffee2"
          alt=""
          class="absolute right-[253px] -bottom-[80px] rounded-tr-[90px] rounded-bl-[90px]"
        />
      </div>
      <h3 class="text-[#F00] mb-[40px]" v-html="block.subtitle"></h3>
      <p class="textstyle text-shadow border-2 border-secondary mb-[24px]">
        {{ block.content }}
      </p>
      <NuxtLink :to="block.button.url" class="sublink">{{
        block.button.text
      }}</NuxtLink>
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
