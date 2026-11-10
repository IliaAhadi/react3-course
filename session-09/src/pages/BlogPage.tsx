import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Container from "../components/Container";
import type { IPost } from "../types";
import { useParams } from "react-router";
import Spinner from "../components/Spinner";
import { BiDislike, BiLike } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

// session 9
export default function BlogPage() {
  const params = useParams();

  const [blogItem, setBlogItem] = useState<IPost | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
        if (!res.ok) throw new Error("404 Page not found");
        const data = await res.json();
        // console.log(data);

        setBlogItem(data);
        setError("");
      } catch (err) {
        setError((err as Error).message);
        console.log((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, [params.id]);

  if (loading)
    return (
      <div className="flex justify-center items-center p-20">
        <Spinner />
      </div>
    );

  if (error) return <p className="p-20">{error}.</p>;

  return (
    <div>
      <Banner title={blogItem?.title || ""} />

      <Container>
        <div className="flex flex-col justify-center mx-auto mt-25 mb-15 gap-12">
          <h1 className="text-4xl font-bold">{blogItem?.title}</h1>

          <p className="text-xl text-gray-500 leading-11">{blogItem?.body}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <span className="text-2xl flex justify-center items-center flex-col">
                <BiLike /> {blogItem?.reactions.likes}
              </span>

              <span className="text-2xl flex justify-center items-center flex-col">
                <BiDislike /> {blogItem?.reactions.dislikes}
              </span>
            </div>

            <div>
              <span className="text-2xl flex justify-center items-center flex-col">
                <BsEye color="black" size={20} /> {blogItem?.views}
              </span>
            </div>
          </div>

          <span className="flex gap-2">
            tags:
            <ul className="flex gap-2">
              {blogItem?.tags.map((tag) => (
                <li key={tag}>{tag},</li>
              ))}
            </ul>
          </span>
        </div>
      </Container>
    </div>
  );
}

// end of session 9
