import { SignUp } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Goaltiath Sign-in page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen justify-center bg-neutral-900 py-[20%]">
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      </main>
    </>
  );
};

export default Home;
