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
        <div v-for="(subitem, index) in now" :key="index" class="">
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
            <span
              v-html="subitem.label"
              class="font-sans text-[20px] font-normal"
            >
            </span>
            <div class="flex items-center justify-between mt-[30px]">
              <span
                class="text-[34px] font-signs tracking-[-0.68px] font-normal text-[#F00]"
                >${{ subitem.price }}</span
              >
              <NuxtLink class="sublink" :to="subitem.button.url">{{
                subitem.button.text
              }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <section v-if="hasPagination">
        <ul class="list-none">
            <div class="pagination flex justify-end gap-[8px] mb-[90px]">
                <li v-for="index in numberOfPage" :key="index" class=""> 
                    <NuxtLink class="font-sans text-[12px] leading-[12px] -tracking-[0.12px] inline-block py-[8px] px-[10px] border border-effect">{{ index }}</NuxtLink>
                </li>
            </div>
        </ul>
        </section>
    </div>
  </section>
</template>
<!-- :class="newProduct[0].category.toLowerCase() == route.params.slug ? 'border__item__text' : ''" -->
<script lang="ts" setup>
//   interface Props {
//     dataBinding: any;
//     block: any;
//   }

//   defineProps<Props>();
//   const route = useRoute();
//   console.log(route);
//   const checkRouter = route.params.slug.slice(-1).toString();
const route = useRoute();
const block = await queryContent('/')
.where({ _path: '/menu/detail' })
.findOne();

const pageSize = 3;
let newblock = block.content_blocks[0];
const newProduct = newblock.menu.filter((item: any) => {
  if (item.category.toLowerCase().trim() === route.params.category) {
    return item.product;
  }
});
// const paginData = await queryContent('/').where({_path: '/menu/detail'}).
const totalProduct = newProduct[0].product;
const now = computed(() => totalProduct);

const numberOfPage = Math.ceil(totalProduct.length / pageSize);

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
