<script setup lang="ts">
import { usePlayerStore } from "@/stores/players";
import { useGameBoardStore } from "@/stores/gameBoard";
import {computed, onMounted, ref} from "vue";
import ScoreBoard from "@/components/ellementsGame/ScoreBoard.vue";
import GameBoard from "@/components/ellementsGame/GameBoard.vue";

const playerStore = usePlayerStore();
const boardStore = useGameBoardStore();
const playerWin = ref<null | string>(null);

onMounted(() => {
  boardStore.prepareToClearBoard();
});

const player = computed(() => {
  return playerStore.getPlayerWhoPlayNow().value;
});

function setPlayerResult(e: string) {
  playerWin.value = e;
}

function restartGame() {
  playerWin.value = null;
  boardStore.cleanBoard();
}
</script>

<template>
  <h1>Play page</h1>
  <h2>Turn of : {{ player.firstname }}</h2>
  <score-board />
  <div v-if="playerWin">
    <p>
      {{ playerWin }}
    </p>
    <div @click="restartGame">One  more ?</div>
  </div>
  <game-board v-on:playerResult="setPlayerResult" />
</template>

<style scoped>
</style>
