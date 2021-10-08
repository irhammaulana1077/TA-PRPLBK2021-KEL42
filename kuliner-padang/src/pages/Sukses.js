import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../others/api";

export default function Sukses () {
  useEffect(() => {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function(item) {
            return axios
                .delete(API_URL+"keranjangs/"+item.id)
                .then((res) => console.log(res))
                .catch((error) => console.log(error))
        })
      })
      .catch((error) => {
        console.log("Error", error);
      });
    }, []);

    return (
      <div className="mt-4 text-center">
        <Image src="assets/images/sukses.jpg" width="500" />
        <h2>Pemesanan Sukses</h2>
        <p>Terimakasih Sudah Memesan!</p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
}
