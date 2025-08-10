import { Product } from "@/src/types/product";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";

interface CardProps {
  product: Product;
  addToCart?: (productId: number) => Promise<void>;
}

export default function Card({ product, addToCart }: CardProps) {
  const { id, name, image, description, price } = product;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 4,
        boxShadow: 3,
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: "#fff",
        transition: "transform 200ms ease, box-shadow 300ms ease",
        "&:hover": {
          boxShadow: 8,
          transform: "translateY(-2px)",
        },
        "&:hover .card-image": {
          transform: "scale(1.05)",
        },
        "&:hover .price-overlay": {
          opacity: 1,
        },
      }}
    >
      <Grid size={{ smallMobile: 12, mobile: 6, laptop: 4 }}>
        <Box
          className="card-image"
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 1,
          }}
        >
          <Box
            component="img"
            src={`/img/${image}.jpg`}
            alt={`imagen guitarra ${name}`}
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
              transition: "transform 300ms ease",
              cursor: "pointer",
            }}
          />
        </Box>
      </Grid>

      <Grid size={{ smallMobile: 12 }}>
        <Typography
          variant="h6"
          component="h3"
          fontWeight="bold"
          textTransform="uppercase"
          color="text.primary"
          sx={{ mx: 2 }}
        >
          {name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1, mx: 2 }}
        >
          {description}
        </Typography>

        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          sx={{ mb: 2, mx: 2 }}
        >
          ${price}
        </Typography>

        {addToCart && (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => addToCart(id)}
          >
            Agregar al Carrito
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
