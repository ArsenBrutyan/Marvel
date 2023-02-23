export enum EMarvelActions {
  GetMarvelHeroes = "SET_MARVEL_HEROES",
  AddMarvelHeroes = "ADD_MARVEL_HEROES",
}

export type Marvel = {
  id: number;
  name: string;
  link: string;
  description: string;
};

export interface InitialState {
  heroes: Marvel[];
}
