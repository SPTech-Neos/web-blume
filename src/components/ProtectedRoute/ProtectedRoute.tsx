import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
};

export default function ProtectedRoute({ isAuthenticated, authenticationPath, outlet }: ProtectedRouteProps) {
    return isAuthenticated ? outlet : <Navigate to={authenticationPath} />;
}
