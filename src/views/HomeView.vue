<template>
  <component v-if="applicationName" :is="applicationName"/>
</template>

<script>
export default {
  name: 'HomeView',
  computed:{
    applicationName(){
      return this.$route.params.app;
    }
  }

}

</script>

<style>

</style>
