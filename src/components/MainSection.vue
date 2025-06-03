<script setup lang="ts">
import { onMounted, watch } from 'vue'

const props = defineProps<{
  msg: string
  pageTitle?: string
  pageDescription?: string
}>()

/**
 * Lifecycle hooks
 */
onMounted(() => {
  if (props.pageTitle) {
    document.title = props.pageTitle
  }
})

//
watch(
  () => props.pageTitle,
  (newTitle) => {
    if (newTitle) {
      document.title = newTitle
    }
  },
)
</script>

<template>
  <div>{{ msg }}</div>
</template>

<style scoped></style>
