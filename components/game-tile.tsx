"use client"

import { useState, useEffect } from "react"
import { BingoItem } from "@/lib/items/categories"
import { PhotoCaptureButton } from "./photo-capture-button"
import { cn } from "@/lib/utils"

interface GameTileProps {
  item: BingoItem;
  isFree?: boolean;
}

export function GameTile({ item, isFree = false }: GameTileProps) {
  const [completed, setCompleted] = useState(false)
  const [photoUrl, setPhotoUrl] = useState<string>()

  useEffect(() => {
    const savedUrl = localStorage.getItem(`tile-${item.id}`)
    if (savedUrl) {
      console.log("Loading saved photo for tile:", item.id)
      setPhotoUrl(savedUrl)
      setCompleted(true)
    }
  }, [item.id])

  const handlePhotoCapture = (file: File) => {
    console.log("Processing photo for tile:", item.id)
    
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      if (result) {
        console.log("Photo processed successfully")
        setPhotoUrl(result)
        setCompleted(true)
        localStorage.setItem(`tile-${item.id}`, result)
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div 
      className={cn(
        "relative aspect-square rounded-lg border p-4",
        "flex items-center justify-center",
        completed && "bg-green-950/20",
        isFree && "border-2"
      )}
    >
      {photoUrl && (
        <div 
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${photoUrl})` }}
        >
          <img 
            src={photoUrl} 
            alt="" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      )}
      
      <span className="text-center font-medium z-10">
        {item.text}
      </span>
      
      <PhotoCaptureButton 
        onPhotoCapture={handlePhotoCapture}
        isCompleted={completed}
      />
    </div>
  )
} 