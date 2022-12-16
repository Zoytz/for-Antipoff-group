import React, {FC, ReactNode} from "react";
import { Navigate } from "react-router-dom";

type PropsType = {
  isLoggedIn: boolean
  children: ReactNode
}

const ProtectedRoute:FC<PropsType> = React.memo(() => {
  return (
    <></>
    // isLoggedIn ? children : <Navigate to="/movies" />
  );
});

export default ProtectedRoute;