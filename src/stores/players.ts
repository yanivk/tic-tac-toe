import { ref } from "vue";
import { defineStore } from "pinia";
import type { PlayerInterface } from "@/interfaces/playerInterface";

export const usePlayerStore = defineStore("player", () => {
  const playerOneInformation = ref<PlayerInterface>({
    pseudo: "John",
    symbol: "X",
    hisTurn: true,
    score: 0,
  });

  const playerTwoInformation = ref<PlayerInterface>({
    pseudo: "Jane",
    symbol: "O",
    hisTurn: false,
    score: 0,
  });

  function changeTurn() {
    playerOneInformation.value.hisTurn = !playerOneInformation.value.hisTurn;
    playerTwoInformation.value.hisTurn = !playerTwoInformation.value.hisTurn;
  }

  function getPlayerWhoPlayNow() {
    if (playerOneInformation.value.hisTurn) {
      return playerOneInformation;
    } else {
      return playerTwoInformation;
    }
  }

  return {
    playerOneInformation,
    playerTwoInformation,
    changeTurn,
    getPlayerWhoPlayNow,
  };
});
