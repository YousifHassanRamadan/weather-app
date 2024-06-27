import React, { useContext, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { motion } from "framer-motion";
import { WeatherContext } from "./contexts/WeatherContext";
import Loading from "./components/Loading/Loading";
import { useLocalStorage } from "@uidotdev/usehooks";
import { createPortal } from "react-dom";
import { Button, Modal } from "react-bootstrap";
import LoadingModal from "./components/LoadingModal";
import "./HomePage.css";
import cloudImg from "./assets/clouds-Cky8Kg1I.png";
import partialCloudImg from "./assets/partial-cloud-DAc_6RqB.png";
import sumImg from "./assets/sun-BrIl2Gwl.png";
import windSpeedImg from "./assets/wind-speed-BZUvZSCM.png";

function HomePage() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const { loading, isSearching } = useContext(WeatherContext);
  return loading ? (
    <div className="loading">
      <Loading />
    </div>
  ) : (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        bounce: 1,
        delay: 0.2,
        velocity: 0.5,
        stiffness: 260,
        damping: 30,
      }}
      className="parent d-block"
    >
      <NavBar />
      {isSearching &&
        createPortal(<LoadingModal />, document.getElementById("modal-root"))}
      <div className="container mt-5">
        <div className="section1 d-flex justify-content-between">
          <div className="secOnTheLeft d-flex justify-content-around">
            <div className="d-flex flex-column justify-content-center">
              {" "}
              <div className="text me-3">
                <h1 className="fs-1">30.09°</h1>
                <h1 className="fs-3">Clouds Broken clouds</h1>
              </div>
              <div className="img">
                <img
                  src="https://weather-webapp-ashy.vercel.app/assets/clouds-Cky8Kg1I.png"
                  width={100}
                />
              </div>
            </div>
          </div>
          <div className="secOnTheRigth ">
            <div className="cardContainer d-flex justify-content-around">
              <div className="heat p-4 my-3 mx-2">
                <div className="text d-flex justify-content-center my-2">
                  <h1 className="fs-5">Feels Like</h1>
                </div>
                <div className="img d-flex justify-content-center my-2">
                  {" "}
                  <img
                    src="https://weather-webapp-ashy.vercel.app/assets/real-feel-hot-COQRE7Gd.png"
                    width={70}
                  />
                </div>
                <div className="quantity d-flex justify-content-center mt-3">
                  <h1 className="fs-5">38.09 °</h1>
                </div>
              </div>
              <div className="windSpeed p-4 my-3 mx-2">
                {" "}
                <div className="text d-flex justify-content-center my-2">
                  <h1 className="fs-5">Wind Speed</h1>
                </div>
                <div className="img d-flex justify-content-center my-2">
                  {" "}
                  <img
                    src="https://weather-webapp-ashy.vercel.app/assets/wind-speed-BZUvZSCM.png"
                    width={70}
                  />
                </div>
                <div className="quantity d-flex justify-content-center mt-3">
                  <h1 className="fs-5">38.02 °</h1>
                </div>
              </div>
              <div className="Humidity p-4 my-3 mx-2">
                {" "}
                <div className="text d-flex justify-content-center my-2">
                  <h1 className="fs-5">Feels Like</h1>
                </div>
                <div className="img d-flex justify-content-center my-2">
                  {" "}
                  <img
                    src="https://weather-webapp-ashy.vercel.app/assets/humidity-BFMyhXsb.png"
                    width={70}
                  />
                </div>
                <div className="quantity d-flex justify-content-center mt-3">
                  <h1 className="fs-5">38.09 °</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section2 mt-5">
          <div className="text p-3">
            <h1 className="fs-5">Other Large Cities</h1>
          </div>
          <div className="info inlinePadding container d-flex justify-content-around pb-4">
            <div className="city1">
              <div className="img d-flex justify-content-center">
                <img src={cloudImg} width={50} />
              </div>
              <div className="quantity d-flex justify-content-center">
                <h1 className="fs-3">38°</h1>
              </div>
              <div className="city fs-4 d-flex justify-content-center">
                Suez
              </div>
            </div>
            <div className="space"></div>
            <div className="city2">
              <div className="img d-flex justify-content-center">
                <img src={partialCloudImg} width={50} />
              </div>
              <div className="quantity d-flex justify-content-center">
                <h1 className="fs-3">38°</h1>
              </div>
              <div className="city fs-4 d-flex justify-content-center">
                Cairo
              </div>
            </div>
            <div className="space"></div>
            <div className="city3">
              <div className="img d-flex justify-content-center">
                <img src={sumImg} width={50} />
              </div>
              <div className="quantity d-flex justify-content-center">
                <h1 className="fs-3">38°</h1>
              </div>
              <div className="city fs-4 d-flex justify-content-center">
                Giza
              </div>
            </div>
            <div className="space"></div>
            <div className="city4">
              <div className="img d-flex justify-content-center">
                <img src={windSpeedImg} width={50} />
              </div>
              <div className="quantity d-flex justify-content-center ">
                <h1 className="fs-3">38°</h1>
              </div>
              <div className="city d-flex justify-content-center fs-4">
                Giza
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
