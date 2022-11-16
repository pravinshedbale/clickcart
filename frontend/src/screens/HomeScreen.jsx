import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product/Product";
import { useEffect } from "react";

import { listProducts } from "../state/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import Message from "../components/Message/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
