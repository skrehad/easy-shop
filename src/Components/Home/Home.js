import React from "react";
import useTitle from "../../Shared/TitleChange/TitleChange";
import PageAnalysis from "./PageAnalysis/PageAnalysis";
import HomeContact from "./HomeContact/HomeContact";
import MainSection from "./MainSection/MainSection";
import HomeBlog from "./HomeBlog/HomeBlog";
import Services from "./Services/Services";
import Carousel from "./Carousel/Carousel";
import OfferSection from "./OfferSection/OfferSection";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";
import HomeReview from "./HomeReview/HomeReview";

const Home = () => {
  useTitle("Home");

  return (
    <div className="lg:px-32 px-8">
      <MainSection></MainSection>
      <Services></Services>
      <Carousel></Carousel>
      <OfferSection></OfferSection>
      <TopSellingProducts></TopSellingProducts>
      <PageAnalysis></PageAnalysis>
      <HomeReview></HomeReview>
      <HomeBlog></HomeBlog>
      <HomeContact></HomeContact>
    </div>
  );
};

export default Home;
