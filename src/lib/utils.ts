import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = "Startup Landing Page",
  description = 'A landing page for a Startup',
  // image = "/thumbnail.png",
  icons = "/favicon.ico"
}: {
  title?: string,
  description?: string,
  image?: string,
  icons?: string
} = {} ): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      // images: [{url: image}]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // images: [image]
    },
    icons,
    metadataBase: new URL("")
  }
}