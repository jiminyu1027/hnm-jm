import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showProductDetail = () => {
    navigate(`/products/${item.id}`);
  };

  return (
    <div className="productCard" onClick={showProductDetail}>
      <img className="cardImgSize" src={item?.img} />
      <div className="subText">
        {item?.choice == true ? "concious choice" : <div>&nbsp;</div>}
      </div>
      <div>{item?.title}</div>
      <div>\{item?.price}</div>
      <div className="subText">
        {item?.new == true ? "신제품" : <div>&nbsp;</div>}
      </div>
    </div>
  );
};

export default ProductCard;
