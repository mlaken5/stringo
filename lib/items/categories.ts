export type ItemCategory = 
  | 'transport' 
  | 'people' 
  | 'food' 
  | 'nature' 
  | 'urban' 
  | 'seasonal'
  | 'events';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type Season = 'spring' | 'summer' | 'fall' | 'winter' | 'any';

export interface BingoItem {
  id: string;
  text: string;
  category: ItemCategory;
  difficulty: Difficulty;
  seasons: Season[];
  timeOfDay?: ('morning' | 'afternoon' | 'evening' | 'night')[];
  holidays?: string[];
  weatherConditions?: string[];
}