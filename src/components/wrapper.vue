<template>
  <component v-if="application" :is="application.name"/>
</template>

<script>
export default {
  name: "wrapper",
  props: {
    application: { type: Object, required: true}
  },
  data: () =>({
    scriptId: null,
  }),
}
</script>

<style scoped>

</style>
