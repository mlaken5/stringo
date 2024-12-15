import { BingoItem } from './categories';

export const itemBank: BingoItem[] = [
  // Transport Items
  {
    id: 'red-car',
    text: 'Red Car',
    category: 'transport',
    difficulty: 'easy',
    seasons: ['any'],
  },
  {
    id: 'bicycle',
    text: 'Bicycle',
    category: 'transport',
    difficulty: 'easy',
    seasons: ['any'],
  },
  {
    id: 'electric-scooter',
    text: 'Electric Scooter',
    category: 'transport',
    difficulty: 'easy',
    seasons: ['any'],
  },
  {
    id: 'motorcycle',
    text: 'Motorcycle',
    category: 'transport',
    difficulty: 'medium',
    seasons: ['any'],
  },

  // People Items
  {
    id: 'person-headphones',
    text: 'Person with Headphones',
    category: 'people',
    difficulty: 'easy',
    seasons: ['any'],
  },
  {
    id: 'dog-walker',
    text: 'Dog Walker',
    category: 'people',
    difficulty: 'easy',
    seasons: ['any'],
  },
  {
    id: 'jogger',
    text: 'Jogger',
    category: 'people',
    difficulty: 'easy',
    seasons: ['any'],
  },

  // Food Items
  {
    id: 'coffee-cup',
    text: 'Coffee Cup',
    category: 'food',
    difficulty: 'easy',
    seasons: ['any'],
  },
  {
    id: 'food-truck',
    text: 'Food Truck',
    category: 'food',
    difficulty: 'medium',
    seasons: ['any'],
  },
  {
    id: 'ice-cream',
    text: 'Ice Cream',
    category: 'food',
    difficulty: 'easy',
    seasons: ['summer'],
    weatherConditions: ['sunny', 'clear'],
  },

  // Nature Items
  {
    id: 'bird',
    text: 'Bird',
    category: 'nature',
    difficulty: 'medium',
    seasons: ['any'],
  },
  {
    id: 'squirrel',
    text: 'Squirrel',
    category: 'nature',
    difficulty: 'medium',
    seasons: ['any'],
  },
  {
    id: 'flower-bloom',
    text: 'Blooming Flower',
    category: 'nature',
    difficulty: 'easy',
    seasons: ['spring'],
  },

  // Urban Items
  {
    id: 'construction',
    text: 'Construction Site',
    category: 'urban',
    difficulty: 'easy',
    seasons: ['any'],
    timeOfDay: ['morning', 'afternoon'],
  },
  {
    id: 'street-art',
    text: 'Street Art',
    category: 'urban',
    difficulty: 'medium',
    seasons: ['any'],
  },
  {
    id: 'neon-sign',
    text: 'Neon Sign',
    category: 'urban',
    difficulty: 'medium',
    seasons: ['any'],
    timeOfDay: ['evening', 'night'],
  },

  // Seasonal Items
  {
    id: 'snow-person',
    text: 'Snowman',
    category: 'seasonal',
    difficulty: 'medium',
    seasons: ['winter'],
    weatherConditions: ['snow'],
  },
  {
    id: 'beach-umbrella',
    text: 'Beach Umbrella',
    category: 'seasonal',
    difficulty: 'medium',
    seasons: ['summer'],
    weatherConditions: ['sunny', 'clear'],
  },
  {
    id: 'fall-leaves',
    text: 'Colorful Fall Leaves',
    category: 'seasonal',
    difficulty: 'easy',
    seasons: ['fall'],
  },

  // Event Items
  {
    id: 'christmas-lights',
    text: 'Christmas Lights',
    category: 'events',
    difficulty: 'easy',
    seasons: ['winter'],
    holidays: ['christmas'],
  },
  {
    id: 'halloween-decoration',
    text: 'Halloween Decoration',
    category: 'events',
    difficulty: 'easy',
    seasons: ['fall'],
    holidays: ['halloween'],
  },
  {
    id: 'pride-flag',
    text: 'Pride Flag',
    category: 'events',
    difficulty: 'medium',
    seasons: ['summer'],
    holidays: ['pride'],
  },
];