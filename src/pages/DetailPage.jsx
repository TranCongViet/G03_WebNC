import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TMDP_API } from '../utils/TMDP_API';

export function DetailPage() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async (id) => {
            setLoading(true);
            const data = await TMDP_API.fetchMovieDetails(id);
            if (data) {
                setDetail(data);
            }
            setLoading(false);
        }
        fetchMovieDetails(id);
    }, [id]);

    const SkeletonLoader = () => (
        <div className="text-black p-8 bg-cover bg-center animate-pulse">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row  items-start gap-6">
                    <div className="w-full sm:w-60 h-80 bg-gray-300 rounded-lg"></div>

                    <div className="flex-1 space-y-4 w-full">
                        <div className="w-3/4 h-8 bg-gray-300 rounded"></div>
                        <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
                        <div className="w-2/3 h-6 bg-gray-300 rounded"></div>
                        <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );

    if (loading) {
        return <SkeletonLoader />;
    }
    return (
        detail && (
            <div className="text-black p-8 bg-cover bg-center">
                <div className="container mx-auto">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <div className="w-full sm:w-60 h-full mb-4 sm:mb-0 ">
                            <img
                                src={detail.poster_path ? `https://image.tmdb.org/t/p/original${detail.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"}
                                alt={detail.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <div className="flex-1">
                            <h1 className="text-3xl sm:text-4xl font-bold">{detail.title}</h1>
                            <p className="text-black-400 mt-2">{detail.release_date}</p>
                            <p className="text-sm mt-1">
                                {detail.genres?.map(genre => genre.name).join(", ")}
                            </p>
                            <p className="text-sm mt-1">Rating: {detail.vote_average}/10</p>
                            <button className="mt-4 px-4 py-2 bg-blue-600 rounded text-sm hover:bg-blue-800">
                                Play Trailer
                            </button>
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold">Overview</h2>
                                <p className="mt-4 text-black-200">{detail.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
