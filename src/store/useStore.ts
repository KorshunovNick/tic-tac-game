import { create } from "zustand";
import { IField } from "../types/Field";
import { initialFields } from "./constant";

interface Store {
  fields: Record<number, IField>;
  currentMark: IField["value"];
  winner: "1player" | "2player" | "draw" | null;
  winLine: number[];
  count: number;
  setMark: (id: number) => void;
  reset: () => void;
}

const winCombination: Record<number, string[]> = {
  1: ["123", "147", "159"],
  2: ["123", "258"],
  3: ["123", "357", "369"],
  4: ["147", "456"],
  5: ["258", "159", "456", "357"],
  6: ["456", "369"],
  7: ["147", "789", "357"],
  8: ["258", "789"],
  9: ["159", "789", "369"],
};

const initialState: Pick<
  Store,
  "fields" | "count" | "currentMark" | "winLine" | "winner"
> = {
  fields: JSON.parse(JSON.stringify(initialFields)),
  currentMark: "X",
  winner: null,
  winLine: [],
  count: 0,
};

export const useStore = create<Store>((set, get) => ({
  ...initialState,
  setMark: (id: number) =>
    set((state) => {
      state.fields[id].value = state.currentMark;

      if (state.count > 3) {
        const winLinesArray = winCombination[id];

        for (let i = 0; i < winLinesArray.length; i++) {
          const winLine = winLinesArray[i].split("").map(Number);

          const isWinner = winLine.every(
            (index) => state.fields[index].value === state.currentMark
          );

          if (isWinner) {
            return {
              winner: state.currentMark === "X" ? "1player" : "2player",
              winLine: winLine,
            };
            break;
          }
        }
        if (state.count >= 8) {
          get().reset();
          return { winner: "draw" };
        }
      }

      return {
        count: state.count + 1,
        currentMark: state.currentMark === "X" ? "0" : "X",
      };
    }),
  reset: () => {
    set({ ...initialState, fields: JSON.parse(JSON.stringify(initialFields)) });
  },
}));
