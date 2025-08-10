import { useState } from "react";
import { Button, TextField, Box, Typography, Paper } from "@mui/material";
import Card from "@/src/components/Card/Card";
import Grid from "@mui/material/Grid";
import { Product } from "@/src/types/product";
import useCartStore from "@/src/stores/cartStore";

interface BudgetOptimizerProps {
  products: Product[];
}

export default function BudgetOptimizer({ products }: BudgetOptimizerProps) {
  const [budget, setBudget] = useState<number>(150);
  const [bestCombination, setBestCombination] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const { addToCart } = useCartStore();

  const findBestCombination = (products: Product[], budget: number) => {
    const n = products.length;
    const dp: number[][] = Array(n + 1)
      .fill(0)
      .map(() => Array(budget + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= budget; w++) {
        if (products[i - 1].price <= w) {
          dp[i][w] = Math.max(
            dp[i - 1][w],
            dp[i - 1][w - products[i - 1].price] + products[i - 1].price
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }

    // Recuperar los productos seleccionados
    let res = dp[n][budget];
    let w = budget;
    const selectedProducts: Product[] = [];

    for (let i = n; i > 0 && res > 0; i--) {
      if (res !== dp[i - 1][w]) {
        selectedProducts.push(products[i - 1]);
        res -= products[i - 1].price;
        w -= products[i - 1].price;
      }
    }

    return selectedProducts;
  };

  const handleCalculate = () => {
    const combination = findBestCombination(products, budget);
    setBestCombination(combination);
    setTotal(combination.reduce((sum, item) => sum + item.price, 0));
  };

  return (
    <Paper elevation={3} sx={{ p: 3, my: 4, background: "#fff" }}>
      <Box sx={{ diplay: "flex" }}>
        <Typography variant="h5" gutterBottom>
          Optimizador de Presupuesto
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { smallsMobile: "column", mobile: "row" },
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <TextField
            label="Presupuesto disponible"
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            InputProps={{ inputProps: { min: 0 } }}
            sx={{ width: { smallsMobile: "100%", mobile: "auto" } }}
          />
          <Button
            variant="contained"
            onClick={handleCalculate}
            sx={{
              height: "56px",
              width: { smallsMobile: "100%", mobile: "auto" },
            }}
          >
            Calcular Combinación
          </Button>
        </Box>
      </Box>

      {bestCombination.length > 0 && (
        <>
          <Typography variant="h6" gutterBottom>
            Mejor combinación <strong>Total: </strong> ${total}
          </Typography>
          <Grid container spacing={2} alignItems="center" sx={{ my: 4 }}>
            {bestCombination.map((product) => (
              <Grid size={{ smallMobile: 12, mobile: 6, laptop: 4 }}>
                <Card
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Paper>
  );
}
