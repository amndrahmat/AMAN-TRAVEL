import React from "react";
import "../../App.css";
//import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import "../Cards.css";
import CardItem from "../CardItem";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="cards">
        <h1>Latest Post</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/img-1.jpg"
                text="See the beauty of Sawarna Beach on the Island of Java"
                label="Travel"
                path="/"
              />
              <CardItem
                src="images/img-2.jpg"
                text="The weather conditions are not good at the end of this month due to several factors"
                label="Blog"
                path="/"
              />
              <CardItem
                src="images/img-3.jpg"
                text="Explore 7 hidden beaches away from the overcrowded population and enjoy serenity"
                label="Travel"
                path="/"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/img-5.jpg"
                text="See the life of fishermen in the south of the island of Java in the midst of a pandemic hitting Indonesia"
                label="blog"
                path="/"
              />
              <CardItem
                src="images/img-10.jpg"
                text="One of the most beautiful waterfalls in the world is in Indonesia"
                label="Travel"
                path="/"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="images/img-6.jpg"
                text="10 interesting events that we provide"
                label="Events"
                path="/"
              />
              <CardItem
                src="images/img-4.jpg"
                text="See the sunset on the Star hill Bandung"
                label="Blog"
                path="/"
              />
              <CardItem
                src="images/img-7.jpg"
                text="Tips and Tricks on vacation to the mountains with SAFE BACKPACK STORY"
                label="Tips"
                path="/"
              />
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
