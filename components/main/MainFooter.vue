<template>
  <footer :class="route.fullPath !== '/login' && route.fullPath !== '/register' ? 'pb-[195px]' : ''"  class="footer bg-[#F2F2F2]  relative">
    <div v-if="route.fullPath !== '/login' && route.fullPath !== '/register'" class="min-h-[599px]  object-cover bg-black" :style="{ background: `url(${footerData.background}) center no-repeat` }">

    </div>
    <div v-if="route.fullPath !== '/login' && route.fullPath !== '/register' " class="">
      <div class="container bg-main p-0 -mt-[300px]">
        <div class="flex border__bg ">
          <div class="pt-[90px] pb-[40px] px-[40px] border__bg-left">
            <div class="flex items-center justify-center gap-[30px]">
              <h3 v-html="footerData.label" class="text__h3"></h3>
              <img :src="footerData.star" alt="" class="">
            </div>
            <div class="flex flex-col gap-[24px]">
            <div class="flex flex-col justify-start items-start gap-[12px]">
              <div class="w-full border-b-[1px] border-b-[#FCC309]">
                <img :src="footerData.address.icon" alt="" class="w-[24px] h-[24px] object-cover">
              </div>
              <span class="text-[24px] -spacing-[0.48px]">
                {{ footerData.address.label }}
              </span>
            </div>
            <div class="flex flex-col justify-start items-start gap-[12px]">
              <div class="w-full border-b-[1px] border-b-[#FCC309]">
                <img :src="footerData.phone.icon" alt="" class="w-[24px] h-[24px] object-cover">
              </div>
              <span class="text-[24px] -spacing-[0.48px]">
                {{ footerData.phone.label }}
              </span>
            </div>
            <div class="flex flex-col justify-start items-start gap-[12px]">
              <div class="w-full border-b-[1px] border-b-[#FCC309]">
                <img :src="footerData.time.icon" alt="" class="w-[24px] h-[24px] object-cover">
              </div>
              <span class="text-[24px] -spacing-[0.48px]" v-html="footerData.time.label">
              
              </span>
            </div>
          </div>
          </div>
          <div class="pt-[90px] pb-[40px] px-[40px]">
            <div class="flex items-center justify-start gap-[30px]">
              <h3 v-html="footerData.follow.label" class="text__h3"></h3>
              <img :src="footerData.star" alt="">
            </div>
            <div class="flex flex-col gap-[24px] mb-[40px]">
              <div class="flex gap-[24px]">
                  <div v-for="(item, index) in footerData.follow.social" :key="index" class="">
                    <img :src="item.icon" alt="" class="w-[24px] h-[24px]">
                  </div>
              </div>
          </div>
          <iframe :src="footerData.map" width="414px" height="300px" frameborder="0"></iframe>
          </div>
      </div>
      
      </div>
    </div>
    <div class="bg-secondary py-[40px] absolute bottom-0 w-full">
      <div class="container flex justify-between">
        <div>
          <span class="text-[16px] font-sans leading-[26px] -tracking-[-0.16px] font-light">{{ footerData.term.service }}</span>
        </div>
        <div>
          <span class="text-[16px] font-sans leading-[26px] -tracking-[-0.16px] font-light">{{ footerData.term.design }}</span>
        </div>
      </div>
    </div>
  </footer>
  
</template>

<script setup lang="ts">
import footerData from "@/data/footer.json";

const route = useRoute();
console.log(route)
</script>

<style scoped lang="scss">
.footer{
  .text__h3{
    span{
      text-transform: capitalize !important;
    }
}
}
.border__bg{
  border: 1px solid var(--color-anchor, --color-secondary);
  &-left{
    border-right: 1px solid var(--color-anchor, --color-secondary);
  }

}
</style>
