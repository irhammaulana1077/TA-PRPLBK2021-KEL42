import React, { useState } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import { numberWithCommas } from "../others/numbercommas";

const ModalMenu = ({
  showModal,
  handleClose,
  menuDetail,
  masukKeranjang
}) => {
  const [showDetail, setShowDetail] = useState(false)
  
  const showDetails = () => setShowDetail(!showDetail)

  if (menuDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {menuDetail.nama}{" "}
            <strong>
              (Rp. {numberWithCommas(+menuDetail.harga)})
            </strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Card className="shadow">
          <Card.Img
            variant="top"
            src={
              "assets/images/" +
              menuDetail.category.nama.toLowerCase() +
              "/" +
              menuDetail.gambar
            }
          />
          <Card.Body>
          <Button variant="outline-info" size="sm" onClick={showDetails}>
          {showDetail ? 'Tutup' : 'Lihat'} Deskripsi
          </Button>
          
          { showDetail ?
          <Form style={{marginTop: '10px'}}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>{menuDetail.keterangan}</Form.Label>
            </Form.Group>
          </Form>
          : null}
          
          </Card.Body>
        </Card>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={() => masukKeranjang(menuDetail)}>
                Tambah ke Keranjang
            </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalMenu;
