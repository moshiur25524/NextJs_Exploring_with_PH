import { useRouter } from "next/router";
import React from "react";

const productDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is Prouduct Dynamic page: {router.query.productId}</h1>
    </div>
  );
};

export default productDetails;
