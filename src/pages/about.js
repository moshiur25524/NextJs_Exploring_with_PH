import React from "react";
import RootLayout from "../../components/layouts/RootLayout";
import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
        <title>Next About page</title>
      </Head>
      <h1>This is About page</h1>
    </div>
  );
};

export default about;

about.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
