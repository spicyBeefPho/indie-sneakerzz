import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { fetchProducts } from "../../lib/fetchProducts";
import { Product } from "../../typings";

interface Props {
  products: Product[];
}

const Home = ({ products }: Props) => {
  console.log(products);

  return (
    <>
      <Head>
        <title>Indie Sneakerzz</title>
      </Head>

      <main className="mx-auto max-h-screen lg:max-w-3xl flex flex-row flex-wrap mt-12">
        <div className="mx-auto">Example snaker</div>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
  };
};
