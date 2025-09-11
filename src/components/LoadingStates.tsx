import { Skeleton } from '@/components/ui/skeleton';

// Loading states for different page sections
export const PageLoadingSkeleton = () => (
  <div className="min-h-screen bg-background">
    <Skeleton className="h-20 w-full" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="space-y-8">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-64 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-48 w-full" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const BlogLoadingSkeleton = () => (
  <div className="min-h-screen bg-background">
    <Skeleton className="h-20 w-full" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-8">
        <Skeleton className="h-4 w-1/4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-64 w-full" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const VillaLoadingSkeleton = () => (
  <div className="min-h-screen bg-gradient-subtle">
    <Skeleton className="h-20 w-full" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="space-y-16">
        <Skeleton className="h-4 w-1/4" />
        <div className="space-y-8">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-64 w-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PageLoadingSkeleton;
