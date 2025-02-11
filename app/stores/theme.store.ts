import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref('light')
  const themesList = ref(['light', 'dark'])
  
  function toggleTheme(newTheme: string) {
    if(currentTheme.value !== newTheme) {
      currentTheme.value = newTheme
    }
  }
  
  return { currentTheme,themesList, toggleTheme }
})