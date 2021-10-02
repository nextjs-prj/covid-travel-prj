// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import qs from "qs";
import { getTravelStatus } from "../../utils";

const apiKey = process.env.apiKey;

const entryStatus = {
  1: "Normal",
  2: "Entry is partially restricted",
  3: "Entry is restricted",
};

export default async function handler(req, res) {
  const url = "https://prod.greatescape.co/api/travel/countries/restrictions/";
  const { from, trip, dest, passport, vaccinated } = req.body;

  // get travel restrictions for people from "from" country
  var data = qs.stringify({
    ids: from,
    vaccinated,
  });

  var config = {
    method: "post",
    url,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
  };

  const resultData = await axios(config);

  // filter out the country based on "dest"
  const allOrigins = resultData?.data["all-origins"];
  let destData = allOrigins[dest];
  destData = getTravelStatus(destData, from, dest, vaccinated);

  res.status(200).json(destData);
}
