"use client"

import { Camera, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState, useRef } from "react"

interface PhotoCaptureButtonProps {
  onPhotoCapture: (file: File) => void;
  isCompleted?: boolean;
}

export function PhotoCaptureButton({ onPhotoCapture, isCompleted }: PhotoCaptureButtonProps) {
  const { toast } = useToast()
  const [isMobile, setIsMobile] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
  }, [])

  const handleCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      console.log("File captured:", file)
      onPhotoCapture(file)
      toast({
        title: "Photo captured!",
        description: "Your progress has been saved.",
      })
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCapture}
        className="hidden"
        aria-hidden="true"
      />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon"
            className={`absolute bottom-2 right-2 ${isCompleted ? 'text-green-500' : ''}`}
          >
            {isCompleted ? (
              <Camera className="h-5 w-5 text-green-500" />
            ) : (
              <Camera className="h-5 w-5" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {isMobile && (
            <DropdownMenuItem onClick={() => inputRef.current?.click()}>
              <Camera className="mr-2 h-4 w-4" />
              Take Photo
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={() => {
            const input = inputRef.current
            if (input) {
              input.removeAttribute('capture')
              input.click()
              input.setAttribute('capture', 'environment')
            }
          }}>
            <Upload className="mr-2 h-4 w-4" />
            {isMobile ? 'Choose from Gallery' : 'Upload Photo'}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
} 