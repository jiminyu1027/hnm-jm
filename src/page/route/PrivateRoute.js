import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProductDetail from "../ProductDetail";

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};
//authenticate이 true다(로그인이 되어있다)면? 상품디테일페이지를 볼수있다.
//authenticate이 false다(로그인이 되어있지 않다)면? 상품디테일페이지를 볼수 없다. login페이지로 경로를 튕긴다.

export default PrivateRoute;
