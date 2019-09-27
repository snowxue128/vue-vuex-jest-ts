export interface HeroesData {
  id: number;
  name: string;
}
export interface TopHero {
  id: number;
  name: string;
}

export interface AppState {
  heroesData: HeroesData[];
  index: number;
  heroName: string;
  msgTag: boolean;
  messages: string[];
  topHero: TopHero[];
  searchRecord: string[];
}
