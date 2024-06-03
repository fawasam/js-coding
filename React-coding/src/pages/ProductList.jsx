import React, { useState, useEffect, useContext } from "react";
import Pagination from "../components/Pagination";
import { ThemeContext } from "../context/ThemeProvider";
const ProductList = () => {
  const { toggle, toggleTheme } = useContext(ThemeContext);

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
      );
      const responseData = await response.json();
      if (responseData && responseData.products) {
        setProducts(responseData.products);
        setTotal(responseData.total);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [page]);
  return (
    <div className={"product-list-container"}>
      <h1 className={"product-list-title"}>Product List</h1>
      <button onClick={() => toggleTheme(!toggle)}>
        {toggle ? "dark" : "light"}
      </button>
      <ul className={"product-list"}>
        {products && products.length
          ? products.map((product) => (
              <li key={product.id} className={"products"}>
                <img src={product.thumbnail} alt={product.title} />
                <span style={{ fontWeight: "bold" }}>{product.title}</span> - $
                {product.price}
              </li>
            ))
          : "Loading..."}
      </ul>
      <Pagination
        products={products}
        total={total}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default ProductList;
