import type { NextPage } from "next";
import { ProductCards, Navbar, Spacer } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Spacer />
      <ProductCards />
    </>
  );
};

export default Home;
