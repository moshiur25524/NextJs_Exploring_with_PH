import React from "react";
import RootLayout from "../../../components/layouts/RootLayout";

const blogs = () => {
  return (
    <div>
      <h1>This is a blog page</h1>
    </div>
  );
};

export default blogs;

blogs.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
