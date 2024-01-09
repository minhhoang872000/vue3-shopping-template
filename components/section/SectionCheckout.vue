<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="pb-[90px] pt-[175px]">
    <div class="container">
      <div class="flex items-center justify-center mb-[27.5px]">
        <h2 class="header__small">{{ block.title }}</h2>
        <img :src="block.icon_title" alt="" class="-mt-[20px]" />
      </div>
      <div class="grid grid-cols-[1fr_552px] bg-[#F3F8F6] rounded-[60px]">
        <div class="pt-[146px] pb-[150px] pl-[90px] pr-[120px]">
          <div class="flex items-center gap-[30px] pb-[30px] mb-[33 px]">
            <img :src="block.person_icon" alt="" />
            <span
              class="text-[24px] font-signs font-normal tracking-[-0.4px] text-[#348D6D]"
              >{{ block.person_info }}</span
            >
          </div>
          <div class="">
            <form action="#">
              <div class="relative mb-[34px]">
                <span
                  for=""
                  class="absolute bg-[#F3F8F6] px-[10px] -top-[13px] left-[20px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                  >{{ block.name_label }}</span
                >
                <input
                  type="text"
                  class="px-[30px] py-[8px] w-[408px] rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                  :placeholder="block.name_placeholder"
                />
              </div>
              <div class="relative mb-[34px]">
                <span
                  for=""
                  class="absolute bg-[#F3F8F6] px-[10px] -top-[13px] left-[20px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                  >{{ block.address_label }}</span
                >
                <input
                  type="text"
                  class="px-[30px] py-[8px] w-[408px] rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                  :placeholder="block.address_placeholder"
                />
              </div>
              <div class="relative mb-[34px]">
                <span
                  for=""
                  class="absolute bg-[#F3F8F6] px-[10px] -top-[13px] left-[20px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                  >{{ block.phone_label }}</span
                >
                <input
                  type="text"
                  class="px-[30px] py-[8px] w-[408px] rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                  :placeholder="block.phone_placeholder"
                />
              </div>
              <div class="relative mb-[34px]">
                <span
                  for=""
                  class="absolute bg-[#F3F8F6] px-[10px] -top-[13px] left-[20px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                  >{{ block.email_label }}</span
                >
                <input
                  type="text"
                  class="px-[30px] py-[8px] w-[408px] rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                  :placeholder="block.email_placeholder"
                />
              </div>
              <div class="flex items-center gap-[25px] pb-[30px] mb-[33 px]">
                <img :src="block.payment_icon" alt="" />
                <span
                  class="text-[24px] font-signs font-normal tracking-[-0.4px] text-[#348D6D]"
                  >{{ block.payment_info }}</span
                >
              </div>
              <div class="relative mb-[34px]">
                <span
                  for=""
                  class="absolute bg-[#F3F8F6] px-[10px] -top-[13px] left-[20px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                  >{{ block.credit_label }}</span
                >
                <input
                  type="text"
                  class="px-[30px] py-[8px] w-[408px] rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                  :placeholder="block.credit_placeholder" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19"
                />
              </div>
              <div class="flex gap-[24px]">
                <div class="relative mb-[34px]">
                  <span
                    for=""
                    class="absolute bg-[#F3F8F6] px-[10px] -top-[13px] left-[20px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                    >{{ block.security_label }}</span
                  >
                  <input
                    type="text"
                    class="px-[30px] py-[8px] w-full rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                    :placeholder="block.security_placeholder"
                  />
                </div>
                <div class="relative mb-[34px]">
                  <span 
                    for=""
                    class="absolute bg-[#F3F8F6] px-[10px] -top-[13px] left-[20px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                    >{{ block.expiration_label }}</span
                  >
                  <input
                    type="text"
                    class="px-[30px] py-[8px] w-full rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                    :placeholder="block.expiration_placeholder"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          class="self-baseline bg-main pt-[60px] px-[40px] pb-[60px] rounded-[60px] border border-[#AFD4C2] shadow-xl"
        >
          <div
            class="flex items-center gap-[16px] border-b-2 border-[#348D6D] pb-[30px] mb-[33 px]"
          >
            <img :src="block.giftcart" alt="" />
            <span
              class="text-[24px] font-signs font-normal tracking-[-0.4px] text-[#348D6D]"
              >{{ block.label }}</span
            >
          </div>
          <div>
            <div
              v-for="(item, index) in block.order"
              :key="index"
              class="first:mt-[30px] flex items-center justify-between mb-[24px]"
            >
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                v-html="item.label"
              ></span>
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >${{ item.price }}</span
              >
            </div>
          </div>
          <div class="mt-[30px]">
            <div
              class="flex items-center justify-between mb-[24px] pt-[33px] border-t-2 border-dashed border-[#348D6D]"
            >
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >{{ block.subtotal_label }}</span
              >
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >${{ block.subtotal }}</span
              >
            </div>
            <div class="flex items-center justify-between pb-[33px]">
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >{{ block.shipping_label }}</span
              >
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >${{ block.delivery_fee }}</span
              >
            </div>
            <div
              class="flex items-center justify-between pb-[33px] border-b-2 border-dotted border-[#348D6D]"
            >
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >{{ block.voucher_label }}</span
              >
              <span
                class="text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                >${{ block.voucher }}</span
              >
            </div>
            <div class="flex items-center justify-between py-[33px]">
              <span
                class="text-[24px] leading-[30px] tracking-[-0.48px] font-medium font-signs"
                >{{ block.total_label }}</span
              >
              <span
                class="text-[24px] leading-[30px] tracking-[-0.48px] font-medium font-signs"
                >${{ block.total_charge }}</span
              >
            </div>
            <div class="flex items-center justify-between pb-[33px]">
              <span
                class="text-[16px] leading-[26px] tracking-[-0.16px] font-light font-sans"
                >{{ block.term }}</span
              >
            </div>

            <NuxtLink
              :to="block.button.url"
              class="inline-block w-full text-center rounded-[30px] text-white shadow-xl border-2 border-[#FFE86D] p-[24px] bg-[#f02] text-[18px] font-bold font-sans uppercase"
            >
              {{ block.button.text }}
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
