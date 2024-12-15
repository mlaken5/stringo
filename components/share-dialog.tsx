"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2, Download, Copy, Twitter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import html2canvas from "html2canvas";

export function ShareDialog() {
  const [isCapturing, setIsCapturing] = useState(false);
  const { toast } = useToast();

  const captureBoard = async () => {
    try {
      setIsCapturing(true);
      const boardElement = document.getElementById("bingo-board");
      if (!boardElement) return;

      const canvas = await html2canvas(boardElement, {
        backgroundColor: document.documentElement.classList.contains("dark") ? "#09090B" : "#ffffff",
        scale: 2,
      });

      const image = canvas.toDataURL("image/png");
      return image;
    } catch (error) {
      console.error("Failed to capture board:", error);
      return null;
    } finally {
      setIsCapturing(false);
    }
  };

  const handleShare = async () => {
    const image = await captureBoard();
    if (!image) return;

    if (navigator.share) {
      try {
        const blob = await (await fetch(image)).blob();
        const file = new File([blob], "daily-street-bingo.png", { type: "image/png" });
        await navigator.share({
          title: "My Daily Street Bingo Progress",
          text: "Check out my Daily Street Bingo progress!",
          files: [file],
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      const link = document.createElement("a");
      link.download = "daily-street-bingo.png";
      link.href = image;
      link.click();
      toast({
        title: "Image downloaded!",
        description: "Your bingo board has been saved as an image.",
      });
    }
  };

  const handleCopyImage = async () => {
    const image = await captureBoard();
    if (!image) return;

    try {
      const blob = await (await fetch(image)).blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      toast({
        title: "Copied!",
        description: "Your bingo board has been copied to clipboard.",
      });
    } catch (error) {
      console.error("Error copying image:", error);
      toast({
        title: "Error",
        description: "Failed to copy image. Try downloading instead.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share your progress</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button
            className="w-full justify-start"
            variant="outline"
            onClick={handleShare}
            disabled={isCapturing}
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share board
          </Button>
          <Button
            className="w-full justify-start"
            variant="outline"
            onClick={handleCopyImage}
            disabled={isCapturing}
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy to clipboard
          </Button>
          <Button
            className="w-full justify-start"
            variant="outline"
            onClick={handleShare}
            disabled={isCapturing}
          >
            <Download className="mr-2 h-4 w-4" />
            Download image
          </Button>
          <Button
            className="w-full justify-start"
            variant="outline"
            asChild
            disabled={isCapturing}
          >
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                "Playing Daily Street Bingo! 🎯\n\nCheck it out at [YOUR_URL_HERE]"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="mr-2 h-4 w-4" />
              Share on Twitter
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}