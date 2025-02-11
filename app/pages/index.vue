<template>
  <div class="container mx-auto">
    <pageTable />
  </div>
</template>

<script lang="ts" setup>
import { fetchPages } from '~/service';

const pagesStore = usePagesStore();

  onMounted(() => {
    getPages()
  })

  async function getPages() {
      const response = await fetchPages()
      pagesStore.pages = response
    }
</script>
<style lang="scss" scoped></style>