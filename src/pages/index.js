import React from "react";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/containers/Layout";

const Home = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="container mx-auto lg:max-w-screen-xl">
        <h1 className="text-2xl font-black">
          {user && <span className="ml-2">سلام {user.name}،</span>}
          <span>به Next-App خوش آمدی!</span>
        </h1>
      </div>
    </Layout>
  );
};

export default Home;
