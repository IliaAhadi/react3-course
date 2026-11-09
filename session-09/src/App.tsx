import { Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import BlogPage from "./pages/BlogPage";

// session 2
export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        {/*session 9*/}
        <Route path="/blog/:id" element={<BlogPage />} />
        {/*end of session 9*/}
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
