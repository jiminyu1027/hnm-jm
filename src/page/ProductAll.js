import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import { productAction } from "../redux/actions/productAction";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProductList = () => {
    let searchQuery = query.get("q") || ""; //검색을 안했을수도 있으니까 q가 없다면 빈값을 넣어준다
    dispatch(productAction.getProducts(searchQuery));
  };

  useEffect(() => {
    getProductList();
  }, [query]);
  //query를 주시하고 있다가 query가 바뀌면 (q=검색한값)을 url에 추가하여 getProductList() 를 재호출

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => {
            return (
              <Col md={3} sm={12} key={item.id}>
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
