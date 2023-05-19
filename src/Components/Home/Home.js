import React from "react";
import useTitle from "../../Shared/TitleChange/TitleChange";
import PageAnalysis from "./PageAnalysis/PageAnalysis";
import HomeContact from "./HomeContact/HomeContact";

const Home = () => {
  useTitle("Home");

  return (
    <div className="lg:px-32 px-8">
      <p>Home</p>

      <PageAnalysis></PageAnalysis>
      <HomeContact></HomeContact>
    </div>
  );
};

export default Home;
