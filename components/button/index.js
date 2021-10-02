import styles from "./button.module.css";
import {
  MapIcon,
  FilterIcon,
  SearchIcon,
  WorldIcon,
  UserIcon,
} from "./../icons";

function getIcon(icon) {
  switch (icon) {
    case "MapIcon":
      return <MapIcon />;
    case "FilterIcon":
      return <FilterIcon />;
    case "SearchIcon":
      return <SearchIcon />;
    case "WorldIcon":
      return <WorldIcon />;
    case "UserIcon":
      return <UserIcon />;
    default:
      break;
  }
}
export default function Button({ icon, onClick, children }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <span style={{ width: "23px" }}>{getIcon(icon)}</span>
      <span>{children}</span>
    </button>
  );
}
