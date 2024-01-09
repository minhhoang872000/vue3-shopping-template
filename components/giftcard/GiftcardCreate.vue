<template>
  <section
    :id="block.id"
    :data-cms-bind="dataBinding"
    class="pt-[108px] pb-[90px]"
  >
    <div class="container flex items-center justify-center flex-col">
      <div class="flex items-center justify-center gap-[7px] mb-[60px]">
        <h2 v-html="block.title" class="text-center"></h2>
        <img :src="block.icon_title" alt="" class="-mt-[20px]" />
      </div>
      <div
        class="flex items-center justify-center flex-col max-w-[1045px] w-full px-[50px]"
      >
        <div class="mb-[60px] aspect-[945/640] w-full">
          <img :src="block.images" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="w-full">
          <form action="#" class="w-full">
            <span
              class="text-[24px] inline-block font-signs -tracking-[0.48px] font-normal mb-[34px]"
            >
              Gift amount
            </span>
            <div class="relative mb-[34px]">
              
              <li
                for=""
                class="text-[#989898] absolute bg-main px-[10px] -top-[13px] left-[45px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                >{{ block.name_label }}</li
              >
              <select
                class="w-full pl-[30px] py-[8px] rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                name="cars"
                id="cars"
              >
                <option value="" selected disabled hidden>
                  Select gift amount
                </option>
                <option value="100">100$</option>
                <option value="200">200$</option>
                <option value="300">300$</option>
                <option value="400">400$</option>
              </select>
            </div>
            <span
              class="text-[24px] inline-block font-signs -tracking-[0.48px] font-normal mb-[34px]"
            >
              To
            </span>
            <div class="relative mb-[34px]">
              <li
                for=""
                class="text-[#989898] absolute bg-main px-[10px] -top-[13px] left-[45px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                >{{ block.name_label }}</li
              >
              <input
                type="text"
                class="w-full px-[30px] py-[8px] rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                :placeholder="block.name_placeholder"
              />
            </div>
            <div class="relative mb-[34px]">
              <li
                for=""
                class="text-[#989898] absolute bg-main px-[10px] -top-[13px] left-[45px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                >{{ block.recipient_placeholder }}</li
              >
              <input
                type="text"
                class="w-full px-[30px] py-[8px] rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                :placeholder="block.recipient_email"
              />
            </div>
            <span
              class="text-[24px] inline-block font-signs -tracking-[0.48px] font-normal mb-[34px]"
            >
              Message
            </span>
            <div class="relative mb-[34px]">
              <span
                for=""
                class="text-[#989898] absolute bg-main px-[10px] -top-[13px] left-[45px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                >{{ block.message_label }}</span
              >
              <textarea  class="w-full px-[30px] py-[8px] h-[105px] rounded-[30px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                :placeholder="block.message_placeholder">
              </textarea>
            </div>
            <span
              class="text-[24px] inline-block font-signs -tracking-[0.48px] font-normal mb-[34px]"
            >
              Form
            </span>
            <div class="relative mb-[34px]">
              <li
                for=""
                class="text-[#989898] absolute bg-main px-[10px] -top-[13px] left-[45px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                >{{ block.sender_label }}</li
              >
              <input
                type="text"
                class="w-full px-[30px] py-[8px] rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                :placeholder="block.sender_placehodler"
              />
            </div>
            <div class="relative mb-[60px]">
              <li
                for=""
                class="text-[#989898] absolute bg-main px-[10px] -top-[13px] left-[45px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                >{{ block.email_label }}</li
              >
              <input
                type="text"
                class="w-full px-[30px] py-[8px] rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                :placeholder="block.email_placeholder"
              />
            </div>
            <div class="flex items-center justify-center">
              <button class="shadow-xl border-2 border-[#FFE86D] w-[467px] py-[24px] text-main bg-[#F00] rounded-[30px] text-[18px] font-bold uppercase font-sans">{{ block.button.text }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '#ui/types';
interface Props {
  dataBinding: any;
  block: any;
}

const state = reactive({
  email: undefined,
  password: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: 'email', message: 'Required' });
  if (!state.password) errors.push({ path: 'password', message: 'Required' });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}

defineProps<Props>();
</script>
<style lang="scss" scoped></style>
