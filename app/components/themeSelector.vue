<template>
    <details class="dropdown" :class="{'dropdown-top': props.footerPosition}">
        <summary class="btn m-1">Theme</summary>
        <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li v-for="(item,index) in themeStore.themesList" :key="index">
              <a @click="themeStore.toggleTheme(item)">
                {{ item }}
              </a>
          </li>
        </ul>
      </details>
</template>
<script lang="ts" setup>
const themeStore = useThemeStore();

interface Props {
  footerPosition?: boolean 
}

const props = defineProps<Props>()
</script>