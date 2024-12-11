import { useEffect, useState } from "react";
import axios from 'axios';
import { FadeLoader } from 'react-spinners';

export function ProfilePage() {
    const [user, setUser] = useState(null);
    const Token = (localStorage.getItem('jwt_token'));
    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}user/profile`, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                    },
                });
                console.log(response.data);
                setUser(response.data);
            } catch (error) {
                console.error(error.response.data.message);
            }
        };

        getProfile();
    }, []);

    return (
        <>
            <div>
                {user ? (
                    <div> <div className="flex flex-col justify-center items-center p-8">
                        <img
                            src="./image.png"
                            alt="Avatar"
                            className="w-32 h-32 rounded-full object-cover"
                        />
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">{user.username}</h2> {/* Tăng kích thước tên */}
                        <p className="text-lg text-gray-500 mt-2">
                            Ngày tham gia: {new Intl.DateTimeFormat('vi-VN', { dateStyle: 'short' }).format(new Date(user.createdAt))}
                        </p>
                    </div></div>
                ) : (
                    <div className="flex justify-center items-center mt-5">
                        <FadeLoader />
                    </div>
                )}
            </div>

        </>

    );
}
