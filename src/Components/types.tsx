export interface IAttacks {
  convertedEnergyCost: string;
  damage: string;
  name: string;
  text: string;
  cost: Array<string>;
}
export interface IPokemon {
  artist: string;
  attacks: {
    0: IAttacks;
    1: IAttacks;
  };
  evolvesFrom: string;
  hp: string;
  id: string;
  imageUrl: string;
  imageUrlHiRes: string;
  name: string;
  nationalPokedexNumber: number;
  number: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  subtype: string;
  supertype: string;
  types: Array<string>;
  weaknesses: {
    0: {
      type: string;
      value: string;
    };
  };
}

export interface IFilteredCards {
  pokemons: IPokemon[];
  min: number;
  max: number;
  isLoading: boolean;
}

export interface IFilterSetters {
  setCurrentSuperType: (e: { currentTarget: { value: string; checked: boolean } }) => void;
  setCurrentType: (e: { currentTarget: { value: string; checked: boolean } }) => void;
  setCurrentSubType: (e: { currentTarget: { value: string; checked: boolean } }) => void;
  setCurrentHp: (e: { currentTarget: { value: string; checked: boolean } }) => void;
}
