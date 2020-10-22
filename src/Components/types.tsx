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
