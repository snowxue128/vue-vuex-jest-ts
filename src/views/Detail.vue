<template>
  <div class="detail">
    <h2>BOMBASTO Details</h2>
    <p>id:{{this.$route.params.id}}</p>
    <p>name:</p>
    <input type="text" v-model="currentHeroName" />
    <button @click="goBack">go Back</button>
    <button @click="updateName">save</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from "vue-property-decorator";
import { State, Mutation, namespace } from "vuex-class";
import { appMutationTypes } from "../store/heroes/mutations/types";

const heroMoudel = namespace("Heroes");

@Component
export default class Detail extends Vue {
  private currentHeroName: string = "";

  @heroMoudel.State("heroName")
  private heroName!: string;

  @heroMoudel.Mutation(appMutationTypes.UPDATE_NAME)
  private MutationUpdateName!: (obj: any) => void;

  @heroMoudel.Mutation(appMutationTypes.CLEAR_TAG)
  private MutationClearTag!: () => void;

  @heroMoudel.Mutation(appMutationTypes.LOG_MSG)
  private logMsg!: (str: string) => void;

  @heroMoudel.Mutation(appMutationTypes.GET_HERO)
  private MutationGetHero!: (id: number) => void;

  private created() {
    this.MutationClearTag();
    this.MutationGetHero(+this.$route.params.id);
    this.currentHeroName = this.heroName;
  }
  private goBack(): void {
    this.$router.go(-1);
  }
  private updateName(): void {
    this.MutationUpdateName({
      id: +this.$route.params.id,
      name: this.currentHeroName,
    });
    this.logMsg(`updated hero id=${this.$route.params.id}`);
    this.$router.go(-1);
  }
}
</script>

<style scoped>
input {
  display: block;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  margin-right: 20px;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>