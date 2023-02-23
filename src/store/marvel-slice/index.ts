import { AnyAction } from "redux";
import { EMarvelActions, InitialState } from "./type";

export default function () {
  const initialState: InitialState = {
    heroes: [],
  };

  return function reducer(state = initialState, action: AnyAction) {
    if (action.type === EMarvelActions.GetMarvelHeroes) {
      return { ...state, heroes: action.payload };
    }
    return state;
  };
}
