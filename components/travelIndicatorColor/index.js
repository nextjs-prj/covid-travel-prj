import styles from "./travelIndicatorColor.module.css";
const indicators = [
  {
    header: "Travel is open",
    color: "green",
    desc: "Open for travel. COVID-19 testing or quarantine is not required.",
  },
  {
    header: "Travel is partially open",
    color: "orange",
    desc: "Open for travel with required COVID-19 testing.",
  },
  {
    header: "Entry is restricted",
    color: "red",
    desc: "Travel is only open for returning citizens and those meeting strict requirements.",
  },
];

export default function TravelIndicatorColor({}) {
  return (
    <div className={styles.travelIndicatorColor}>
      {indicators.map((indicator, i) => (
        <ColorBox opt={indicator} key={i} />
      ))}
    </div>
  );
}

function ColorBox({ opt }) {
  return (
    <div className={styles.colorBoxContainer}>
      <div
        style={{
          backgroundColor: opt?.color,
          opacity: 0.4,
        }}
        className={styles.colorBox}
      ></div>
      <div style={{ width: "84%" }}>
        <h3>{opt?.header}</h3>
        <p>{opt?.desc}</p>
      </div>
    </div>
  );
}
