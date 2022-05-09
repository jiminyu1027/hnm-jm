import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProductList = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/jiminyu1027/hnm-jm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProductList();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item, index) => {
            return (
              <Col lg={3} md={3} key={index}>
                <ProductCard item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
