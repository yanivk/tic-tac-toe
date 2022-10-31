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

  function getIsWin() {
    let isWin = false;
    // Horizontal win
    if(board.value[1].isChecked && board.value[2].isChecked && board.value[3].isChecked) {
      if (board.value[1].player?.firstname === board.value[2].player?.firstname &&  board.value[2].player?.firstname === board.value[3].player?.firstname) {
        isWin = true;
      }
    }
    if (board.value[4].isChecked && board.value[5].isChecked && board.value[6].isChecked) {
      if (board.value[4].player?.firstname === board.value[5].player?.firstname &&  board.value[5].player?.firstname === board.value[6].player?.firstname) {
        isWin = true;
      }
    }
    if (board.value[7].isChecked && board.value[8].isChecked && board.value[9].isChecked) {
      if (board.value[7].player?.firstname === board.value[8].player?.firstname &&  board.value[8].player?.firstname === board.value[9].player?.firstname) {
        isWin = true;
      }
    }

    //Vertical win
    if(board.value[1].isChecked && board.value[4].isChecked && board.value[7].isChecked) {
      if (board.value[1].player?.firstname === board.value[4].player?.firstname &&  board.value[4].player?.firstname === board.value[7].player?.firstname) {
        isWin = true;
      }
    }
    if (board.value[2].isChecked && board.value[5].isChecked && board.value[8].isChecked) {
      if (board.value[2].player?.firstname === board.value[5].player?.firstname &&  board.value[5].player?.firstname === board.value[8].player?.firstname) {
        isWin = true;
      }
    }
    if (board.value[3].isChecked && board.value[6].isChecked && board.value[9].isChecked) {
      if (board.value[3].player?.firstname === board.value[6].player?.firstname &&  board.value[6].player?.firstname === board.value[9].player?.firstname) {
        isWin = true;
      }
    }

    //Diagonal win
    if(board.value[1].isChecked && board.value[5].isChecked && board.value[9].isChecked) {
      if (board.value[1].player?.firstname === board.value[5].player?.firstname &&  board.value[5].player?.firstname === board.value[9].player?.firstname) {
        isWin = true;
      }
    }
    if (board.value[3].isChecked && board.value[5].isChecked && board.value[7].isChecked) {
      if (board.value[3].player?.firstname === board.value[5].player?.firstname &&  board.value[5].player?.firstname === board.value[7].player?.firstname) {
        isWin = true;
      }
    }

    return isWin;
  }
  return { board, getIsWin };
});
