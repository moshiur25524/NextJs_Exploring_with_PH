import React from "react";
import RootLayout from "../../components/layouts/RootLayout";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import DashboardImage from "../assets/download.png";
import Image from "next/image";
import Head from "next/head";

const DashboardPage = () => {
  return (
    <div>
      <Head>
        <title>Dashboard page</title>
        <meta
          name="Dashboard page"
          description="Dashbaord is created with Next.js Head tag"
        />
      </Head>
      <h1>Welcome to my Dashboard</h1>
      <Image src={DashboardImage} alt="Dashboard Image" width="100%" />
    </div>
  );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
