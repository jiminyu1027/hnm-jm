import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  const product = useSelector((state) => state.product.productItem);
  let { id } = useParams();
  const dispatch = useDispatch();

  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
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
