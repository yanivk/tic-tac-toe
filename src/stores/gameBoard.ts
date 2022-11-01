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

  const saveGameBoard = ref<{
    [key: number]: { isChecked: boolean; player: null | PlayerInterface };
  }>({});

  function prepareToClearBoard() {
    saveGameBoard.value = { ...board.value };
  }

  function cleanBoard() {
    board.value = { ...saveGameBoard.value };
  }

  function getIsWin() {
    let isWin = false;
    // Horizontal win
    if (
      board.value[1].isChecked &&
      board.value[2].isChecked &&
      board.value[3].isChecked
    ) {
      if (
        board.value[1].player?.pseudo === board.value[2].player?.pseudo &&
        board.value[2].player?.pseudo === board.value[3].player?.pseudo
      ) {
        isWin = true;
      }
    }
    if (
      board.value[4].isChecked &&
      board.value[5].isChecked &&
      board.value[6].isChecked
    ) {
      if (
        board.value[4].player?.pseudo === board.value[5].player?.pseudo &&
        board.value[5].player?.pseudo === board.value[6].player?.pseudo
      ) {
        isWin = true;
      }
    }
    if (
      board.value[7].isChecked &&
      board.value[8].isChecked &&
      board.value[9].isChecked
    ) {
      if (
        board.value[7].player?.pseudo === board.value[8].player?.pseudo &&
        board.value[8].player?.pseudo === board.value[9].player?.pseudo
      ) {
        isWin = true;
      }
    }

    //Vertical win
    if (
      board.value[1].isChecked &&
      board.value[4].isChecked &&
      board.value[7].isChecked
    ) {
      if (
        board.value[1].player?.pseudo === board.value[4].player?.pseudo &&
        board.value[4].player?.pseudo === board.value[7].player?.pseudo
      ) {
        isWin = true;
      }
    }
    if (
      board.value[2].isChecked &&
      board.value[5].isChecked &&
      board.value[8].isChecked
    ) {
      if (
        board.value[2].player?.pseudo === board.value[5].player?.pseudo &&
        board.value[5].player?.pseudo === board.value[8].player?.pseudo
      ) {
        isWin = true;
      }
    }
    if (
      board.value[3].isChecked &&
      board.value[6].isChecked &&
      board.value[9].isChecked
    ) {
      if (
        board.value[3].player?.pseudo === board.value[6].player?.pseudo &&
        board.value[6].player?.pseudo === board.value[9].player?.pseudo
      ) {
        isWin = true;
      }
    }

    //Diagonal win
    if (
      board.value[1].isChecked &&
      board.value[5].isChecked &&
      board.value[9].isChecked
    ) {
      if (
        board.value[1].player?.pseudo === board.value[5].player?.pseudo &&
        board.value[5].player?.pseudo === board.value[9].player?.pseudo
      ) {
        isWin = true;
      }
    }
    if (
      board.value[3].isChecked &&
      board.value[5].isChecked &&
      board.value[7].isChecked
    ) {
      if (
        board.value[3].player?.pseudo === board.value[5].player?.pseudo &&
        board.value[5].player?.pseudo === board.value[7].player?.pseudo
      ) {
        isWin = true;
      }
    }

    return isWin;
  }

  function getEqualityPart() {
    /*let isEquality = false;
    for (let i = 0; i < 9; i++) {
      if (board.value[i].isChecked)
        isEquality = false
    }*/
    if (
      board.value[1].isChecked &&
      board.value[2].isChecked &&
      board.value[3].isChecked &&
      board.value[4].isChecked &&
      board.value[5].isChecked &&
      board.value[6].isChecked &&
      board.value[7].isChecked &&
      board.value[8].isChecked &&
      board.value[9].isChecked &&
      !getIsWin()
    ) {
      return true;
    }
  }

  return {
    board,
    saveGameBoard,
    prepareToClearBoard,
    cleanBoard,
    getIsWin,
    getEqualityPart,
  };
});
