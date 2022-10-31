import { ref } from "vue";
import { defineStore } from "pinia";
import type { PlayerInterface } from "@/interfaces/playerInterface";

export const useGameBoardStore = defineStore("gameBoard", () => {
  const board = ref<{
    [key: number]: { isChecked: boolean; player: null | PlayerInterface };
  }>({
    1: {
      isChecked: false,
      player: null,
    },
    2: {
      isChecked: false,
      player: null,
    },
    3: {
      isChecked: false,
      player: null,
    },
    4: {
      isChecked: false,
      player: null,
    },
    5: {
      isChecked: false,
      player: null,
    },
    6: {
      isChecked: false,
      player: null,
    },
    7: {
      isChecked: false,
      player: null,
    },
    8: {
      isChecked: false,
      player: null,
    },
    9: {
      isChecked: false,
      player: null,
    },
  });

  return { board };
});
