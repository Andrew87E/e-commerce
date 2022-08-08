import { NextPage } from "next";
import { Navbar, Spacer } from "../components";

const cart: NextPage = () => {
  return (
    <>
      <Navbar />
      <Spacer />
      <div className="text-white mt-5">Cart</div>
    </>
  );
};

export default cart;
