<script setup lang="ts">
import { usePlayerStore } from "@/stores/players";
import { useGameBoardStore } from "@/stores/gameBoard";
import {computed, ref} from "vue";

const playerStore = usePlayerStore();
const boardStore = useGameBoardStore();
const player = computed(() => {
  return playerStore.getPlayerWhoPlayNow().value;
});

const playerWin = ref<null | string>(null);

//if 3 dans une column
function writeInColumn(columnNumber: number) {
  if (player.value.hisTurn && !boardStore.board[columnNumber].isChecked) {
    boardStore.board[columnNumber] = {
      isChecked: true,
      player: player.value,
    };
    if(boardStore.getIsWin()) {
      playerWin.value  = `${player.value.firstname} ${player.value.lastname}`;
      return;
    }
    playerStore.changeTurn();
  }
}
</script>

<template>
  <h1>Play page</h1>
  <h2>Turn of : {{ player.firstname }}</h2>
  <div v-if="playerWin">{{ playerWin }} win this game</div>
  <div>Restart</div>
  <div class="game-board">
    <div class="row">
      <div class="column" @click="writeInColumn(1)">
        <span v-if="boardStore.board[1].player !== null">
          {{ boardStore.board[1].player.symbol }}
        </span>
      </div>
      <div class="column" @click="writeInColumn(2)">
        <span v-if="boardStore.board[2].player !== null">
          {{ boardStore.board[2].player.symbol }}
        </span>
      </div>
      <div class="column" @click="writeInColumn(3)">
        <span v-if="boardStore.board[3].player !== null">
          {{ boardStore.board[3].player.symbol }}
        </span>
      </div>
    </div>
    <div class="row">
      <div class="column" @click="writeInColumn(4)">
        <span v-if="boardStore.board[4].player !== null">
          {{ boardStore.board[4].player.symbol }}
        </span>
      </div>
      <div class="column" @click="writeInColumn(5)">
        <span v-if="boardStore.board[5].player !== null">
          {{ boardStore.board[5].player.symbol }}
        </span>
      </div>
      <div class="column" @click="writeInColumn(6)">
        <span v-if="boardStore.board[6].player !== null">
          {{ boardStore.board[6].player.symbol }}
        </span>
      </div>
    </div>
    <div class="row">
      <div class="column" @click="writeInColumn(7)">
        <span v-if="boardStore.board[7].player !== null">
          {{ boardStore.board[7].player.symbol }}
        </span>
      </div>
      <div class="column" @click="writeInColumn(8)">
        <span v-if="boardStore.board[8].player !== null">
          {{ boardStore.board[8].player.symbol }}
        </span>
      </div>
      <div class="column" @click="writeInColumn(9)">
        <span v-if="boardStore.board[9].player !== null">
          {{ boardStore.board[9].player.symbol }}
        </span>
      </div>
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

.row .column {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border: 1px solid darkgrey;
  font-size: 40px;
}

.row .column:hover {
  background: #ececec;
  cursor: pointer;
}
</style>
