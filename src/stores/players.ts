import { ref } from "vue";
import { defineStore } from "pinia";
import type { PlayerInterface } from "@/interfaces/playerInterface";

export const usePlayerStore = defineStore("player", () => {
  const playerOneInformation = ref<PlayerInterface>({
    lastname: "Doe",
    firstname: "John",
    symbol: "X",
    hisTurn: true,
  });

  const playerTwoInformation = ref<PlayerInterface>({
    lastname: "Doe",
    firstname: "Jane",
    symbol: "O",
    hisTurn: false,
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
