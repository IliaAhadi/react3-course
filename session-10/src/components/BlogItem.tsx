import { BiDislike, BiLike } from "react-icons/bi";
import type { IPost } from "../types";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router";

// session 8
function Span({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center text-sm text-gray-500 font-medium gap-2">
      {children}
    </span>
  );
}

export default function BlogItem({ ...blog }: IPost) {
  return (
    <div>
      <h4 className="text-xl font-bold line-clamp-1">{blog.title}</h4>
      <p className="text-gray-500 my-3 line-clamp-2">{blog.body}</p>
      <div className="flex items-center gap-10 mt-3 mb-7">
        <Span>
          <BiLike color="black" size={20} />
          {blog.reactions.likes}
        </Span>

        <Span>
          <BiDislike color="black" size={20} />
          {blog.reactions.dislikes}
        </Span>

        <Span>
          <BsEye color="black" size={20} />
          {blog.views}
        </Span>
      </div>
      <button className="text-sm underline py-1 hover:text-orange-400 cursor-pointer transition duration-300">
        <Link to={`/blog/${blog.id}`}>Read more</Link>
      </button>
    </div>
  );
}
// end of session 8
