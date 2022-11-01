<script setup lang="ts">
import { computed, ref } from "vue";
import { usePlayerStore } from "@/stores/players";
import { useGameBoardStore } from "@/stores/gameBoard";
import ColumnBoard from "@/components/ellementsGame/partials/ColumnBoard.vue";

const playerStore = usePlayerStore();
const boardStore = useGameBoardStore();
const playerWin = ref<null | string>(null);

const player = computed(() => {
  return playerStore.getPlayerWhoPlayNow().value;
});
const playerOne = computed(() => {
  return playerStore.playerOneInformation;
});
const playerTwo = computed(() => {
  return playerStore.playerTwoInformation;
});

const rangeCol2 = ref([4, 5, 6]);
const rangeCol3 = ref([7, 8, 9]);

const emit = defineEmits(["playerResult"]);

function writeInColumn(columnNumber: number) {
  if (player.value.hisTurn && !boardStore.board[columnNumber].isChecked) {
    boardStore.board[columnNumber] = {
      isChecked: true,
      player: player.value,
    };
    if (boardStore.getIsWin()) {
      playerWin.value = `${player.value.firstname} ${player.value.lastname} win this game`;
      emit("playerResult", playerWin.value);
      if (player.value.firstname === playerOne.value.firstname) {
        playerOne.value.score += 1;
      } else {
        playerTwo.value.score += 1;
      }
      return;
    }
    if (boardStore.getEqualityPart()) {
      playerWin.value = "Equality";
      emit("playerResult", playerWin.value);
      return;
    }
    playerStore.changeTurn();
  }
}
</script>

<template>
  <div class="game-board">
    <div class="row">
      <template v-for="i in 3" :key="i">
        <column-board :column-number="i" @click="writeInColumn(i)" />
      </template>
    </div>
    <div class="row">
      <template v-for="i in rangeCol2" :key="i">
        <column-board :column-number="i" @click="writeInColumn(i)" />
      </template>
    </div>
    <div class="row">
      <template v-for="i in rangeCol3" :key="i">
        <column-board :column-number="i" @click="writeInColumn(i)" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.game-board {
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.row {
  display: flex;
}
</style>
