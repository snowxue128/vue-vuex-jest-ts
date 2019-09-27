<template>
  <div class="dashboard" v-if="msgTag">
    <h2>Messages</h2>
    <button @click="clearMsg" class="clear">clear</button>
    <div>
      <p v-for="(item,ind) in messages" :key="ind">
        HeroService:
        <span>{{item}}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from "vue-property-decorator";
import { State, Mutation, namespace } from "vuex-class";
import { appMutationTypes } from "../store/heroes/mutations/types";

const heroMoudel = namespace("Heroes");

@Component
export default class Message extends Vue {
  @heroMoudel.State("messages")
  private messages!: [];

  @heroMoudel.State("msgTag")
  private msgTag!: boolean;

  @heroMoudel.Mutation(appMutationTypes.CLEAR_MSG)
  private MutationClearMsg!: () => void;

  private clearMsg() {
    this.MutationClearMsg();
  }
}
</script>

<style scoped>
h2 {
  color: red;
}
button.clear {
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #aaa;
  cursor: auto;
}
button.clear {
  color: #333;
  margin-bottom: 12px;
}
</style>