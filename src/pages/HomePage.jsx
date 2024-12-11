import { useState, useEffect } from "react";
import { SearchBar } from "../components/SeachBar";
import { ToggleTrending } from "../components/ToggleTrending";
import { TMDP_API } from "../utils/TMDP_API"
import { SkeletonCard } from "../components/SkeletonCard";
import { MoviesCard } from "../components/MoviesCard";

export function HomePage() {
    const [movies, setMovies] = useState([]);
    const [active, setActive] = useState("day");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTrendingMovies = async (active) => {
            setLoading(true);
            const data = await TMDP_API.fetchTrendingMovies(active);
            if (data) {
                setMovies(data.results);
            }
            setLoading(false);
        }
        fetchTrendingMovies(active);
    }, [active]);
    return (
        <div className="bg-gray-100">
            <SearchBar />
            <ToggleTrending active={active} setActive={setActive} />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 pb-5">
                {loading
                    ? Array.from({ length: 20 }).map((_, index) => <SkeletonCard key={index} />)
                    : <MoviesCard movies={movies} />}
            </div>
        </div>
    );
}