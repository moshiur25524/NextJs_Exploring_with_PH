import React from "react";
import RootLayout from "../../components/layouts/RootLayout";

const Contact = () => {
  return (
    <div>
      <h1>This is Contact page</h1>
    </div>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
