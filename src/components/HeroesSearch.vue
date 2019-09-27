<template>
  <div class="hello">
    <h3>Hero Search</h3>
    <input type="text" v-model="searchStr" @input="inputFn" id="search"/>

    <ul class="search-result" v-if="searchData.length>0">
      <li v-for="(item,index ) in searchData" :key="index" @click="toDetail(item.id)">
        <router-link :to="'/detail/'+item.id">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from "vue-property-decorator";
import { State, Mutation, namespace } from "vuex-class";
import { appMutationTypes } from "../store/heroes/mutations/types";

const heroMoudel = namespace("Heroes");

@Component
export default class HeroesSearch extends Vue {
  @heroMoudel.State("heroesData")
  private heroesData!: [];

  @heroMoudel.Mutation(appMutationTypes.LOG_MSG)
  private logMsg!: (str: string) => void;

  @Provide() private searchStr: string = "";
  @Provide() private searchData: object[] = [];
  private inputFn() {
    this.searchData = this.heroesData.filter((obj: any) => {
      return (
        obj.name.toUpperCase().indexOf(this.searchStr.toUpperCase()) !== -1
      );
    });
    if ( this.searchStr !== '') {
      this.logMsg(`found heroes matching "${this.searchStr}"`);
    }
  }
  private toDetail(id: number): void {
    this.logMsg(`found hero id=${id}`);
  }
}
</script>

<style scoped>
input {
  width: 202px;
  height: 16px;
}
.search-result li {
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width: 195px;
  height: 16px;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  list-style-type: none;
}

.search-result li:hover {
  background-color: #607d8b;
}

.search-result li a {
  color: #888;
  display: block;
  text-decoration: none;
}

.search-result li a:hover {
  color: white;
}
.search-result li a:active {
  color: white;
}
#search-box {
  width: 200px;
  height: 20px;
}

ul.search-result {
  margin-top: 0;
  padding-left: 0;
}
</style>
