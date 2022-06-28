<template>
<v-container>
  <v-row>
          <v-col v-for="item in getGallery" :key="item._id" class="d-flex child-flex" cols="4">
            <v-img :src="item.itemURL"></v-img>
          </v-col>
        </v-row>
</v-container>
</template>
<script>

/* eslint-disable */
import {mapActions,mapGetters} from "vuex";

  export default {
    name: 'Gallery',
    methods:{
      ...mapActions(['getPicturesFromAPI']),
    },
    created () {
    this.getPicturesFromAPI()
    },
    computed: {
      ...mapGetters(['getGallery'])
    }
}  

</script>
