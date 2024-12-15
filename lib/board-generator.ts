import { BingoItem, Season } from './items/categories';
import { itemBank } from './items/bank';
import seedrandom from 'seedrandom';

interface BoardGeneratorOptions {
  date: Date;
  latitude?: number;
  longitude?: number;
}

export class BoardGenerator {
  private rng: seedrandom.PRNG;
  private date: Date;
  private season: Season;
  private latitude?: number;
  private longitude?: number;

  constructor(options: BoardGeneratorOptions) {
    this.date = options.date;
    this.season = this.getSeason(options.date);
    this.latitude = options.latitude;
    this.longitude = options.longitude;
    this.rng = seedrandom(this.date.toISOString().split('T')[0]);
  }

  private getSeason(date: Date): Season {
    const month = date.getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'fall';
    return 'winter';
  }

  private filterItemsForCurrentContext(items: BingoItem[]): BingoItem[] {
    return items.filter(item => {
        // Updated to check the seasons array
        return item.seasons.includes('any') || item.seasons.includes(this.season);
    });
  }

  generateBoard(): BingoItem[] {
    const availableItems = this.filterItemsForCurrentContext(itemBank);
    const board: BingoItem[] = [];

    // Ensure we have enough items
    if (availableItems.length < 8) {
      throw new Error('Not enough items available for current context');
    }

    // Select items based on difficulty distribution
    const difficulties = ['easy', 'easy', 'easy', 'medium', 'medium', 'hard'];
    const shuffledDifficulties = this.shuffle(difficulties);

    // Generate 8 items (9th will be FREE space)
    for (let i = 0; i < 8; i++) {
      const targetDifficulty = shuffledDifficulties[i] || 'easy';
      const matchingItems = availableItems.filter(
        item => item.difficulty === targetDifficulty && !board.includes(item)
      );

      if (matchingItems.length > 0) {
        const selectedItem = matchingItems[Math.floor(this.rng() * matchingItems.length)];
        board.push(selectedItem);
      } else {
        // Fallback to any difficulty if we can't match the target
        const remainingItems = availableItems.filter(item => !board.includes(item));
        if (remainingItems.length === 0) {
          throw new Error('Not enough unique items available');
        }
        board.push(remainingItems[0]);
      }
    }

    // Insert FREE space in the middle
    board.splice(4, 0, {
      id: 'free',
      text: 'FREE',
      category: 'events',
      difficulty: 'easy',
      seasons: ['any'],
    });

    return board;
  }

  private shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(this.rng() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}