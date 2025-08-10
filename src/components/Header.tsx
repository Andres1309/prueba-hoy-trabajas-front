import {
  Box,
  Typography,
  Button,
  Badge,
  ClickAwayListener,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import useCartStore from "../stores/cartStore";
import CartTable from "./CartTable/CartTable";

const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [showCart, setShowCart] = useState(false);
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price, 0),
    [cart]
  );

  return (
    <Box component="header" py={5} bgcolor="primary.main" color="white">
      <Box
        sx={{
          maxWidth: "xl",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mx: 4,
        }}
      >
        <Box sx={{ width: { xs: "60%", md: "20%" } }}>
          <a href="/">
            <Box
              component="img"
              src="/img/logo.svg"
              alt="imagen logo"
              sx={{ width: "100%", height: "auto" }}
            />
          </a>
        </Box>

        <ClickAwayListener onClickAway={() => setShowCart(false)}>
          <Box
            display="flex"
            alignItems="center"
            position="relative"
            sx={{ cursor: "pointer" }}
            onClick={() => setShowCart(!showCart)}
          >
            <Badge
              badgeContent={cart.length}
              color="info"
              overlap="circular"
              sx={{
                "& .MuiBadge-badge": {
                  right: 1,
                  top: 1,
                  border: `2px solid`,
                  borderColor: "primary.main",
                  bgcolor: "secondary",
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            >
              <Box
                component="img"
                src="/img/carrito.png"
                alt="imagen carrito"
                sx={{ width: 40, height: 40 }}
              />
            </Badge>

            {showCart && (
              <Box
                position="absolute"
                top="100%"
                right={0}
                mt={2}
                bgcolor="white"
                color="black"
                p={2}
                boxShadow={3}
                borderRadius={2}
                width={{ smallsMobile: "80vw", md: 500 }}
                zIndex={9999}
              >
                {isEmpty ? (
                  <Typography align="center">El carrito está vacío</Typography>
                ) : (
                  <CartTable
                    cartTotal={cartTotal}
                    cart={cart}
                    removeFromCart={removeFromCart}
                  />
                )}

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </Button>
              </Box>
            )}
          </Box>
        </ClickAwayListener>
      </Box>
    </Box>
  );
};

export default Header;
