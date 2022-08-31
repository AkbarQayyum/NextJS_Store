import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
export const getStaticProps = async () => {
  let cart = await fetch("http://localhost:3000/api/get");
  let data = await cart.json();

  return {
    props: {
      data,
    },
  };
};

export default function Cart({ data }) {
  let [state, setstate] = useState(data);
  function fet() {
    axios.get("/api/get").then((res) => {
      setstate(res.data);
    });
  }
  function del(id) {
    let obj = { id: id };
    axios.post("/api/del", obj).then((res) => {
      console.log(res);
      fet();
    });
  }
  return (
    <div>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", margin: "20px auto" }}
      >
        Cart Items
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Product ID
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Product Name
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Product Price
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((m, i) => {
              return (
                <TableRow key={i}>
                  <TableCell sx={{ textAlign: "left" }}>{m.p_id}</TableCell>
                  <TableCell sx={{ textAlign: "left" }}>{m.p_name}</TableCell>
                  <TableCell sx={{ textAlign: "left" }}>{m.p_price}</TableCell>
                  <TableCell sx={{ textAlign: "left" }}>{m.quantity}</TableCell>
                  <TableCell sx={{ textAlign: "left" }}>{m.total}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        del(m._id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
