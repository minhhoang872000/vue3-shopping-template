<template>
  <SectionBlog
    :title="pageData.title"
    :description="pageData.description"
    :items="posts as any[]"
    :items-count="postsCount"
    :current-page="currentPage"
    :page-size="pageSize"
    @pagination-change="handleChangePagination"
  />
</template>

<script lang="ts" setup>
import { DEFAULT_PAGE_SIZE } from '@/constant';

const route = useRoute();
const currentPage = +route.params.page;
const currentSlug = route.params.slug;
if (isNaN(currentPage)) {
  navigateTo(`/tags/${currentSlug}`)
}

const pageData = await queryContent('blog').where({ _path: '/blog' }).findOne();
const pageSize = pageData.pagination.size || DEFAULT_PAGE_SIZE;

const postQuery = {
  _path: { $ne: '/blog' },
  tags: { $in: [currentSlug].flat() }
}
const postsCount = await queryContent('blog')
  .where(postQuery)
  .count();

const pageCount = Math.ceil(postsCount / pageSize);
if (currentPage && (currentPage <= 1 || pageCount === 1)) {
  navigateTo(`/tags/${currentSlug}`)
}
if (currentPage > pageCount) {
  navigateTo(`/tags/${currentSlug}/page/${pageCount}`)
}
const skipAmount = (currentPage - 1) * pageSize;
const posts = await queryContent('blog')
  .where(postQuery)
  .only(['title', 'date', 'thumbImg', 'tags', '_path'])
  .sort({ createdAt: 1 })
  .skip(skipAmount)
  .limit(pageSize)
  .find();

const handleChangePagination = (page: number) => {
  navigateTo(`/tags/${currentSlug}/page/${page}`)
}
</script>
