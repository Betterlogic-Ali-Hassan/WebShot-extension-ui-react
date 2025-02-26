import CopyToast from "@/components/screenShotHistoryPage/CopyToast";
import { toast } from "@/hooks/use-toast";

export const handleImageCopy = async (
  event: React.MouseEvent<HTMLDivElement>,
  url: string
) => {
  event.stopPropagation();
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const imageBitmap = await createImageBitmap(blob);

    // Create a canvas to convert image to PNG
    const canvas = document.createElement("canvas");
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;
    const ctx = canvas.getContext("2d");

    // ✅ Check if ctx is not null
    if (!ctx) {
      console.error("Failed to get 2D context");
      return;
    }

    ctx.drawImage(imageBitmap, 0, 0);

    // Convert canvas content to PNG blob
    canvas.toBlob(async (pngBlob) => {
      if (!pngBlob) {
        console.error("Failed to create PNG blob");
        return;
      }
      try {
        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": pngBlob,
          }),
        ]);
        console.log("Image copied to clipboard as PNG!");
      } catch (error) {
        console.error("Clipboard copy failed", error);
      }
    }, "image/png");
  } catch (error) {
    console.error("Error processing image:", error);
  }

  toast({
    description: <CopyToast />,
    duration: 3000,
  });
};
