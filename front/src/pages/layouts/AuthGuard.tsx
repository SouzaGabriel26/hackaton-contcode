import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

interface AuthGuardProps {
  isPrivate: boolean,
}

export const AuthGuard = ({ isPrivate }: AuthGuardProps) => {
  const { isSignedIn } = useAuthContext();

  if (!isSignedIn && isPrivate) {
    return <Navigate to="/signin" replace />
  }

  if (isSignedIn && !isPrivate) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}
