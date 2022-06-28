<template>

<v-app-bar dark>
      <v-toolbar-title>Budnikov</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
      <v-btn v-for="(item,i) in menuItems" :key="`menuitems${i}`" :to="item.route"><v-icon v-html="item.icon"></v-icon></v-btn>
      </v-toolbar-items>
</v-app-bar>

</template>

<script>
/* eslint-disable */
export default {
    name:'Bar',
    data(){
      return{
        }
    },
    computed:{
      menuItems(){
        return[
          {
            icon:'mdi-home',
            title:'Головна',
            route:'/'
          },          
          {
            title:'Gallery',
            icon:'mdi-image',
            route:'/gallery',
          },
          {
            title:'Ми на карті',            
            icon:'mdi-crosshairs-gps',
            route:'/map',
          },
        ]
      }
    }
}
</script>

<style>

</style>