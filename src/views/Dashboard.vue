<template>
  <div class="dashboard">
    <h2>Top Heroes</h2>
    <div class="hero-list">
      <router-link
        :to="'/detail/'+item.id"
        v-for="(item ,index)  in topHero"
        :key="index"
        class="hero-name"
      >
        <span @click="heroDetail(item.id)">{{item.name}}</span>
      </router-link>
    </div>
    <heroes-search />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from "vue-property-decorator";
import HeroesSearch from "@/components/HeroesSearch.vue";
import { State, namespace } from "vuex-class";
import { appMutationTypes } from "../store/heroes/mutations/types";

const heroMoudel = namespace("Heroes");

@Component({
  components: {
    HeroesSearch,
  },
})
export default class Dashboard extends Vue {
  @State("topHero", { namespace: "Heroes" })
  private topHero!: [];

  @heroMoudel.Mutation(appMutationTypes.CLEAR_TAG)
  private MutationClearTag!: () => void;

  @heroMoudel.Mutation(appMutationTypes.LOG_MSG)
  private logMsg!: (id: string) => void;

  private heroDetail(id: number): void {
    this.logMsg(`found hero id=${id}`);
  }
  private created() {
    this.logMsg("fetched heroes");
    this.MutationClearTag();
  }
}
</script>

<style scoped>
h2 {
  /* text-align: center; */
  font-weight: normal;
}
.hero-name {
  display: inline-block;
  background-color: #3f525c;
  border-radius: 2px;
  margin: 20px 10px;
  color: #eee;
}
.hero-name:hover {
  background-color: #eee;
  cursor: pointer;
  color: #607d8b;
}

.hero-name span {
  display: inline-block;
  padding: 20px;
  text-align: center;
  height: 100px;
  width: 200px;

  line-height: 100px;
}
</style>
