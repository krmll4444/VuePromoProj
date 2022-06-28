<template >
<v-app color="grey darken-2">
  <v-card class="hidden-sm-and-down">
    <v-card-title>
      <span class="text-h5 font-weight-light">Наші контакти:</span>
    </v-card-title>
    <v-card-actions>
      <v-list-item color="grey darken-2" onclick="location.href='https://www.instagram.com/budnikov.mebli/'">
        <v-list-item-avatar>
          <v-icon>mdi-instagram</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>@budnikov.mebli</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item color="grey darken-2">
        <v-list-item-avatar>
          <v-icon>mdi-phone</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>+380(66) 567 84 05</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item color="grey darken-2">
        <v-list-item-avatar>
          <v-icon>mdi-message</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>+380(66) 567 84 05</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card> 
  <v-card class="hidden-md-and-up">
    <v-card-title>
      <span class="text-h5 font-weight-light">Наші контакти:</span>
    </v-card-title>
    <v-card-text>
          <v-icon>mdi-instagram</v-icon>
          <v-text onclick="location.href='https://www.instagram.com/budnikov.mebli/'">@budnikov.mebli</v-text>
          <v-spacer></v-spacer>
          <v-icon>mdi-phone</v-icon>
          <v-text>+380(66) 567 84 05</v-text>
          <v-spacer></v-spacer>
          <v-icon>mdi-message</v-icon>
          <v-text>+380(66) 567 84 05</v-text>         
  </v-card-text>
  </v-card>  
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1569.1306106291693!2d22.288609462167543!3d48.59160621685823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef6060a6b53abfee!2zNDjCsDM1JzI5LjUiTiAyMsKwMTcnMTkuMyJF!5e0!3m2!1suk!2sua!4v1651775873286!5m2!1suk!2sua"
 height="600"
 style="border:0;" 
 allowfullscreen="true" 
 loading="lazy" 
 referrerpolicy="no-referrer-when-downgrade">
 </iframe>
</v-app>
</template>

<script>
/* eslint-disable */


export default {
  name:'Map',
};
</script>

<style>
</style>