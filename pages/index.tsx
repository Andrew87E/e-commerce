import type { NextPage } from "next";
import { ProductCards } from "../components";
import { Navbar } from "../components/navbar/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <ProductCards />
    </>
  );
};

export default Home;
