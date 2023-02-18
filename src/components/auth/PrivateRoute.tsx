import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function PrivateRoute({ children } : any) {
  const auth = useAuth();
  return auth.currentUser ? children : <Navigate to="/login" />;
}