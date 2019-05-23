import axios from "axios";
import _ from "lodash";
import errorHandler from "./error";

const apiBase = process.env.REACT_APP_BACKEND_API_BASE;

/**
 * @param {string} website
 * @function getAllWebsiteOdds
 * @returns response - Contains all Odds from the selected website
 * This function gets all the Website
 *
 */
export const getAllWebsiteOdds = async website => {
  try {
    const response = await axios.get(`${apiBase}/${website}`);
    return response;
  } catch (err) {
    errorHandler(400, "An Error Occured", err);
  }
};

/**
 *
 * @param {string} ref
 * @param {string} website
 * @param {Array} allWebsiteOdds
 * @returns Game with Particular Reference
 *
 */
export const getWebsiteOddsByReference = async (
  ref,
  website,
  allWebsiteOdds
) => {
  try {
    if (!allWebsiteOdds) {
      // Check if allWebsiteOdds was passed and have values...
      const response = await getAllWebsiteOdds(website);
      allWebsiteOdds = response.data[0].market;
    }
    // Create the OddsList Array...
    const oddsLists = _.map(allWebsiteOdds, game => {
      return game.oddslists;
    });

    const gameByReference = _.find(oddsLists, game => {
      return (_.flatten(game).ref = ref);
    });
    if (gameByReference) {
      return gameByReference;
    }
    return [];
  } catch (err) {
    console.log(err);
    return errorHandler(400, "An Error Occured", err);
  }
};

/**
 *
 * @param {Array} teams
 * @param {string} website
 * @param {Array} allWebsiteOdds
 * @returns gameByTeams
 */
export const getWebsiteOddsByTeams = async (teams, website, allWebsiteOdds) => {
  try {
    if (!allWebsiteOdds) {
      const response = await getAllWebsiteOdds(website);
      allWebsiteOdds = response.data[0].market;
    }
    const oddsLists = _.map(allWebsiteOdds, game => {
      return game.oddslists;
    });
    const gameByTeams = _.find(_.flatten(oddsLists), ["teams", teams]);
    if (gameByTeams) {
      return gameByTeams;
    }
    return [];
  } catch (err) {
    console.log(err);
    return errorHandler(400, "An Error Occured", err);
  }
};
