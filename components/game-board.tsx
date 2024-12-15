"use client";

import { BingoItem } from "@/lib/items/categories";
import { GameTile } from "./game-tile";

interface GameBoardProps {
  items?: BingoItem[];
}

export function GameBoard({ items = [] }: GameBoardProps) {
  if (!items || items.length === 0) {
    return <div>Loading board...</div>
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <GameTile 
          key={item.id} 
          item={item}
          isFree={item.id === 'free'}
        />
      ))}
    </div>
  );
}