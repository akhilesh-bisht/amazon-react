import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ setCartItems, cartItems, SearchValue }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (SearchValue.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(SearchValue.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [SearchValue, products]);

  return (
    <section className="container mx-auto mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              setCartItems={setCartItems}
              cartItems={cartItems}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductSection;
