<template>
  <article class="">
    <div>
      <img
        :src="subitem.image"
        :alt="subitem.image_alt"
        class="w-full h-full"
      />
    </div>
    <div
      class="pt-[50px] pb-[60px] pl-[40px] pr-[35px] rounded-b-[26px] bg-[#F2F2F2]"
    >
      <span v-html="subitem.label" class="font-sans text-[20px] font-normal">
      </span>
      <div class="flex items-center justify-between mt-[30px]">
        <span
          class="text-[34px] font-signs tracking-[-0.68px] font-normal text-[#F00]"
          >${{ subitem.price }}</span
        >
        <NuxtLink class="sublink" :to="subitem.slug">{{
          subitem.button.text
        }}</NuxtLink>
      </div>
    </div>
  </article>
</template>
<script lang="ts" setup>
interface Props {
  subitem: any
}

defineProps<Props>()
</script>
<style lang="scss" scoped></style>
