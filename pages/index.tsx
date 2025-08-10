import { useEffect, useState } from "react";
import Card from "@/src/components/Card/Card";
import useCartStore from "@/src/stores/cartStore";
import { Box, CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Product } from "@/src/types/product";
import api from "@/src/lib/api";
import BudgetOptimizer from "@/src/components/BudgetOptimizer/BudgetOptimizer";

export default function Home() {
  const { addToCart } = useCartStore();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (err) {
        setError("Error al cargar los productos");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <>
      <main className="container-xl mt-5">
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Nuestra Colección
        </Typography>

          <BudgetOptimizer products={products} />

        <Box
          sx={{
            display: { smallsMobile: "flex" },
            justifyContent: "center",
            px: 4,
          }}
        >
          <Grid container spacing={2} alignItems="center" sx={{ my: 4 }}>
            {products.map((product) => (
              <Grid size={{ smallMobile: 12, mobile: 6, laptop: 4 }}>
                <Card
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>
    </>
  );
}
