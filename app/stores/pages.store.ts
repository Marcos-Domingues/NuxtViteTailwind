import { defineStore } from 'pinia'
import type { PageModel, PageItemModel } from '~/models'


export const usePagesStore = defineStore('pages', () => {
  const pages = ref<PageModel | undefined>(undefined)
  const pageItem = ref<PageItemModel | undefined>(undefined)
  
  return {
    pages,
    pageItem
  }
  
})