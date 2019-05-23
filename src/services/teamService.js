// This file contains the various API calls to get Teams Data from the Backend...

import axios from "axios";
import _ from "lodash";
import errorHandler from "./error";
const apiBase = process.env.REACT_APP_BACKEND_API_BASE;

/**
 * @function getAllGamesByTeams
 * @returns All games grouped by teams...
 */
export const getAllGamesByTeams = async () => {
  try {
    const response = await axios.get(apiBase + "/teams");
    return response;
  } catch (error) {
    return errorHandler(400, "An error occured", error);
  }
};

/**
 * @function getAllGamesByTeamsFromLeague
 * @param {string} league
 * @param {array} allGamesByTeams
 * @returns All Games from a particular Leauge
 */
export const getAllGamesByTeamsFromLeague = async (league, allGamesByTeams) => {
  // Sanitize parameter...
  if (!typeof league === "string" || league === "") {
    return errorHandler(
      400,
      "Wrong parameter passed to function. Must be a string"
    );
  }

  // Capitalize the string... This is done so the user can use smaller letters in the frontend...
  league = league
    .split(/\s+/)
    .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

  try {
    if (!allGamesByTeams) {
      const response = await getAllGamesByTeams();
      allGamesByTeams = response.data.info;
    }
    const allGamesFromLeauge = _.filter(allGamesByTeams, ["league", league]);
    return allGamesFromLeauge;
  } catch (err) {
    return errorHandler(400, "An Error Occured", err);
  }
};

/**
 *
 * @param {string} ref
 * @param {Array} allGamesByTeams
 * @returns Game with particular reference
 */
export const getGameFromReference = async (ref, allGamesByTeams) => {
  try {
    if (!allGamesByTeams) {
      const response = await getAllGamesByTeams();
      allGamesByTeams = response.data.info;
    }
    const gameFromReference = _.filter(allGamesByTeams, ["ref", ref]);
    return gameFromReference;
  } catch (err) {
    return errorHandler(400, "An Error Occured", err);
  }
};
