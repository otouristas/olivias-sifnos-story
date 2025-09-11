import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

// Predefined skeleton components for common use cases
export const CardSkeleton = () => (
  <div className="border border-villa-stone rounded-lg p-6 space-y-4">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
    <Skeleton className="h-32 w-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  </div>
)

export const BlogPostSkeleton = () => (
  <div className="border border-villa-stone rounded-lg overflow-hidden">
    <Skeleton className="h-48 w-full" />
    <div className="p-6 space-y-4">
      <div className="flex gap-2">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex items-center gap-4">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-12" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  </div>
)

export const VillaGallerySkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {Array.from({ length: 6 }).map((_, i) => (
      <Skeleton key={i} className="h-48 w-full rounded-lg" />
    ))}
  </div>
)

export const NavigationSkeleton = () => (
  <div className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <Skeleton className="h-12 w-48" />
        <div className="hidden md:flex items-center space-x-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-20" />
          ))}
          <Skeleton className="h-10 w-24" />
        </div>
        <Skeleton className="md:hidden h-8 w-8" />
      </div>
    </div>
  </div>
)

export const HeroSkeleton = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <Skeleton className="absolute inset-0 w-full h-full" />
    <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
      <Skeleton className="h-16 w-96 mx-auto mb-4" />
      <Skeleton className="h-8 w-64 mx-auto mb-8" />
      <Skeleton className="h-12 w-48 mx-auto" />
    </div>
  </section>
)

export const ReviewSkeleton = () => (
  <div className="border-0 shadow-elegant bg-white/80 backdrop-blur p-8 rounded-lg">
    <div className="flex items-start justify-between mb-6">
      <div>
        <Skeleton className="h-6 w-24 mb-2" />
        <Skeleton className="h-6 w-32" />
      </div>
      <Skeleton className="h-4 w-20" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </div>
)

export default Skeleton