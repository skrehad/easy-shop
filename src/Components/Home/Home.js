import React from "react";
import useTitle from "../../Shared/TitleChange/TitleChange";
import PageAnalysis from "./PageAnalysis/PageAnalysis";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <p>Home</p>

      <PageAnalysis></PageAnalysis>
    </div>
  );
};

export default Home;
