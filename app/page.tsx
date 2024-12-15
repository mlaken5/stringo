"use client"

import { useEffect, useState } from "react"
import { GameBoard } from "@/components/game-board"
import { BoardGenerator } from "@/lib/board-generator"
import { BingoItem } from "@/lib/items/categories"

export default function Home() {
  const [boardItems, setBoardItems] = useState<BingoItem[]>([])

  useEffect(() => {
    const generator = new BoardGenerator({ date: new Date() })
    const items = generator.generateBoard()
    setBoardItems(items)
  }, [])

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Today's Board</h1>
      <p className="text-gray-400 mb-8">Find these items in your surroundings</p>
      <GameBoard items={boardItems} />
    </main>
  )
}