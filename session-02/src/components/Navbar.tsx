import { Link } from "react-router";
import Container from "./Container";
import { LuShoppingCart, LuUser } from "react-icons/lu";
import { FcShop } from "react-icons/fc";

// session 2
const navItems = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/shop" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

const btns = [
  { svg: <LuUser size={20} />, link: "/auth" },
  { svg: <LuShoppingCart size={20} />, link: "/cart" },
];

export default function Navbar() {
  return (
    <div className="w-full">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center w-24">
            <FcShop className="my-4" size={60} />
          </div>

          <ul className="flex gap-15">
            {navItems.map((nav) => (
              <li
                className="text-xl text-orange-400 text-shadow-sm text-shadow-orange-500 font-semibold cursor-pointer transition duration-300 hover:text-orange-300"
                key={nav.link}
              >
                <Link to={nav.link}>{nav.title}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex justify-end gap-8">
            {btns.map((btn) => (
              <li
                className="w-6 transition duration-200 hover:scale-120"
                key={btn.link}
              >
                <Link to={btn.link}>{btn.svg}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
