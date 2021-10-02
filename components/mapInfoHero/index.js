import styles from "./mapInfoHero.module.css";
import { MapsIcon } from "../icons";

export default function MapInfoHero() {
  return (
    <div className={styles.mapInfoContainer}>
      <div className={styles.mapInfoRestriction}>
        <h2>
          <span style={{ marginRight: "6px" }}>
            <MapsIcon />
          </span>{" "}
          Travel restrictions map
        </h2>
      </div>
      <div className={styles.mapInfoContent}>
        <div className={styles.mapInfoContentTitle}>
          <h1>Where's open, what's required?</h1>
        </div>
        <div className={styles.mapInfoContentDesc}>
          <p>
            View entry restrictions and COVID-19 travel requirements for
            countries around the world. Choose a country on the map to begin.
          </p>
        </div>
      </div>
    </div>
  );
}
