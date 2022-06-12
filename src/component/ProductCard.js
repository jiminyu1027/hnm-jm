import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showProductDetail = () => {
    navigate(`/products/${item.id}`);
  };

  return (
    <Card className="productCard" onClick={showProductDetail}>
      <Card.Img src={item?.img}/>
      <Card.Body>
        <div className="subText">
          {item?.choice == true ? "concious choice" : <div>&nbsp;</div>}
        </div>
        <div>{item?.title}</div>
        <div>\{item?.price}</div>
        <div className="subText">
          {item?.new == true ? "신제품" : <div>&nbsp;</div>}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
