<template>
  <div class="heroes">
    <h2>My Heroes</h2>
    <label>
      Hero name:
      <input type="text" v-model="heroName" />
    </label>
    <button @click="addNewHero">add</button>
    <ul class="heroes">
      <li v-for="(item,index) in heroesData" :key="index" @click="toDetail(item.id)">
        <router-link :to="'/detail/'+ item.id">
          <span class="badge">{{item.id}}</span>
          <span>{{item.name}}</span>
        </router-link>
        <button class="delete" title="delete hero" @click="removeHero(index)">x</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { State, Mutation, namespace } from "vuex-class";
import { appMutationTypes } from "../store/heroes/mutations/types";

const heroMoudel = namespace("Heroes");
@Component
export default class Heroes extends Vue {
  @heroMoudel.State("heroesData")
  private heroesData!: [];

  @heroMoudel.State("index")
  private heroId!: number;

  @heroMoudel.Mutation(appMutationTypes.DEL_HERO)
  private delHero!: (index: number) => void;

  @heroMoudel.Mutation(appMutationTypes.ADD_HERO)
  private addHero!: (name: string) => void;

  @heroMoudel.Mutation(appMutationTypes.LOG_MSG)
  private logMsg!: (str: string) => void;

  @heroMoudel.Mutation(appMutationTypes.CLEAR_TAG)
  private MutationClearTag!: () => void;

  private heroName: string = "";

  private removeHero(index: number): void {
    this.delHero(index);
  }
  private addNewHero(): void {
    const id = this.heroId + 1;
    this.addHero(this.heroName);
    this.logMsg(`added hero id=${id}`);
  }
  private toDetail(id: number): void {
    this.logMsg(`found hero id=${id}`);
  }
  private created() {
    this.logMsg("fetched heroes");
    this.MutationClearTag();
  }
}
</script>

<style scoped>
.heroes {
  margin: 0 0 c 0;
  list-style-type: none;
  padding: 0;
  width: 250px;
}
.heroes li {
  position: relative;
  cursor: pointer;
  background-color: #eee;
  margin: 10px;
  padding: 5px 0;
  height: 36px;
  border-radius: 4px;
}

.heroes li:hover {
  color: #607d8b;
  background-color: #ddd;
  left: 10px;
}

.heroes a {
  color: #333;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
  height: 46px;
  line-height: 46px;
}

.heroes a:hover {
  color: #607d8b;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0 10px;
  background-color: #405061;
  position: relative;
  left: -1px;
  top: -4px;
  min-width: 16px;
  text-align: right;
  margin-right: 10px;
  border-radius: 4px 0 0 4px;
}

button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
  margin-bottom: 20px;
}

button:hover {
  background-color: #cfd8dc;
}

button.delete {
  position: relative;
  left: 194px;
  top: -40px;
  background-color: gray !important;
  color: white;
}
</style>