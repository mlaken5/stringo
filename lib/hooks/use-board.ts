"use client";

import { useState, useEffect } from 'react';
import { BingoItem } from '../items/categories';
import { BoardGenerator } from '../board-generator';

export function useBoard() {
  const [board, setBoard] = useState<BingoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const generator = new BoardGenerator({ date: new Date() });
      const newBoard = generator.generateBoard();
      setBoard(newBoard);
    } catch (error) {
      console.error('Failed to generate board:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { board, loading };
}