import React from "react";
import useTitle from "../../Shared/TitleChange/TitleChange";
import PageAnalysis from "./PageAnalysis/PageAnalysis";
import HomeContact from "./HomeContact/HomeContact";
import MainSection from "./MainSection/MainSection";
import HomeBlog from "./HomeBlog/HomeBlog";
import Services from "./Services/Services";
import OfferSection from "./OfferSection/OfferSection";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";
import HomeReview from "./HomeReview/HomeReview";
import HomeProducts from "./HomeProducts/HomeProducts";
import ShortSection from "./ShortSection/ShortSection";
import FAQSection from "./FAQSection/FAQSection";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <MainSection></MainSection>
      <div className="lg:px-32 px-8 text-center">
        <HomeProducts></HomeProducts>
        <Services></Services>
        <FAQSection></FAQSection>
        <OfferSection></OfferSection>
        <TopSellingProducts></TopSellingProducts>
        <ShortSection></ShortSection>
        <PageAnalysis></PageAnalysis>
        <HomeReview></HomeReview>
        <HomeBlog></HomeBlog>
        <HomeContact></HomeContact>
      </div>
    </div>
  );
};

export default Home;
