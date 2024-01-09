<template>
  <section
    class="min-h-[960px] pt-[100px] pb-[83px]"
    :style="{
      background: `url(${pageData.background_image}) center no-repeat `,
      backgroundSize: 'cover',
    }"
  >
    <div class="">
        <div
          class="relative mx-auto bg-main max-w-[662px] py-[60px] px-[150px] rounded-[60px]"
        >
        <img :src="pageData.deco" alt="" class="absolute -left-[216px] bottom-[103px] w-[344px] h-[299px]">
          <span
            class="text-center block capitalize text-[#F00] mb-[50px] font-signs text-[60px] font-normal tracking-[-1.8px]"
          >
            {{ pageData.label }}
          </span>
          <form action="#" class="mb-[24px]">
            <div class="relative mb-[34px]">
              <span
                for=""
                class="absolute bg-main px-[20px] -top-[13px] left-[20px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                >{{ pageData.email_label }}</span
              >
              <input
                type="text"
                class="px-[30px] py-[8px] w-full rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                :placeholder="pageData.email_placeholder"
              />
            </div>
            <div class="relative mb-[16px]">
              <span
                for=""
                class="absolute bg-main px-[20px] -top-[13px] left-[20px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                >{{ pageData.password_label }}</span
              >
              <input
                type="password"
                class="pl-[30px] pr-[60px] py-[8px] w-full rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                :placeholder="pageData.password_placeholder"
              />
              <img :src="pageData.hidden" alt="" class="absolute top-[9px] right-[30px]">
            </div>
            <div
              class="flex justify-between mb-[40px] font-sans text-[12px] leading-[26px] tracking-[-0.12px]"
            >
              <div>
                <span>{{ pageData.remember_label }}</span>
              </div>
              <NuxtLink to="">{{ pageData.forgot_label }}</NuxtLink>
            </div>
            <div class="flex justify-center">
              <button
                class="border-2 border-[#FFE86D] shadow-xl py-[24px] w-[263px] rounded-[60px] text-[18px] font-sans font-bold uppercase text-main bg-[#F00]"
              >
                {{ pageData.button_signin.link }}
              </button>
            </div>
          </form>
          <div class="flex items-center justify-center flex-col">
            <span
              class="inline-block text-center text-[18px] font-bold font-sans uppercase"
              >OR</span
            >
            <br />
            <NuxtLink class="flex items-center gap-[16px] mb-[14px]" to="/">
              <img :src="pageData.google_icon" alt="">
              <span class="text-[18px] font-bold font-sans uppercase"
                >Continue with google</span
              >
            </NuxtLink>
            <div
              class="w-[367px] bg-[#D9D9D9] rounded-[60px] flex items-center justify-between"
            >
              <span
                class="py-[10px] inline-block px-[30px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                >Don’t have account?</span
              >
              <NuxtLink
                :to="pageData.button_signup.url"
                class="flex items-center gap-[16px] py-[8px] px-[30px] bg-[#348D6D] rounded-[60px] text-main text-[20px] leading-[30px] tracking-[-0.4px] font-medium font-sans"
                ><span> {{ pageData.button_signup.link }}</span>
                <img :src="pageData.arrow_login" alt="">
              </NuxtLink>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
definePageMeta({ layout: 'default' });
const pageData = await queryContent('/').where({ _path: '/login' }).findOne();
</script>
<style lang="scss"></style>
<!-- title: Home
content_blocks:
  - _block_name: section/login
    id: login
    label: login
    background_image: /images/login.png
    email_label: Email
    email_placeholder: Enter your email
    password_label: Password
    password_placeholder: Enter your email
    remember_label: Remember me
    forgot_label: Forgot password
    button_signin:
      url: /
      link: Sign in
    register_name_label: Full name
    register_name_placeholder: Enter your full name
    register_email_label: Email
    register_email_placeholder: Enter your email
    register_password_label: Password
    register_password_placeholder: Enter your password
    register_confirm_label: Password
    register_confirm_placeholder: Enter your confirm password
    button_signup:
      url: /
      link: Sign up -->
