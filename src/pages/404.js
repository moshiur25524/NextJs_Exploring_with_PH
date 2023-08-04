import { useRouter } from "next/router";
import React from "react";

const NotFoundpage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <div>
      <img
        src="https://i.ytimg.com/vi/m7ZZNsa0pOA/maxresdefault.jpg"
        alt="notFound page"
        width="100%"
      />
    </div>
  );
};

export default NotFoundpage;
