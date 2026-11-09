import type { IProduct } from "../types";

// session 4
export default function Product({ product }: { product: IProduct }) {
  return (
    <div className="bg-orange-50 text-start pb-5 transition duration-300 hover:bg-orange-100 min-h-90 animate-fadeIn">
      <img
        className="w-full h-2/3"
        src={product.images[0]}
        alt={product.title}
      />
      <h2 className="text-2xl font-bold px-5 line-clamp-1">{product.title}</h2>
      <p className="text-gray-500 px-5 my-3 line-clamp-2">
        {product.description}
      </p>
      <span className="font-bold px-5">${product.price}</span>
    </div>
  );
}
// end of session 4
