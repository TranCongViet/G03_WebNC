import { Routes, Route, Navigate } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { Header } from '../components/Header';
import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';
import { HomePage } from '../pages/HomePage';
import { ProfilePage } from '../pages/ProfilePage';
import { PrivateRoute } from '../components/PrivateRouter';
import { useAuth } from '../context/AuthContext';
import { DetailPage } from '../pages/DetailPage';
import { SearchPage } from '../pages/SearchPage';
export function User() {
    const { user } = useAuth();
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
                <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUpPage />} />
                <Route path="/movie/:id" element={<DetailPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/profile" element={
                    <PrivateRoute>
                        <ProfilePage />
                    </PrivateRoute>
                } />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}