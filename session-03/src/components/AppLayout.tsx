import { Outlet } from "react-router";
import Navbar from "./Navbar";

// session 2
export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
