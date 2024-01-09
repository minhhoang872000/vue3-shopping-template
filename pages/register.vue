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
                  >{{ pageData.register_name_label }}</span
                >
                <input
                  type="text"
                  class="px-[30px] py-[8px] w-full rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                  :placeholder="pageData.register_name_placeholder"
                />
              </div>
              <div class="relative mb-[34px]">
                <span
                  for=""
                  class="absolute bg-main px-[20px] -top-[13px] left-[20px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                  >{{ pageData.register_email_label }}</span
                >
                <input
                  type="email"
                  class="pl-[30px] pr-[60px] py-[8px] w-full rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                  :placeholder="pageData.register_email_placeholder"
                />
              </div>
              <div class="relative mb-[34px]">
                <span
                  for=""
                  class="absolute bg-main px-[20px] -top-[13px] left-[20px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                  >{{ pageData.register_password_label }}</span
                >
                <input
                  type="password"
                  class="pl-[30px] pr-[60px] py-[8px] w-full rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                  :placeholder="pageData.register_password_placeholder"
                />
                <img :src="pageData.hidden" alt="" class="absolute top-[9px] right-[30px]">
              </div>
              <div class="relative mb-[34px]">
                <span
                  for=""
                  class="absolute bg-main px-[20px] -top-[13px] left-[20px] text-[12px] leading-[26px] tracking-[-0.12px] font-light font-sans"
                  >{{ pageData.register_confirm_label }}</span
                >
                <input
                  type="password"
                  class="pl-[30px] pr-[60px] py-[8px] w-full rounded-[60px] border border-effect outline-effect font-sans text-effect placeholder:text-[#A7A6A6] text-[16px] bg-transparent"
                  :placeholder="pageData.register_confirm_placeholder"
                />
                <img :src="pageData.hidden" alt="" class="absolute top-[9px] right-[30px]">
              </div>
              <div class="flex justify-center">
              <button
                class="border-2 border-[#FFE86D] shadow-xl py-[24px] w-[263px] rounded-[60px] text-[18px] font-sans font-bold uppercase text-main bg-[#F00]"
              >
                {{ pageData.button_signup.link }}
              </button>
            </div>
            </form>
          </div>
      </div>
    </section>
  </template>
  <script lang="ts" setup>
  definePageMeta({ layout: 'default' });
  const pageData = await queryContent('/').where({ _path: '/register' }).findOne();
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
  