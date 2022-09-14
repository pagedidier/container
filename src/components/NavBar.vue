<template>
<ul class="left-0 right-0 bottom-0 flex bg-gray-500 flex-row-reverse">
  <router-link tag="li" class="tab" v-for="application in applications" :key="application.name" @click="select(application)" :to="`/${application.name}`">
    {{application.name}}
  </router-link>
</ul>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    applications: { type: Array, required: true}
  },
  methods: {
    select(app){
      this.$emit('selected',app);
    }
  }
}
</script>

<style scoped>
.tab{
  @apply px-5 py-3 border-l;
}
.tab:hover{
  @apply bg-gray-600 cursor-pointer;
}
</style>
