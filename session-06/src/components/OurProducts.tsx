import { useEffect, useState } from "react";
import type { IProduct } from "../types";
import Product from "./Product";
import Spinner from "./Spinner";

// session 4
export default function OurProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 8);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://dummyjson.com/products?limit=20&skip=172",
        );
        if (!res.ok) throw new Error("Something went wrong!");
        const data = await res.json();
        // console.log(data)

        setProducts(data.products);
        setError("");
      } catch (err) {
        setError((err as Error).message);
        console.log((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-15">
      {loading && <Spinner size={40} />}
      {error && <p>{error}.</p>}
      {products.length > 0 && (
        <>
          <div className="grid grid-cols-4 gap-10">
            {visibleProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>

          <button
            className="text-orange-400 font-medium border border-orange-400 py-3 px-15 cursor-pointer transition duration-300 hover:bg-orange-400 hover:text-white"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </>
      )}
    </div>
  );
}
// end of session 4
