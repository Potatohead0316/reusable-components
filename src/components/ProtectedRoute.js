import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user.user);
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
