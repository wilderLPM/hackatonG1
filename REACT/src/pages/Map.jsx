import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../ui_components/Loader.css";
import styles from "./Map.module.css";
import TreeZero from "../assets/Tree/treezero.svg";
import TreeOne from "../assets/Tree/treeone.svg";
import TreeTwo from "../assets/Tree/treetwo.svg";
import TreeThree from "../assets/Tree/treethree.svg";

export default function Map() {
  const [isLoading, setIsLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [TreeZero, TreeOne, TreeTwo, TreeThree];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [images.length]); // Re-run effect if the number of images changes

  const { destination } = useParams();

  return (
    <>
      <div className={styles.container}>
        {isLoading === true &&
        destination !== "Montagne" &&
        destination !== "Forêt" ? (
          <div className={destination} />
        ) : destination === "Montagne" ? (
          <section className="circle">
            <div className="lake">
              <div></div>
            </div>
            <div className="clouds">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="mountain">
              <div></div>
            </div>
            <div className="mountain">
              <div></div>
            </div>
          </section>
        ) : (
          <img src={images[currentIndex]} alt="tree" />
        )}
      </div>
    </>
  );
}
