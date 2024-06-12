import { Navigate } from "react-router-dom";
import { useIsSessionQuery } from "../services/userApi";
import PageLoader from "../components/PageLoader";
import ErrorMsg from "../components/ErrorMsg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
import { useState } from "react";

const PrivateRoute = ({ children }) => {
  const [pageLoading, setPageLoading] = useState(true);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const { data, isLoading, error } = useIsSessionQuery(userId, {
    skip: !userId,
  });

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data]);

  useEffect(() => {
    if (!isLoading) {
      setPageLoading(false);
    }
  }, [isLoading]);

  if (isLoading || pageLoading) {
    return <PageLoader />;
  }
  if (error) {
    return <Navigate to="/login"></Navigate>;
  }

  if (data?.isSession) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
