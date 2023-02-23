import { EMarvelActions, Marvel } from "./type";

const setHeroes = (data: Marvel[]) => {
  return {
    type: EMarvelActions.GetMarvelHeroes,
    payload: data,
  };
};

export const getMarvelHeroes = () => {
  return async function (dispatch: any) {
    await fetch("./data.json")
      .then((data) => data.json())
      .then((data) => {
        dispatch(setHeroes(data));
      })
      .catch((err) => console.log(err));
  };
};
