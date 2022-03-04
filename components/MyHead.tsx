import { FC } from "react";
import Head from "next/head";

const MyHead: FC = () => {
  return (
    <>
      <Head>
        <title>Rayner Loh | My Portfolio Website</title>
        <meta
          name="Rayner Loh"
          content="Welcome to my website! I hope you enjoy your stay here and do reach out to me if you would like to chat!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default MyHead;
