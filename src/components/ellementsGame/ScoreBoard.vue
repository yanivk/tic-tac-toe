<script setup lang="ts">
import { usePlayerStore } from "@/stores/players";
import { computed } from "vue";

const playerStore = usePlayerStore();

const playerOne = computed(() => {
  return playerStore.playerOneInformation;
});
const playerTwo = computed(() => {
  return playerStore.playerTwoInformation;
});
</script>
<template>
  <div>
    <h3>SCORE</h3>
    <p class="score">
      <span
        >{{ playerOne.firstname }} {{ playerOne.lastname }} :
        <span class="result-score">{{ playerOne.score }}</span></span
      >
      <span
        >{{ playerTwo.firstname }} {{ playerTwo.lastname }} :
        <span class="result-score">{{ playerTwo.score }}</span></span
      >
    </p>
  </div>
</template>

<style scoped>
.score {
  display: flex;
  justify-content: space-between;
  width: 300px;
}
.result-score {
  font-weight: bold;
}
</style>
