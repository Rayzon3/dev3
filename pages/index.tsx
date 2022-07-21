import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black">
      <Head>
        <title>Dev3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold text-white">
          Welcome to{" "}
          <a className="text-emerald-400" href="https://nextjs.org">
            Dev3!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          <code className="rounded-md p-3 font-mono text-lg bg-slate-500 text-white">
            Place to interact for programmers.
          </code>
        </p>

        <div className="pt-8">
          <Link href="/login">
            <button className="rounded-full bg-emerald-500 px-8 p-2 m-2">
              Login
            </button>
          </Link>
          <Link href="register">
            <button className="rounded-full bg-emerald-500 px-8 p-2 m-2">
              Register
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
