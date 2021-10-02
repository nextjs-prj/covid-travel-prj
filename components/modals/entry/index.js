import { useEffect, useState } from "react";
import axios from "axios";

import Modal from "./../modal";
import styles from "./entry.module.css";
import {
  ArrowIcon,
  FlightIcon,
  CoronavirusIcon,
  DoNotDisturbIcon,
  HomeIcon,
} from "./../../icons";

export default function EntryModal({ closeFn, from, dest, vaccinated }) {
  const [travelStatus, setTravelStatus] = useState({
    headerStatus: "",
    restriction: "",
    quarantine: "",
    covidResultProof: "",
    covidTest: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const resultData = await axios.post("/api/travelData", {
      dest: dest?.code,
      from: from?.code,
      vaccinated,
    });
    setTravelStatus(resultData?.data);
    setLoading(false);
  }, []);

  return (
    <Modal
      closeFn={closeFn}
      style={{ backgroundColor: "white", borderRadius: "6px" }}
    >
      {loading ? (
        <div className={styles.entryLoader}>
          <div className={styles.entryLoaderProgress}></div>
        </div>
      ) : (
        <>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "1.9rem",
              borderTopLeftRadius: "6px",
              borderTopRightRadius: "6px",
              borderBottom: "4px solid orange",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <button
                  style={{ backgroundColor: "#1da1f2" }}
                  className={styles.entryButton}
                >
                  Departure
                </button>
                <button
                  style={{ backgroundColor: "black", border: "1px solid" }}
                  className={styles.entryButton}
                >
                  Return
                </button>
              </div>
              <div>
                <span onClick={closeFn} className={styles.entryCloseIcon}>
                  X
                </span>
              </div>
            </div>
            <div>
              <h2 style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "12px" }}>{from?.name}</span>{" "}
                <ArrowIcon />{" "}
                <span style={{ marginLeft: "12px" }}>{dest?.name}</span>
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "6px" }}>
                <FlightIcon />
              </span>
              <span>
                {/**headerTitle is here */ travelStatus?.headerStatus}
              </span>
            </div>
          </div>
          <div
            className={styles.entryContRestrictions}
            style={{
              padding: "1.9rem",
              paddingTop: "5px",
              backgroundColor: "white",
              borderBottomLeftRadius: "6px",
              borderBottomRightRadius: "6px",
            }}
          >
            <div>
              <h3 style={{ fontWeight: "500" }}>Travel restrictions</h3>
            </div>
            {/*
            <div style={{ display: "flex", marginBottom: "7px" }}>
              <span style={{ marginRight: "6px" }}>
                <DoNotDisturbIcon />
              </span>
                <div style={{ width: "100%" }}>
                  <p style={{ marginTop: "unset" }}>
                    Australians can't leave without a travel exemption.
                  </p>
                  <p className={styles.entryP}>
                    <span>Request an exemption</span>
                    <span></span>
                  </p>
                </div>
            </div>
            */}
            <div style={{ display: "flex", marginBottom: "7px" }}>
              <span style={{ marginRight: "6px" }}>
                <DoNotDisturbIcon />
              </span>
              <div>
                <p style={{ marginTop: "unset" }}>
                  {
                    /**Entry restricted for international travellers*/ travelStatus?.restriction
                  }
                </p>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "7px" }}>
              <span style={{ marginRight: "6px" }}>
                <CoronavirusIcon />
              </span>
              <div style={{ width: "100%" }}>
                <p style={{ marginTop: "unset" }}>
                  {/**Mandatory COVID-19 test */ travelStatus?.covidTest}
                </p>
                <p className={styles.entryP}>
                  <span>Complete online</span>
                  <span></span>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "7px",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "6px" }}>
                <HomeIcon />
              </span>
              <div>
                <p style={{ marginTop: "unset" }}>
                  {/** Mandatory 14-day quarantine */ travelStatus?.quarantine}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
}
