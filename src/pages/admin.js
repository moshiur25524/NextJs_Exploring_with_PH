import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import RootLayout from "../../components/layouts/RootLayout";
import Head from "next/head";
import Image from "next/image";

const AdminPage = () => {
  return (
    <div>
      <Head>
        <title>Admin Page</title>
        <meta
          name="Admin Page"
          description="this admin page is created with next.js"
        />
      </Head>
      <h1>This is an Admin Page</h1>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElhmAKGuu5LbLrNMhleU9h6trNPsAui_i2Q&usqp=CAU"
        alt="Admin image with Next.js tag"
        width={500}
        height={500}
      />
    </div>
  );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
