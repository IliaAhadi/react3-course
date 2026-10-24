import { useEffect, useState } from "react";
import type { IProduct } from "../types";
import { ImSpinner8 } from "react-icons/im";

// session 3
const productIds = [186, 182, 178];

export default function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://dummyjson.com/products?limit=20&skip=172",
        );
        if (!res.ok) throw new Error("Something went wrong!");
        const data = await res.json();
        // console.log(data);

        const filteredProducts = data.products.filter((product: IProduct) =>
          productIds.includes(product.id),
        );

        setProducts(filteredProducts);
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
    <div>
      <div className="mb-20 min-h-80 flex justify-center items-center">
        {loading && (
          <ImSpinner8 className="animate-spin text-orange-500" size={60} />
        )}
        {error && <p>{error}.</p>}
        {products.length > 0 && (
          <div className="grid grid-cols-3 items-center gap-10 w-full">
            {products.map((product) => (
              <div
                className="flex flex-col justify-center items-center hover:scale-95 transition duration-500 hover:bg-orange-50 text-orange-400 h-full"
                key={product.id}
              >
                <img
                  className="h-60"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <h4 className="text-2xl font-medium ml-5 mb-5 text-center capitalize">
                  {product.category.split("-")[1]}
                </h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
// end of session 3
