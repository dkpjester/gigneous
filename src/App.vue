<template>
  <v-app dark>
  <v-navigation-drawer v-model="sideNav"  class="hidden-sm-and-up" temporary>
    <v-list>
      <v-list-tile 
      v-for="item in menuItems" 
      :key="item.title"
      router
      :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
   <v-toolbar>
     <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
     <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Gigneous</router-link>
       </v-toolbar-title>
     <v-spacer></v-spacer>
     <v-toolbar-items class="hidden-xs-only">
       <v-btn 
       flat  
       v-for="item in menuItems" 
       :key="item.title"
       router
       :to="item.link" >
       <v-icon>{{ item.icon }}</v-icon> {{ item.title }}
       </v-btn>
     </v-toolbar-items>
   </v-toolbar>
   <main>
     <router-view></router-view>
   </main>
  </v-app>
</template>

<script>
  import firebase from 'firebase'
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icon: 'supervisor_account', title: 'View Profile', link: '/game'},
          {icon: 'lock_open', title: 'Sign in', link: '/login'}
        ]
      }
    },
    created () {
      firebase.initializeApp({
        apiKey: 'AIzaSyAGJ-Jm4flyFUTC6PlvyG-CbUJLclojNyk',
        authDomain: 'gigneous-27d27.firebaseapp.com',
        databaseURL: 'https://gigneous-27d27.firebaseio.com',
        projectId: 'gigneous-27d27',
        storageBucket: 'gigneous-27d27.appspot.com',
        messagingSenderId: '80017071314'
      })
    }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
