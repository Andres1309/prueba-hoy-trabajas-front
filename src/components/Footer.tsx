import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ py: 5, background: "#7C8772" }}>
      <Typography
        sx={{
          color: "#fff",
          textAlign: "center",
          fontSize: { smallsMobile: 20, mobile: 30 },
        }}
      >
        Realizado por Andrés Ladino
      </Typography>

      <Box
        sx={{
          display: { smallsMobile: "flex" },
          width: "100%",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "20px",
          mt: 3,
        }}
      >
        <a
          href="https://wa.me/573118428832?text=Hola,%20como%20estas?"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          <Box
            sx={{
              width: { xs: 30, md: 25, lg: 35 },
              height: { xs: 30, md: 25, lg: 35 },
              cursor: "pointer",
            }}
          >
            <Box
              component={"img"}
              src={"/img/icon-phone.png"}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </a>

        <a
          href="mailto:andresladino1309@hotmail.com?subject=Consulta&body=Hola,%20como%20estas?"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          <Box
            sx={{
              width: { xs: 30, md: 25, lg: 35 },
              height: { xs: 30, md: 25, lg: 35 },
              cursor: "pointer",
            }}
          >
            <Box
              component={"img"}
              src={"/img/icon-email.png"}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
