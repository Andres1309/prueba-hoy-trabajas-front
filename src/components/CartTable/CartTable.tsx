import { Product } from "@/src/types/product";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

interface CartTableProps {
  cart: Product[];
  cartTotal: number;
  removeFromCart: (productId: number) => Promise<void>;
}
const CartTable = ({ cartTotal, cart, removeFromCart }: CartTableProps) => {
  const handleRemove = async (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    await removeFromCart(productId);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ background: "white" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ paddingLeft: 1, paddingRight: 0 }}>
                Imagen
              </TableCell>
              <TableCell sx={{ paddingLeft: 1, paddingRight: 0 }}>
                Nombre
              </TableCell>
              <TableCell sx={{ paddingLeft: 1, paddingRight: 0 }}>
                Precio
              </TableCell>
              <TableCell sx={{ paddingLeft: 0, paddingRight: 0 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product) => (
              <TableRow key={product.id}>
                <TableCell sx={{ paddingLeft: 2, paddingRight: 0 }}>
                  <Box
                    component="img"
                    src={`/img/${product.image}.jpg`}
                    alt="imagen productra"
                    sx={{
                      width: { smallsMobile: 40, mobile: 60 },
                      height: "auto",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ paddingLeft: 1, paddingRight: 0 }}>
                  {product.name}
                </TableCell>
                <TableCell sx={{ paddingLeft: 1, paddingRight: 0 }}>
                  <Typography fontWeight="bold">${product.price}</Typography>
                </TableCell>
                <TableCell sx={{ paddingLeft: 1, paddingRight: 0 }}>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={(e) => handleRemove(e, product.id)}
                  >
                    X
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography align="right" mt={2}>
        Total pagar:{" "}
        <Typography component="span" fontWeight="bold">
          ${cartTotal}
        </Typography>
      </Typography>
    </>
  );
};

export default CartTable;
