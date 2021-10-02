import { useState } from "react";
import c from "country-list";

import styles from "./countries.module.css";
import Modal from "./../modal";
import { SearchIcon, WorldIcon } from "./../../icons";

export default function CountriesModal({
  onSelect,
  closeFn,
  headerTitle,
  labelTitle,
}) {
  const _countries = c.getData();

  const [countries, setCountries] = useState(_countries);

  function changeHandler(e) {
    const searchWord = e.target.value;
    const result = _countries.filter((countryData) =>
      countryData?.name
        ?.toLocaleLowerCase()
        .includes(searchWord.toLocaleLowerCase())
    );
    setCountries(result);
  }

  return (
    <Modal
      closeFn={closeFn}
      style={{
        backgroundColor: "white",
        border: "2px solid black",
        padding: "1rem",
        height: "350px",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "e4e1e1#",
          padding: "5px",
          alignItems: "center",
          borderBottom: "2px solid black",
        }}
      >
        <div
          style={{
            width: "32px",
            paddingRight: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchIcon />
        </div>
        <div style={{ width: "100%" }}>
          <label style={{ fontSize: "0.65rem" }}>{labelTitle}</label>
          <input
            style={{
              backgroundColor: "inherit",
              borderColor: "inherit",
              border: "unset",
              outline: "none",
              fontSize: "medium",
              width: "100%",
              marginTop: "2px",
            }}
            type="text"
            placeholder={headerTitle}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className={styles.countriesListCont}>
        <span
          style={{
            display: "inline-block",
            fontSize: "0.75rem",
            margin: "14px 0",
          }}
        >
          Showing {countries?.length} results
        </span>
        <ul>
          {countries.map((v, i) => (
            <CountryItem countryName={v} onSelect={onSelect} key={i} />
          ))}
        </ul>
      </div>
    </Modal>
  );
}

function CountryItem({ onSelect, countryName }) {
  return (
    <li onClick={() => onSelect(countryName)}>
      <a style={{ display: "flex", alignItems: "center" }}>
        <span style={{ width: "25px", marginRight: "15px" }}>
          <WorldIcon />
        </span>
        <span>
          <b>{countryName?.name}</b>
        </span>
      </a>
    </li>
  );
}
