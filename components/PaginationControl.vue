<template>
  <section class="">
    <ul class="list-none">
      <div class="pagination flex justify-end gap-[8px] mb-[90px]">
        <li v-if="hasPrePage" class="">
          <NuxtLink
            :to="changeUrl(pageNumber)"
            class="font-sans text-[12px] leading-[12px] -tracking-[0.12px] inline-block py-[8px] px-[10px] border border-effect"
            >Previous</NuxtLink
          >
        </li>
        <li v-for="index in numberOfPage" :key="index" class="" >
          <NuxtLink :to="`/${urlPrefix}/page/${index}`"
            class="font-sans text-[12px] leading-[12px] -tracking-[0.12px] inline-block py-[8px] px-[10px] border border-effect"
            >{{ index }}</NuxtLink
          >
        </li>
        <li class="btnNext" v-if="hasNextPage">
          <NuxtLink :to="`/${urlPrefix}/page/${pageNumber + 1}`"
            class="font-sans text-[12px] leading-[12px] -tracking-[0.12px] inline-block py-[8px] px-[10px] border border-effect"
            >Next</NuxtLink
          >
        </li>
      </div>
    </ul>
  </section>
</template>
<script lang="ts" setup>

interface Props {
  numberOfPage: number;
  urlPrefix: string;
  pageNumber: number;
}

const props = defineProps<Props>()

const { pageNumber, numberOfPage, urlPrefix } = props;
console.log(pageNumber, numberOfPage, urlPrefix );
const hasNextPage = (pageNumber + 1 <= numberOfPage);
const hasPrePage = (pageNumber - 1 >= 1);
console.log(pageNumber)

const changeUrl = (index: number) => {
  let newUrlPrefix = '';
  if(index === 2){
    newUrlPrefix = `/${urlPrefix}`
  }else{
    newUrlPrefix = `/${urlPrefix}/${index}`
  }
  return newUrlPrefix;
}
</script>
<style lang="scss" scoped></style>
