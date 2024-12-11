export function SkeletonMovieResultCard() {
    return (
        <div className="flex shadow-md rounded-lg overflow-hidden animate-pulse">
            <div className="w-1/4 h-60 bg-gray-300"></div>

            <div className="w-3/4 p-4 space-y-4">
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
            </div>
        </div>
    )
}