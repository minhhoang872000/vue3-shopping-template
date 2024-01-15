<template>
  <section>
    <div class="container">
      <div class="flex items-center justify-center">
        <h2 class="">{{ newblock.title }}</h2>
        <img :src="newblock.deco" alt="" class="-mt-[20px]" />
      </div>
      <span
        class="text-[34px] mb-[40px] tracking-[-0.68px] block text-center"
        >{{ block.subtitle }}</span
      >
      <div class="flex items-stretch justify-center gap-[24px] mb-[40px]">
        <NuxtLink
          v-for="(item, index) in newblock.menu"
          :to="item.to"
          :key="index"
          class="border__item bg-main rounded-[90px] border-2 border-[#9B9B9B] p-[12px] pb-[60px] flex items-center flex-col gap-[16px]"
        >
          <div class="mb-[16px] w-[110px] aspect-[1/1]">
            <img
              :src="item.image"
              :alt="item.image_alt"
              class="w-full h-full rounded-full"
            />
          </div>
          <span
            class="text-[18px] font-sans uppercase font-bold max-w-[109px] text-center"
          >
            {{ item.label }}
          </span>
        </NuxtLink>
      </div>
      <div
        v-if="now"
        class="grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-[30px] mb-[60px]"
      >
        <CateItem v-for="(subitem, index) in now" :key="index" :subitem="subitem" class=""/>
      </div>
      <template v-if="hasPagination">
        <!-- <ul class="list-none">
            <div class="pagination flex justify-end gap-[8px] mb-[90px]">
                <li class="font-sans text-[12px] leading-[12px] -tracking-[0.12px] inline-block py-[8px] px-[10px] border border-effect">Previous</li>
                <li v-for="index in numberOfPage" :key="index" class=""> 
                    <NuxtLink class="font-sans text-[12px] leading-[12px] -tracking-[0.12px] inline-block py-[8px] px-[10px] border border-effect">{{ index }}</NuxtLink>
                </li>
                <li  class="btnNext "><NuxtLink @click="handleNextButton" class="font-sans text-[12px] leading-[12px] -tracking-[0.12px] inline-block py-[8px] px-[10px] border border-effect">Next</NuxtLink></li>
            </div>
        </ul> -->
          <PaginationControl :page-number="pageNumber"
          :number-of-page="numberOfPage"
          :url-prefix="urlPrefix"
          />
        </template>
    </div>
  </section>
</template>
<!-- :class="newProduct[0].category.toLowerCase() == route.params.slug ? 'border__item__text' : ''" -->
<script lang="ts" setup>
const route = useRoute();

const block = await queryContent('/')
.where({ _path: '/menu/detail' })
.findOne();

const urlPrefix = route.fullPath.substring(1);
const pageSize = block.content_blocks[0].pagination.size;
const pageNumber = 1;
let start = 0;
let end = pageSize;
const itemArr : any = reactive([]);
let newblock = block.content_blocks[0];
const newProduct = newblock.menu.filter((item: any) => {
  if (item.category.toLowerCase().trim() === route.params.category) {
    return item.product;
  }
});

// const paginData = await queryContent('/').where({_path: '/menu/detail'}).

const totalProduct = newProduct[0].product;
console.log(totalProduct);
const changeSlug = totalProduct.map((item: any, index: number) => {
  if(index >= start && index < end){
    itemArr.push( {
      ...item,
      slug: route.fullPath + "/" + item.title.replaceAll(' ','-').concat("-","id", index + 1).toLowerCase()
    })
  }
})

const numberOfPage: number = Math.ceil(totalProduct.length / pageSize);

const now = computed(() => itemArr);
// const handleNextButton = () => {
//   pageNumber++;
//   if(pageNumber > numberOfPage){
//     pageNumber = numberOfPage
//   }
//   start = (pageNumber - 1) * pageSize;
//   end = pageNumber + pageSize;
//   changeSlug();
// }

const hasPagination = numberOfPage > 1;


// const currentPage = 1;

</script>
<style lang="scss" scoped>
.border__item {
  &:hover {
    border: 2px solid var(--color-anchor, --color-secondary);
    color: #f00;
  }
  &:active {
    border: 2px solid var(--color-anchor, --color-secondary);
    color: #f00;
  }
}
.border__item__text {
  border: 2px solid var(--color-anchor, --color-secondary);
  color: #f00;
}
.active{
    background: #348D6D;
    color: var(--color-main);
}
</style>
