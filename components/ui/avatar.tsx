"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Styled wrapper around Radix UI's Avatar Root that applies default avatar classes and forwards all props.
 *
 * @param className - Optional additional CSS class names to merge with the component's default avatar styles
 * @param props - All other props are passed through to the underlying Radix Avatar Root
 * @returns The rendered Avatar root element with combined class names and forwarded props
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an avatar image element with a square aspect ratio and merged className.
 *
 * @returns The avatar image element with `data-slot="avatar-image"`, a square aspect ratio, and the provided `className` merged with the component defaults.
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled fallback for an avatar, shown when the avatar image is unavailable.
 *
 * @returns The Radix Avatar fallback element with a muted background, centered content, rounded shape, `data-slot="avatar-fallback"`, and any provided `className` merged into its classes.
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }