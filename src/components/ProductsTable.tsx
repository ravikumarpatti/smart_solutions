"use client";

import { useRouter } from "next/navigation";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
} from "@mui/material";
import { Product } from "./Product";
import { SelectProduct } from "../../lib/db";

interface ProductsTableProps {
  products: SelectProduct[];
  offset: number;
  totalProducts: number;
}

export const ProductsTable: React.FC<ProductsTableProps> = ({
  products,
  offset,
  totalProducts,
}) => {
  const router = useRouter();
  const productsPerPage = 5;

  const prevPage = () => {
    router.back();
  };

  const nextPage = () => {
    router.push(`/?offset=${offset}`, { scroll: false });
  };

  return (
    <Card>
      <CardHeader>
        <Typography variant="h6">Products</Typography>
        <Typography variant="body2" color="textSecondary">
          Manage your products and view their sales performance.
        </Typography>
      </CardHeader>
      <CardContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="hidden sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell className="hidden md:table-cell">Price</TableCell>
                <TableCell className="hidden md:table-cell">
                  Total Sales
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  Created at
                </TableCell>
                <TableCell>
                  <span className="sr-only">Actions</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="caption" color="textSecondary">
            Showing{" "}
            <strong>
              {Math.min(offset - productsPerPage, totalProducts) + 1}-{offset}
            </strong>{" "}
            of <strong>{totalProducts}</strong> products
          </Typography>
          <Box>
            <Button
              onClick={prevPage}
              variant="outlined"
              size="small"
              startIcon={<ChevronLeftIcon />}
              disabled={offset === productsPerPage}
            >
              Prev
            </Button>
            <Button
              onClick={nextPage}
              variant="outlined"
              size="small"
              endIcon={<ChevronRightIcon />}
              disabled={offset + productsPerPage > totalProducts}
            >
              Next
            </Button>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};
