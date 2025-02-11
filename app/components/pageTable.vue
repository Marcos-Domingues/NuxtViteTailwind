<template>
  <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Publishing Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in pagesStore.pages" :key="index" @click="handleRedirect(item)" class="bg-base-200 cursor-pointer">
            <td>{{ item.title }}</td>
            <td>{{ handleDateFormat(item.datePublished) }}</td>
         
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script lang="ts" setup>
import type { PageModel } from '~/models';
import { formatDate } from '~/helpers/Date';

const pagesStore = usePagesStore();

function handleRedirect(item: PageModel) {
  window.location.assign(`/page/${item.seo.title}/${item.seo.description}/${item.id}`)
}

function handleDateFormat(date: string) {
  return formatDate(date)
}
</script>