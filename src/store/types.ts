export interface RootState {}
export interface IRootState {}
export interface HeroState {
    heroesData: [{
        id: number,
        name: string,
      }];
      index: number;
      heroName: string;
      msgTag: boolean;
      messages: string[];
      topHero: [{
        id: "",
        name: "",
      }];
      searchRecord: string[];
}

export interface TypeTree {
  [key: string]: string;
}
