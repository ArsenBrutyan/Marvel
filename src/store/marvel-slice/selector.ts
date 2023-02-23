import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const heroesSelector = createSelector(
  (state: RootState) => state.marvel.heroes,
  (marvel) => {
    if (!marvel) return null;
    return marvel;
  }
);
