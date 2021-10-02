// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import qs from "qs";
import { getTravelStatus } from "../../utils";

const apiKey = process.env.apiKey;

export default async function handler(req, res) {
  const url = "https://prod.greatescape.co/api/travel/countries/restrictions/";
  const { passport, vaccinated } = req.body;

  // get travel restrictions for people from "from" country
  var data = qs.stringify({
    ids: passport,
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

  let allOriginsKeys = Object.keys(allOrigins);
  allOriginsKeys.forEach((key) => {
    let destData = allOrigins[key];
    destData = getTravelStatus(destData, passport, key);
    allOrigins[key] = { ...destData, res: allOrigins[key]["res"], code: key };
  });

  res.status(200).json(allOrigins);
}
