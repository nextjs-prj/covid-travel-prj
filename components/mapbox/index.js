import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import ReactDOMServer from "react-dom/server";
import axios from "axios";
import wc from "which-country";
import { getName } from "country-list";
import getCountryISO2 from "country-iso-3-to-2";
import getCountryISO3 from "country-iso-2-to-3";

import CountriesModal from "./../modals/countries";
import EntryModal from "./../modals/entry";
import styles from "./mapbox.module.css";
import {
  CoronavirusIcon,
  HomeIcon,
  PlaneInactiveIcon,
  CropSquareIcon,
} from "./../icons";
import MapboxControl from "../mapboxControl";
import TravelIndicatorColor from "../travelIndicatorColor";
import MapInfoHero from "../mapInfoHero";

export default function Mapbox() {
  const [passport, setPassport] = useState({
    name: "",
    code: "",
  });
  const [from, setFrom] = useState({
    name: "",
    code: "",
  });
  const [dest, setDest] = useState({
    name: "",
    code: "",
  });
  const [trip] = useState();

  const [displayCountriesModal, setDisplayCountriesModal] = useState(false);
  const [showEntryModal, setShowEntryModal] = useState(false);
  const [buttonType, setButtonType] = useState({
    type: "",
    labelTitle: "",
    headerTitle: "",
  });
  const [vacc, setVacc] = useState(false);
  const [allRestrictions, setAllRestrictions] = useState({});

  const ref = useRef();

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (Object.keys(allRestrictions).length < 0) return;
    const coronaVirusIconString = ReactDOMServer.renderToString(
      <CoronavirusIcon />
    );
    const homeIconString = ReactDOMServer.renderToString(<HomeIcon />);
    const planeInactiveIconString = ReactDOMServer.renderToString(
      <PlaneInactiveIcon />
    );
    const cropSquareIconString = ReactDOMServer.renderToString(
      <CropSquareIcon />
    );
    mapboxgl.accessToken =
      "pk.eyJ1IjoiY2hpZHVtZW5uYW1kaSIsImEiOiJja3UyZ3k1ZTEyaG1yMm5wOGdzdmV5bDVmIn0.vMACANU0KKEEG29fgy_w6g";

    const map = new mapboxgl.Map({
      container: ref.current,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 0,
    });
    const popup = new mapboxgl.Popup({ offset: [0, -15] });

    map.on("click", (data) => {
      const { lng, lat } = data?.lngLat;
      const countryCode = getCountryISO2(wc([lng, lat]));
      if (!countryCode) return;
      const countryName = getName(countryCode);

      if (from) {
        setDest({
          name: countryName,
          code: countryCode,
        });
        setShowEntryModal(true);
      }
    });

    map.on("mousemove", (data) => {
      const { lng, lat } = data?.lngLat;
      try {
        const countryCode = getCountryISO2(wc([lng, lat]));
        const name = getName(countryCode);

        const features = map.queryRenderedFeatures(data.point, {});
        if (!features.length) {
          return;
        }
        const feature = features[0];

        // get the hovered country restriction in respect to the passport
        let destData = allRestrictions[countryCode];
        popup.setLngLat(feature.geometry.coordinates);
        popup.setHTML(`
            <div style="white-space: nowrap; font-size: 0.85rem;">
              <div style="display: flex;border-bottom: 1px solid #dcdada; padding: 0px 7px 0px">
                <span style="margin-top: 0.85rem; margin-right: 0.65rem;">${cropSquareIconString}</span>
                <div>
                  <h2 style="padding-bottom: 2px; margin-bottom: 2px;">${name}</h2>
                  <p style="margin-top: unset;">${destData?.restriction}</p>
                </div>
              </div>
              <div style="display: flex; align-items: center;padding: 0px 7px 0px;margin-top: unset;padding-top:unset;">
                <span style="margin-right: 0.65rem">${planeInactiveIconString}</span>
                <p>${destData?.restriction}</p>
              </div>
              <div style="display: flex; align-items: center;padding: 0px 7px 0px">
                <span style="margin-right: 0.65rem">${homeIconString}</span>
                <p>${destData?.quarantine}</p>
              </div>
              <div style="display: flex; align-items: center; padding: 0px 7px 0px">
                <span style="margin-right: 0.65rem">${coronaVirusIconString}</span>
                <p>${destData?.covidResultProof}</p>
              </div>
            </div>
        `);
        popup.addTo(map);
      } catch (error) {}
    });

    map.on("load", () => {
      map.addLayer(
        {
          id: "1",
          source: {
            type: "vector",
            url: "mapbox://mapbox.country-boundaries-v1",
          },
          "source-layer": "country_boundaries",
          type: "fill",
          paint: {
            "fill-color": "green",
            "fill-opacity": 0.4,
          },
        },
        "country-label"
      );

      map.addLayer(
        {
          id: "2",
          source: {
            type: "vector",
            url: "mapbox://mapbox.country-boundaries-v1",
          },
          "source-layer": "country_boundaries",
          type: "fill",
          paint: {
            "fill-color": "orange",
            "fill-opacity": 0.4,
          },
        },
        "country-label"
      );

      map.addLayer(
        {
          id: "3",
          source: {
            type: "vector",
            url: "mapbox://mapbox.country-boundaries-v1",
          },
          "source-layer": "country_boundaries",
          type: "fill",
          paint: {
            "fill-color": "red",
            "fill-opacity": 0.4,
          },
        },
        "country-label"
      );

      const res1 = [];
      const res2 = [];
      const res3 = [];
      const allRestrictionsKeys = Object.keys(allRestrictions);
      allRestrictionsKeys.forEach((restrictionKey) => {
        const countryData = allRestrictions[restrictionKey];
        const res = countryData?.res;
        const c3 = getCountryISO3(countryData?.code);

        switch (res) {
          case 1:
            c3 && res1.push(c3);
            break;
          case 2:
            c3 && res2.push(c3);
            break;
          case 3:
            c3 && res3.push(c3);
            break;

          default:
            break;
        }
      });
      map.setFilter(1, ["in", "iso_3166_1_alpha_3", ...res1]);
      map.setFilter(2, ["in", "iso_3166_1_alpha_3", ...res2]);
      map.setFilter(3, ["in", "iso_3166_1_alpha_3", ...res3]);
    });
  }, [allRestrictions, passport]);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const countryCode = getCountryISO2(wc([longitude, latitude]));
        const countryName = getName(countryCode);

        // load countries restrictions based on your current location.
        loadCountriesRestrictions(countryCode);

        setPassport({
          name: countryName,
          code: countryCode,
        });
        setFrom({
          name: countryName,
          code: countryCode,
        });
      });
    }
  }

  function selectFn(country) {
    switch (buttonType?.type) {
      case "passport":
        loadCountriesRestrictions(country?.code);
        setPassport(country);
        break;
      case "dest":
        setDest(country);
        setShowEntryModal(true);
        break;
      case "from":
        setFrom(country);
        setDest(null);
      default:
        break;
    }
    setDisplayCountriesModal(false);
  }

  function vaccFn(e) {
    setVacc(e.target.checked);
  }

  async function loadCountriesRestrictions(countryCode) {
    const data = await axios.post("/api/allRestrictions", {
      passport: countryCode,
      vaccinated: vacc,
    });
    setAllRestrictions(data?.data);
  }

  return (
    <>
      <MapInfoHero />

      <div className={styles.mapboxContainer}>
        <MapboxControl
          buttonHandler={(type) => {
            setDisplayCountriesModal(true);
            setButtonType(type);
          }}
          passport={passport}
          dest={dest}
          trip={trip}
          from={from}
          vaccFn={vaccFn}
        />
        <div
          ref={ref}
          style={{
            height: "500px",
          }}
        />
        <TravelIndicatorColor />

        {displayCountriesModal ? (
          <CountriesModal
            onSelect={selectFn}
            closeFn={() => setDisplayCountriesModal(false)}
            headerTitle={buttonType?.headerTitle}
            labelTitle={buttonType?.labelTitle}
          />
        ) : null}

        {showEntryModal ? (
          <EntryModal
            trip={trip}
            passport={passport}
            dest={dest}
            from={from}
            vaccinated={vacc}
            closeFn={() => setShowEntryModal(false)}
          />
        ) : null}
      </div>
    </>
  );
}
