import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SelectForm from "../components/SelectForm";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen w-screen p-4 flex justify-content items-center flex-col text-lg">
        <div className="flex justify-center w-full border-b pb-4">
          <h1>select form demo</h1>
        </div>
        <SelectForm />
      </main>

      <footer className="flex justify-center items-center h-20 bg-gray-700 text-white">
        <a
          href="https://github.com/jeongdxxn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center glow-1"
        >
          go to jeongdxxn
        </a>
      </footer>
    </div>
  );
};

export default Home;
