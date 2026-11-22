import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Container from "../components/Container";
import BlogItem from "../components/BlogItem";
import type { IPost } from "../types";
import Spinner from "../components/Spinner";

// session 8
export default function Blog() {
  const [blogs, setBlogs] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/posts");
        if (!res.ok) throw new Error("Something went wrong!");
        const data = await res.json();
        // console.log(data)

        setBlogs(data.posts);
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
      <Banner title="Blog" />
      <Container>
        {loading && (
          <div className="flex justify-center items-center p-20">
            <Spinner size={50} />
          </div>
        )}
        {blogs.length > 0 && (
          <div className="grid grid-cols-2 items-center gap-20 my-20">
            {error && <p>{error}.</p>}
            {blogs.map((blog) => (
              <BlogItem {...blog} key={blog.id} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
// end of session 8
