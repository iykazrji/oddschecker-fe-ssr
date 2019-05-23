// This file contains the various API calls to get League Data from the Backend...

import axios from "axios";
import errorHandler from "./error";

const apiBase = process.env.REACT_APP_BACKEND_API_BASE;

/**
 * @function getAllLeagues
 *
 * This Function gets all games from all leagues in the backend API...
 * @returns the backend response or an error...
 */
export const getAllLeagues = async () => {
  try {
    const response = await axios.get(`${apiBase}/leagues`);
    return response;
  } catch (error) {
    return errorHandler(400, "An error occured", error);
  }
};

/**
 * @deprecated
 * @function getAllEnglishGames
 *
 * This function gets all the Games from the English league...
 *
 * This function would be taken out of this service soon, use
 * getAllGamesFromLeague() instead...
 */
export const getAllEnglishGames = async () => {
  try {
    const response = await getAllLeagues();
    const englishGames = response.data.info.England;
    return englishGames;
  } catch (error) {
    return errorHandler(400, "An error occured", error);
  }
};

/**
 * @param {string} league
 * @function getAllGamesFromLeague
 * @returns games
 *
 * This functiion gets all games from a specific league
 */
export const getAllGamesFromLeague = async league => {
  // Sanitize parameter...
  if (!typeof league === "string" || league === "") {
    return errorHandler(
      400,
      "Wrong parameter passed to function. Must be a string"
    );
  }

  // Capitalize the string... This is done so the user can use smaller letters in the frontend...
  // eslint-disable-next-line no-param-reassign
  league = league
    .split(/\s+/)
    .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

  try {
    const response = await getAllLeagues();
    const games = response.data.info[league];
    return games;
  } catch (error) {
    return errorHandler(400, "An error occured", error);
  }
};
