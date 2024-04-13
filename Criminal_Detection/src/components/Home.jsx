import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

function Home({ setPage }) {
  return (
    <>
      <Header setPage={setPage}></Header>
      <SideBar></SideBar>
    </>
  );
}

export default Home;
