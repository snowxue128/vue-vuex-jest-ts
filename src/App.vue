<template>
  <div id="app">
    <h1>Tour of Heroes</h1>
    <div id="nav">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/heroes">Heroes</router-link>
    </div>
    <router-view />
    <HeroesSearch />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeroesSearch from "@/components/Message.vue";
@Component({
  components: {
    HeroesSearch,
  },
})
export default class App extends Vue {}
</script>


<style>
h1 {
  color: #0f6086;
}
#nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
#nav a:visited,
a:link {
  color: #334953;
}
#nav a:hover {
  color: #039be5;
  background-color: #cfd8dc;
}
#nav a.active {
  color: #039be5;
}
</style>
