import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../others/numbercommas";

const Menus = ({ menu, handleShow }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow h-100" onClick={() => handleShow(menu)}>
        <Card.Img
          variant="top"
          src={
            "assets/images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body className="h-30">
          <Card.Title>{menu.nama}</Card.Title>
          <Card.Text>Rp. {numberWithCommas(+menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
