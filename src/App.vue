<template>
  <v-app>
    <bar></bar>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
/* eslint-disable */
import Bar from '@/components/Bar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Bar,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
