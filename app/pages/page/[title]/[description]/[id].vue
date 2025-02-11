<template>
  <pageTableItem />
</template>

<script setup lang="ts">
import { getPageById } from '~/service';

const route = useRoute()

onMounted(() => {
  getPageItem()
})

const pagesStore = usePagesStore();

async function getPageItem() {
  const response = await getPageById(route.params.id as string)
  pagesStore.pageItem = response
  
}

useSeoMeta({
  title: route.params?.title as string ,
  description: route.params?.description as string,
})
</script>