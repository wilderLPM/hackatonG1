import { useParams } from "react-router-dom";
import { useState } from "react";
import "../ui_components/Loader.css";
import styles from "./Map.module.css";

export default function Map() {
  const [isLoading, setIsLoading] = useState(true);

  const { destination } = useParams();
  return (
    <>
      <div className={styles.container}>
        {isLoading === true && <div className="loader" />}
      </div>
      <p>{destination}</p>
    </>
  );
}
