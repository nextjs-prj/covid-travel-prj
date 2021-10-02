import styles from "./mapboxControl.module.css";
import Button from "./../button";
import SwitchBox from "../switchBox";

export default function MapboxControl({
  passport,
  from,
  dest,
  trip,
  vaccFn,
  buttonHandler,
}) {
  return (
    <div className={styles.mapboxControls}>
      <Button
        icon="UserIcon"
        onClick={() => {
          buttonHandler({
            type: "passport",
            labelTitle: "Search passport",
            headerTitle: "Your passport",
          });
        }}
      >
        Passport: {passport?.name}
      </Button>
      <Button
        onClick={() => {
          buttonHandler({
            type: "from",
            labelTitle: "Wher are you coming from?",
            headerTitle: "Enter country",
          });
        }}
        icon="MapIcon"
      >
        From {from?.name}
      </Button>
      <Button
        onClick={() => {
          buttonHandler({
            type: "dest",
            labelTitle: "Where are you going to?",
            headerTitle: "Enter country",
          });
        }}
        icon="SearchIcon"
      >
        {dest?.name?.length > 1 ? `To: ${dest?.name}` : "Search Destination"}
      </Button>
      <Button
        onClick={() => {
          buttonHandler("trip");
        }}
        icon="WorldIcon"
      >
        Trip: {trip}
      </Button>
      <span
        style={{
          display: "flex",
          alignContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            marginBottom: "2px",
            whiteSpace: "nowrap",
            marginRight: "6px",
          }}
        >
          COVID-19 vaccinated?
        </p>
        <p style={{ marginTop: "2px", marginBottom: "2px" }}>
          No
          <SwitchBox onChange={vaccFn} />
          Yes
        </p>
      </span>
      <Button icon="FilterIcon">Filters</Button>
    </div>
  );
}
