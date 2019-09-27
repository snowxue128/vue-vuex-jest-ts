import { AppState } from './types';
import { HEROES } from '../../../data/herodata';


export const state: AppState = {
  heroesData: HEROES,
  index: HEROES.length + 10,
  heroName: '',
  msgTag: true,
  messages: [],
  topHero: HEROES.slice(0, 4),
  searchRecord: [],
};
