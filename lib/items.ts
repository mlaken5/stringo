export type Season = 'spring' | 'summer' | 'fall' | 'winter' | 'all';

export interface BingoItem {
    id: string;
    name: string;
    season: Season;
    difficulty: 'easy' | 'medium' | 'hard';
    category?: string;
    text?: string;
    description?: string;
}

export const itemBank: BingoItem[] = [
    {
        id: '1',
        name: 'Dog Walker',
        season: 'all',
        difficulty: 'easy',
        category: 'People',
        text: 'Someone walking their dog',
        description: 'Someone walking their dog'
    },
    {
        id: '2',
        name: 'Jogger',
        season: 'all',
        difficulty: 'easy',
        category: 'People',
        text: 'Someone out for a jog',
        description: 'Someone out for a jog'
    },
    {
        id: '3',
        name: 'Coffee Cup',
        season: 'all',
        difficulty: 'easy',
        category: 'People',
        text: 'Someone carrying a coffee cup',
        description: 'Someone carrying a coffee cup'
    },
    // Add more items as needed for your bingo game
    {
        id: '4',
        name: 'Ice Cream',
        season: 'summer',
        difficulty: 'easy',
        category: 'Food',
        text: 'Someone eating ice cream',
        description: 'Someone eating ice cream'
    },
    {
        id: '5',
        name: 'Umbrella',
        season: 'spring',
        difficulty: 'easy',
        category: 'Clothing',
        text: 'Someone carrying an umbrella',
        description: 'Someone carrying an umbrella'
    }
    // ... add more items based on your game's needs
]; 