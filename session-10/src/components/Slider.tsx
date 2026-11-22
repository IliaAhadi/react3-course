import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { IProduct } from "../types";
import Spinner from "./Spinner";
import "swiper/css";

// session 5
export default function Slider() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getImages() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://dummyjson.com/products?limit=6&skip=189",
        );
        if (!res.ok) throw new Error("Something went wrong!");
        const data = await res.json();

        const imgs = data.products.map(
          (product: IProduct) => product.thumbnail,
        );

        setImages(imgs);
        setError("");
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, []);

  return (
    <div className="w-full bg-orange-100 mb-15 flex items-center justify-center gap-60">
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold">
          50+ Luxury products <br />
          available
        </h2>

        <p className="text-gray-600 my-5">
          Soft, stylish clothing made for everyday comfort and confidence.
        </p>
        <button className="bg-orange-400 text-white font-medium  py-3 w-40 cursor-pointer hover:bg-orange-500 transition duration-300">
          Explore More
        </button>
      </div>

      <div className="w-75 me-2 h-100 flex justify-center items-center">
        {loading && <Spinner />}
        {error && <p>{error}</p>}
        {images.length > 0 && (
          <Swiper
            className="rounded-2xl overflow-hidden"
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500 }}
            modules={[Autoplay]}
          >
            {images.map((img) => (
              <SwiperSlide key={img}>
                <img
                  className="w-full h-100 object-cover cursor-grab"
                  src={img}
                  alt={img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
// end of session 5
