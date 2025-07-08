import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import type { Product } from "../types/product";
export default function ProductCard(props: {
  product: Product;
  loading: boolean;
}) {
  const { product, loading } = props;

  if (loading) return <div>Loading...</div>;

  return (
    <Card
      sx={{
        maxWidth: 300,
        padding: "8px 16px",
        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      }}
    >
      <CardHeader
        slotProps={{ title: { sx: { fontSize: "15px" } } }}
        title={<Typography variant="body2">{product.title}</Typography>}
      />
      <CardMedia
        component="img"
        sx={{ width: "100", height: "50" }}
        image={product.image}
        alt="Paella dish"
      />
      <CardContent></CardContent>
      <CardActions sx={{ justifyContent: "space-around" }}>
        <Rating
          readOnly
          name="half-rating"
          defaultValue={product.rating?.rate}
          precision={0.1}
        />
        Rs {product.price}
      </CardActions>
    </Card>
  );
}
