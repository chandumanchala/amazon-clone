import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.png"
          alt="amazon layout"
        />
        <div className="home__row">
          <Product
            id="123345678"
            title="Indian Polity"
            price={19.99}
            image="https://m.media-amazon.com/images/I/71ePXM6nOdL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="123345698567"
            title="Indian Economy by Ramesh Singh with Free Car Anti Slip Mat (McGraw Hill Education; Eighth edition"
            price={25}
            image="https://m.media-amazon.com/images/I/8153R+Cb6AL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1233486"
            title="PMF IAS Environment for UPSC 2022-23 Paperback"
            price={50}
            image="https://m.media-amazon.com/images/I/51Qaf7A-duL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
          />
          <Product
            id="12337567899895"
            title="Indian Art and Culture ( English| 4th Edition) | UPSC | Civil Services Exam | State Administrative Exams"
            price={68}
            image="https://m.media-amazon.com/images/I/51URPCHNSBL._SX379_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="12389868745354"
            title="Indian History (English|3rd Edition) | UPSC | Civil Services Exam | State Administrative Exams Paperback"
            price={34}
            image="https://m.media-amazon.com/images/I/51iEuY4PmmL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="55661144687"
            title="Geography of India (English|10th Edition) | UPSC | Civil Services Exam | State Administrative Exams"
            price={23}
            image="https://m.media-amazon.com/images/I/51aialT0psL._SX520_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
