import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../pages/LoadingPage';



const PrivateRoute = ( {children} ) => {
  const { user, loading } = useContext(AuthContext);

  const path = useLocation().pathname;
  // console.log(path);

  if(loading){
    return <LoadingPage></LoadingPage>
  }

  if(user){
    return children;
  }

  return (
    <div>
      <Navigate state={path} to={'/auth/login'}>  </Navigate>
    </div>
  );
};

export default PrivateRoute;