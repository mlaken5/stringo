import { useState, useEffect } from 'react'
import { BingoItem } from '@/lib/items/categories'

interface GameState {
  completedTiles: Record<string, string>; // itemId -> photoUrl
}

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>({ completedTiles: {} })

  useEffect(() => {
    // Load saved state on mount
    const saved = localStorage.getItem('bingoGameState')
    if (saved) {
      setGameState(JSON.parse(saved))
    }
  }, [])

  const savePhoto = (itemId: string, photoUrl: string) => {
    const newState = {
      ...gameState,
      completedTiles: {
        ...gameState.completedTiles,
        [itemId]: photoUrl,
      },
    }
    setGameState(newState)
    localStorage.setItem('bingoGameState', JSON.stringify(newState))
  }

  return {
    completedTiles: gameState.completedTiles,
    savePhoto,
  }
} 