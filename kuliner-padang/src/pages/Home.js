import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Keranjangs, ListCategories, Menus } from "../components";
import ModalMenu from "../components/ModalMenu";
import { API_URL } from "../others/api";
import axios from "axios";
import swal from "sweetalert";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoriYangDipilih: "Makanan",
      keranjangs: [],
      showModal: false,
      menuDetail: false,
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoriYangDipilih)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error", error);
      });

    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  componentDidUpdate(prevState) {
    if(this.state.keranjangs !== prevState.keranjangs) {
      axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log("Error", error);
      });
    }
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: [],
    });

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  handleShow = (menu) => {
    this.setState({
      showModal: true,
      menuDetail: menu,
      
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  masukKeranjang = (value) => {
    this.handleClose();

    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };

          axios
            .post(API_URL + "keranjangs", keranjang)
            .then((res) => {
              swal({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang " + keranjang.product.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log("Error", error);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, keranjang)
            .then((res) => {
              swal({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang " + keranjang.product.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log("Error", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  render() {
    const { menus, categoriYangDipilih, keranjangs } = this.state;
    return (
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories
                changeCategory={this.changeCategory}
                categoriYangDipilih={categoriYangDipilih}
              />
              <Col className="overflow-auto menu mt-3">
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row className="">
                  {menus &&
                    menus.map((menu) => (
                      <Menus
                        key={menu.id}
                        menu={menu}
                        handleShow={this.handleShow}
                      />
                    ))}
                </Row>
                <ModalMenu
                handleClose={this.handleClose}
                {...this.state}
                masukKeranjang={this.masukKeranjang}
              />
              </Col>
              <Keranjangs keranjangs={keranjangs} {...this.props}/>
            </Row>
          </Container>
        </div>
    );
  }
}
