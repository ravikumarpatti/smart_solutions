// import "server-only";
"use client";
// Define the Status type
export type Status = "active" | "inactive" | "archived";

// Define the SelectProduct interface
export interface SelectProduct {
  id: number;
  imageUrl: string;
  name: string;
  status: Status;
  price: number;
  stock: number;
  availableAt: Date;
}

// Dummy data for products with correctly typed status
const dummyProducts: SelectProduct[] = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/64",
    name: "Product 1",
    status: "active",
    price: 19.99,
    stock: 100,
    availableAt: new Date(),
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/64",
    name: "Product 2",
    status: "inactive",
    price: 29.99,
    stock: 50,
    availableAt: new Date(),
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/64",
    name: "Product 3",
    status: "archived",
    price: 39.99,
    stock: 0,
    availableAt: new Date(),
  },
];

// Dummy schema
export const insertProductSchema = {}; // Placeholder for consistency

// getProducts function
export async function getProducts(
  search: string,
  offset: number
): Promise<{
  products: SelectProduct[];
  newOffset: number | null;
  totalProducts: number;
}> {
  let filteredProducts = dummyProducts;

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    return {
      products: filteredProducts,
      newOffset: null,
      totalProducts: filteredProducts.length,
    };
  }

  if (offset === null) {
    return { products: [], newOffset: null, totalProducts: 0 };
  }

  const productsPerPage = 5;
  const paginatedProducts = filteredProducts.slice(
    offset,
    offset + productsPerPage
  );
  const newOffset =
    paginatedProducts.length >= productsPerPage
      ? offset + productsPerPage
      : null;

  return {
    products: paginatedProducts,
    newOffset,
    totalProducts: filteredProducts.length,
  };
}

// deleteProductById function
export async function deleteProductById(id: number) {
  const index = dummyProducts.findIndex((product) => product.id === id);
  if (index !== -1) {
    dummyProducts.splice(index, 1);
  }
}
