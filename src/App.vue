<template>
  <main class="w-full h-screen bg-slate-800">
    <NavBar v-if="applications !==[]" class="top-0" :applications="applications" @selected="selectHandler"/>
    <router-view/>
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Wrapper from "./components/wrapper.vue";
export default {
  name: 'App',
  components: {Wrapper, NavBar},
  inject: ['configurationRepository'],
  data: () =>({
    selectedApplication: null,
    applications: [],
  }),
  methods:{
    selectHandler(app){
      this.selectedApplication = app;
    }
  },
  async created() {
    const { data } = await this.configurationRepository.fetchOne('dev');

    for (const [key, value] of Object.entries(data)) {
      this.applications.push({name: key,version: value})

      const scriptName = `${value}/${key}.min.js`;
      let scriptEle = document.createElement('script');

      scriptEle.setAttribute('src', `/scripts/${scriptName}`);
      scriptEle.setAttribute('type', 'text/javascript');
      document.body.appendChild(scriptEle);
    }

    this.selectedApplication = this.applications[0];
  },
}
</script>

<style scoped>

</style>
