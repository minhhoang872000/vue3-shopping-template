<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="pb-[110px]">
    <div class="container">
      <div class="flex items-center justify-center mb-[60px]">
        <h2 class="">{{ block.title }}</h2>
        <img :src="block.icon_title" alt="" class="-mt-[20px]" />
      </div>
      <div class="grid grid-cols-[1fr_552px]">
        <div class="">
          <div
            v-for="(item, index) in block.cart"
            :key="index"
            class="flex [&:not(:last-child)]:mb-[60px] gap-[40px]"
          >
            <div class="max-w-[195px]">
              <img
                :src="item.image"
                alt=""
                class="rounded-[26px] w-full h-full object-cover"
              />
            </div>
            <div class="">
              <p
                class="text-[20px] mb-[30px]  leading-[30px] tracking-[-0.4px] font-medium font-sans"
                v-html="item.label"
              ></p>
              <span
                class="text-[34px] font-signs font-medium tracking-[-0.6px] text-[#F00]"
                >${{ item.price }}</span
              >
              <div class="flex items-center gap-[46px] mt-[30px]">
                <button class="w-[54px] h-[54px] rounded-[30px] shadow-xl flex justify-center items-center"><img :src="block.subtract_icon" alt=""></button>
                <span class=" py-[12px] px-[40px] rounded-[30px] border-2 shadow-xl border-[#FFE86D]">1</span>
                <button class="w-[54px] h-[54px] rounded-[30px] shadow-xl flex justify-center items-center"><img :src="block.plus_icon" alt=""></button>
              </div>
            </div>
            <!-- text-[34px] font-signs tracking-[-0.68px] font-normal text-[#F00] -->
          </div>
        </div>
        <div
          class="self-baseline pt-[60px] px-[40px] pb-[140px] rounded-[60px] border border-[#AFD4C2] shadow-xl"
        >
          <div class="flex items-center gap-[16px]">
            <img :src="block.giftcart" alt="" />
            <span
              class="text-[24px] font-signs font-normal tracking-[-0.4px] text-[#348D6D]"
              >{{ block.label }}</span
            >
          </div>
          <div
            class="flex items-center relative py-[30px] border-b-2 border-[#348D6D]"
          >
            <UInput
              class="w-full py-[24px] pr-[180px] pl-[60px] font-sans text-[16px] text-[#8E8E8E] leading-[24px] rounded-[60px] border border-[#348D6D]"
              color="white"
              variant="none"
              :placeholder="block.voucher_placeholder"
              model-value=""
            />
            <NuxtLink
              class="absolute right-[60px] sublink"
              :to="block.button.url"
              >{{ block.button.text }}</NuxtLink
            >
          </div>
          <div class="mt-[60px]">
            <div class="flex items-center justify-between mb-[24px]">
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >{{ block.subtotal_label }}</span
              >
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >{{ block.subtotal }}</span
              >
            </div>
            <div
              class="flex items-center justify-between pb-[40px] border-b-2 border-dotted border-[#348D6D]"
            >
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >{{ block.shipping_label }}</span
              >
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >{{ block.shipping }}</span
              >
            </div>
            <div class="flex items-center justify-between mt-[40px] mb-[30px]">
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >{{ block.total_label }}</span
              >
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >{{ block.total }}</span
              >
            </div>
            <NuxtLink
              :to="block.button_checkout.url"
              class="inline-block w-full text-center rounded-[30px] text-white shadow-xl border-2 border-[#FFE86D] p-[24px] bg-[#f02] text-[18px] font-bold font-sans uppercase"
            >
              {{ block.button_checkout.text }}
            </NuxtLink>
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
<style lang="scss" scoped></style>
