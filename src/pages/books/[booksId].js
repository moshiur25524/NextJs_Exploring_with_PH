import { useRouter } from "next/router";
import React from "react";

const BookDynamicPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>The Details of Book: {router.query.booksId}</h1>
    </div>
  );
};

export default BookDynamicPage;
