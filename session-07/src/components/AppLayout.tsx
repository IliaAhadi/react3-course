import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

// session 2
export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* session 6 */}
      <Footer />
      {/* end of session 6 */}
    </>
  );
}
