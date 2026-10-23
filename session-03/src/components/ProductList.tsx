import { useEffect, useState } from "react";
import type { IProduct } from "../types";

// session 3
const productIds = [186, 182, 178];

export default function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(
        "https://dummyjson.com/products?limit=20&skip=172",
      );
      const data = await res.json();
      // console.log(data);

      const filteredProducts = data.products.filter((product: IProduct) =>
        productIds.includes(product.id),
      );

      setProducts(filteredProducts);
    }
    getProducts();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 items-center gap-10 mb-20 min-h-80">
        {products.map((product) => (
          <div
            className="flex flex-col justify-center items-center hover:scale-95 transition duration-500 hover:bg-orange-50 text-orange-400 h-full"
            key={product.id}
          >
            <img className="h-60" src={product.thumbnail} alt={product.title} />
            <h4 className="text-2xl font-medium ml-5 mb-5 text-center capitalize">
              {product.category.split("-")[1]}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
// end of session 3
