import axios from "axios";
import { InvalidArgumentsError } from "./error-handler";

import urls from "../config/url";

/**
 * Get all game info from provided site and competition
 *
 * @param {string} website
 * @param {string} competition
 *
 * @returns {object}
 */

export const getAllGamesInfo = async (website, competition) => {
  try {
    if (website && competition) {
      const response = await axios.get(
        `${urls.main_base_url}/${website}/${competition}`
      );
      console.log(response);
      return response;
    }

    // This is thrown if the necessary website or competition isn't provided
    throw new InvalidArgumentsError(
      "Website and Competition info not provided"
    );
  } catch (err) {
    console.log(err);
    return err;
  }
};

/**
 * Get Bet9ja games info.
 *
 * @param {string} competition
 * @returns {object}
 */
export const getBet9jaGamesInfo = async competition => {
  try {
    if (competition) {
      const response = await axios.get(`${urls.bet9ja}/${competition}`);
      return response;
    }

    // This is thrown if the necessary website or competition isn't provided
    throw new InvalidArgumentsError(
      "Website and Competition info not provided"
    );
  } catch (err) {
    console.log(err);
    return err;
  }
};

/**
 * Get Merrybet games info.
 *
 * @param {string} competition
 * @returns {object}
 */
export const getMerryBetGamesInfo = async competition => {
  try {
    if (competition) {
      const response = await axios.get(`${urls.merrybet}/${competition}`);
      return response;
    }

    // This is thrown if the necessary website or competition isn't provided
    throw new InvalidArgumentsError(
      "Website and Competition info not provided"
    );
  } catch (err) {
    console.log(err);
    return err;
  }
};

/**
 * Get Surebet games info.
 *
 * @param {string} competition
 * @returns {object}
 */
export const getSureBetGamesInfo = async competition => {
  try {
    if (competition) {
      const response = await axios.get(`${urls.surebet}/${competition}`);
      return response;
    }

    // This is thrown if the necessary website or competition isn't provided
    throw new InvalidArgumentsError(
      "Website and Competition info not provided"
    );
  } catch (err) {
    console.log(err);
    return err;
  }
};

/**
 * Get Betway games info.
 *
 * @param {string} competition
 * @returns {object}
 */
export const getBetWayGamesInfo = async competition => {
  try {
    if (competition) {
      const response = await axios.get(`${urls.betway}/${competition}`);
      return response;
    }

    // This is thrown if the necessary website or competition isn't provided
    throw new InvalidArgumentsError(
      "Website and Competition info not provided"
    );
  } catch (err) {
    console.log(err);
    return err;
  }
};

/**
 * Get Sportybet games info.
 *
 * @param {string} competition
 * @returns {object}
 */
export const getSportyBetGamesInfo = async competition => {
  try {
    if (competition) {
      const response = await axios.get(`${urls.sportybet}/${competition}`);
      return response;
    }

    // This is thrown if the necessary website or competition isn't provided
    throw new InvalidArgumentsError(
      "Website and Competition info not provided"
    );
  } catch (err) {
    console.log(err);
    return err;
  }
};

/**
 * Get Nairabet games info.
 *
 * @param {string} competition
 * @returns {object}
 */
export const getNairaBetGamesInfo = async competition => {
  try {
    if (competition) {
      const response = await axios.get(`${urls.nairabet}/${competition}`);
      return response;
    }

    // This is thrown if the necessary website or competition isn't provided
    throw new InvalidArgumentsError(
      "Website and Competition info not provided"
    );
  } catch (err) {
    console.log(err);
    return err;
  }
};

/**
 * Get 1960Bet games info.
 *
 * @param {string} competition
 * @returns {object}
 */
export const get1960BetGamesInfo = async competition => {
  try {
    if (competition) {
      // eslint-disable-next-line no-underscore-dangle
      const response = await axios.get(`${urls._1960bet}/${competition}`);
      return response;
    }

    // This is thrown if the necessary website or competition isn't provided
    throw new InvalidArgumentsError(
      "Website and Competition info not provided"
    );
  } catch (err) {
    console.log(err);
    return err;
  }
};

/**
 * Get BetKing games info.
 *
 * @param {string} competition
 * @returns {object}
 */
export const getBetKingGamesInfo = async competition => {
  try {
    if (competition) {
      const response = await axios.get(`${urls.betking}/${competition}`);
      return response;
    }

    // This is thrown if the necessary website or competition isn't provided
    throw new InvalidArgumentsError(
      "Website and Competition info not provided"
    );
  } catch (err) {
    console.log(err);
    return err;
  }
};
