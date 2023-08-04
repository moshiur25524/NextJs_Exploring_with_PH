import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Books = () => {
  return (
    <div>
      <h1>This is Books page</h1>
      <Button type="primary">
        <Link href="/">Back to Home page</Link>
      </Button>
    </div>
  );
};

export default Books;
