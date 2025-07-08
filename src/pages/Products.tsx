import { useProducts } from "../hooks/useProducts";
import type { Product } from "../types/product";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { Button, Grid } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Products = () => {
  const { products, loading, error } = useProducts();
  const [view, setView] = useState<"grid" | "table">("table");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const sortedProducts = [...(products || [])].sort(
    (a: Product, b: Product) => {
      if (sortDirection === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    }
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <ButtonGroup aria-label="Basic button group">
          <Button
            variant={view === "table" ? "contained" : "outlined"}
            startIcon={<FormatListBulletedIcon />}
            onClick={() => setView("table")}
          >
            Table
          </Button>
          <Button
            variant={view === "grid" ? "contained" : "outlined"}
            startIcon={<GridViewIcon />}
            onClick={() => {
              setView("grid");
            }}
          >
            Grid
          </Button>
        </ButtonGroup>

        <ButtonGroup aria-label="Basic button group">
          <Button
            variant={sortDirection === "asc" ? "contained" : "outlined"}
            startIcon={<ArrowUpwardIcon />}
            onClick={() => setSortDirection("asc")}
          >
            Price ASC
          </Button>
          <Button
            variant={sortDirection === "desc" ? "contained" : "outlined"}
            startIcon={<ArrowDownwardIcon />}
            onClick={() => {
              setSortDirection("desc");
            }}
          >
            Price DESC
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid
        container
        flexDirection={view === "table" ? "column" : "row"}
        spacing={2}
      >
        {view === "table" ? (
          <ProductList loading={loading} products={sortedProducts} />
        ) : products && products.length > 0 ? (
          (sortedProducts as Product[]).map((product: Product) => (
            <ProductCard key={product.id} product={product} loading={loading} />
          ))
        ) : (
          <div>No products available</div>
        )}
      </Grid>
    </>
  );
};

export default Products;
