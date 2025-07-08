import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import type { Product } from "../types/product";

const ProductList = (props: { loading: boolean; products: Product[] }) => {
  // Todo: check if loading is really needed here, after parent component changes - Tejasvita
  const { loading, products } = props;
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50, sortable: false },
    {
      field: "image",
      headerName: "Image",
      renderCell: (params) => (
        <Stack alignItems="center" flexDirection="row">
          <img src={params.row?.image} height={52} width={45} />
        </Stack>
      ),
    },
    {
      field: "title",
      headerName: "Title",
      flex: 2,
      sortable: false,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2,
      sortable: false,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      type: "number",
    },
    {
      field: "rating",
      headerName: "Rating",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Grid container alignItems={"center"}>
          <Rating
            readOnly
            name="half-rating"
            defaultValue={params.row?.rating?.rate}
            precision={0.1}
          />
          {params.row?.rating?.count}
        </Grid>
      ),
    },
  ];

  return (
    <DataGrid
      loading={loading}
      columns={columns}
      rows={products}
      hideFooter
      disableColumnMenu
      disableColumnSorting
    />
  );
};

export default ProductList;
