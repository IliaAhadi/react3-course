import { Link } from "react-router";
import Container from "./Container";
import { FcShop } from "react-icons/fc";

// session 6
const navs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  { name: "Contact", link: "/contact" },
];
const help = [
  { name: "Payment option" },
  { name: "Returns" },
  { name: "Privacy Polices" },
];

export default function Footer() {
  return (
    <div>
      <hr className="border-gray-300 mb-15" />
      <Container>
        <div className="grid grid-cols-6 gap-10">
          <div className="flex flex-col col-span-2 gap-8">
            <h3 className="text-3xl font-bold flex items-center">
              <FcShop className="me-4 inline-block" size={60} />
              My Shop
            </h3>
            <p className="text-gray-500">
              A modern shop website showcasing clothing with easy browsing,
              secure checkout, and fast delivery.
            </p>
          </div>
          <div>
            <h3 className="mb-12">Links</h3>

            <ul className="flex flex-col gap-10 text-gray-500">
              {navs.map((nav) => (
                <li className="cursor-pointer transition duration-300 hover:text-orange-400 ">
                  <Link to={nav.link}>{nav.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-12">Help</h3>
            <ul className="flex flex-col gap-10 text-gray-500">
              {help.map((item) => (
                <li className="cursor-pointer transition duration-300 hover:text-orange-400 ">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="mb-10">Newsletter</h3>
            <div className="flex gap-5">
              <input
                type="text"
                className="border-b border-b-gray-300 py-1 outline-none focus:border-b-orange-400 placeholder:Enter your email..."
              />
              <button className="border-b border-b-gray-300 cursor-pointer text-sm font-medium text-gray-500 hover:text-orange-400 transition duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mt-15" />
        <p className="font-medium my-10">
          {new Date().getFullYear()} My Shop &copy;All right revered
        </p>
      </Container>
    </div>
  );
}

// end of session 6
