import { getName } from "country-list";
const entryStatus = {
  1: "Normal",
  2: "Entry is partially restricted",
  3: "Entry is restricted",
};

export function getTravelStatus(destData, from, dest, vaccinated) {
  const res = destData?.res;
  let data;
  let limiting;
  let fromRestricted;

  switch (res) {
    case 1 /** Normal entry */:
      limiting = destData?.limiting;
      fromRestricted = limiting?.includes(from);
      data = {
        headerStatus: `Travellers from ${getName(
          from
        )} are allowed to travel to ${getName(dest)}.`,
        restriction: fromRestricted ? "Entry is not restricted." : "",
        quarantine: "Quarantine is not mandatory.",
        covidResultProof: "Proof of COVID-19 not required.",
        covidTest: "COVID-19 test is not required.",
      };
      break;
    case 2 /** Partially restricted */:
      limiting = destData?.limiting;
      fromRestricted = limiting?.includes(from);
      data = {
        headerStatus: `Travellers from ${getName(
          from
        )} are partially restricted to travel to ${getName(dest)}.`,
        restriction: fromRestricted ? "Entry is partially restricted." : "",
        quarantine: "Quarantine is partially mandatory.",
        covidResultProof: "Proof of COVID-19 is not a must.",
        covidTest: "COVID-19 test is not a must.",
      };
      break;
    case 3 /** Entry prohibited. */:
      limiting = destData?.limiting;
      fromRestricted = limiting?.includes(from);
      data = {
        headerStatus: `Travellers from ${getName(
          from
        )} are not allowed to travel to ${getName(dest)}.`,
        restriction: fromRestricted ? "Entry is restricted." : "",
        quarantine: "Quarantine is mandatory.",
        covidResultProof: "Proof of COVID-19 required.",
        covidTest: "COVID-19 test is required.",
      };
      break;
  }
  return data;
}
