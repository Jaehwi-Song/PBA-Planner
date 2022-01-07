<template>
  <v-app>
    <v-card>
      <v-app-bar app dark color="pink lighten-4" fixed>
        <v-btn icon v-if="$route.name !== 'home_page'" @click="$router.go(-1)">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title><b>루피가 되고싶어</b>
        </v-toolbar-title>
      </v-app-bar>
      <v-content>
        <router-view />
      </v-content>
    </v-card>
  </v-app>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
  .sTitle{
    text-align: center;
  }
  #app{
    font-family: 'Hi Melody', cursive;
  }
</style>
