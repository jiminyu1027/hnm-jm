import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row, Dropdown } from "react-bootstrap";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/jiminyu1027/hnm-jm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="pdImg">
              <img src={product?.img} />
            </div>
          </Col>
          <Col>
            <p className="pdTitle">{product?.title}</p>
            <p className="pdPrice">\ {product?.price}</p>
            <p className="subText">
              {product?.choice == true ? "concious choice" : <div>&nbsp;</div>}
            </p>
            <p>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  사이즈 선택
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </p>
            <Button variant="dark" className="addBtn">
              추가
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
