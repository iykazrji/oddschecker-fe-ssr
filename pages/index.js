/* eslint-disable no-underscore-dangle */
import React, { Fragment } from "react";
import Head from "next/head";
import Styled from "styled-components";
import { Flex, Box } from "rebass";
import AdSense from "react-adsense";

// Get components
import Navigation, {
  CachetteNavigation
} from "../src/components/navigation/components";
import FixedFooterNavigation from "../src/components/navigation/components/fixed-footer-navigation";
import AdWrapper from "../src/components/adWrapper/components/index";
import LeagueContainer from "../src/components/league-container/components/league-container";
import GameInfoComponent from "../src/components/game-info/components/game-info-component";
import Footer from "../src/components/footer/components";

// Get Ad Banners
import ad1 from "@/resources/images/ad-banners/ad1.png";
import ad2 from "@/resources/images/ad-banners/ad2.png";

// Get Games and Odds Data
import {
  getAllGamesInfo,
  getBet9jaGamesInfo,
  get1960BetGamesInfo,
  getBetKingGamesInfo,
  getBetWayGamesInfo,
  getMerryBetGamesInfo,
  getNairaBetGamesInfo,
  getSportyBetGamesInfo,
  getSureBetGamesInfo
} from "../api/website-odds-service";

const MainContentContainerFlex = Styled(Flex)`
  height: 100%;
`;
const MainContentContainerBox = Styled(Box)`
  padding-top: 150px;
  @media screen and (max-width: 960px){
    padding-top: 100px;
  }
`;

const MainGamesContentContainerBox = Styled(MainContentContainerBox)`
  border-right:1px solid rgba(50, 50, 50, 0.3);
  @media screen and (max-width: 960px){
    border-right: none;
  }
`;

const MainAdsContentContainerBox = Styled(MainContentContainerBox)`
  @media screen and (max-width: 960px){
    display: none;
  }
`;

const GamesContentContainer = Styled(Flex)`
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: relative;
  > div{
    flex-grow:  1;
    flex-basis: 0;    
  }
`;

const LeagueContentContainer = Styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`;

const AdBannerImg = Styled.img`
  height: 100%;
  max-width: 100%;
  display: block;
  align-self: flex-start;
`;

const filterForSelectedGame = (market, id) => {
  return market.filter(game => {
    if (game && game.eventID) {
      return game.eventID.localeCompare(id) === 0;
    }

    return null;
  });
};

const renderLeagues = leagueData => {
  if (leagueData) {
    return leagueData.map((_leagueData, index) => {
      // eslint-disable-next-line react/no-array-index-key
      return <LeagueContainer key={index} leagueData={_leagueData} />;
    });
  }
  return null;
};

class Home extends React.Component {
  static async getInitialProps({ query }) {
    try {
      // Get all European Games
      const europeanGames = await getAllGamesInfo("merrybet", "eu");
      const mlsGames = await getAllGamesInfo("merrybet", "mls");
      console.log(europeanGames.data);

      // The response object contains data that would be returned
      // From our GetInitialProps method...
      let responseObj = {
        europeanGames: europeanGames.data || null,
        mlsGames: mlsGames.data || null
      };

      if (query) {
        // Get Markets data for odds...
        const bet9jaData = await getBet9jaGamesInfo("bet9ja", query.league);
        const merrybetData = await getMerryBetGamesInfo(query.league);
        const surebetData = await getSureBetGamesInfo(query.league);
        const betwayData = await getBetWayGamesInfo(query.league);
        const sportybetData = await getSportyBetGamesInfo(query.league);
        const nairabetData = await getNairaBetGamesInfo(query.league);
        const _1960betData = await get1960BetGamesInfo(query.league);
        const betkingData = await getBetKingGamesInfo(query.league);
        responseObj = {
          ...responseObj,
          query,
          id: query.id,
          bet9jaData: bet9jaData.data,
          merrybetData: merrybetData.data,
          surebetData: surebetData.data,
          betwayData: betwayData.data,
          sportybetData: sportybetData.data,
          nairabetData: nairabetData.data,
          _1960betData: _1960betData.data,
          betkingData: betkingData.data
        };
      }
      return responseObj;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  render() {
    const {
      id,
      europeanGames,
      mlsGames,
      bet9jaData,
      merrybetData,
      surebetData,
      betwayData,
      sportybetData,
      nairabetData,
      _1960betData,
      betkingData
    } = this.props;
    console.log(this.props);

    const leagues = [{ mlsGames }, { europeanGames }];
    return (
      <Fragment>
        <Head>
          <title>Oddschecker - Home</title>
        </Head>
        <Fragment>
          <CachetteNavigation
            className="cachette-navigation"
            navComponent={<Navigation navHeight="8rem" withSubnav />}
            initVisible
            navHeight="8rem"
          />
          <FixedFooterNavigation className="fixed-footer-navigation" />
          <MainContentContainerFlex
            className="main-content-container"
            flexDirection="row"
            flexWrap="no-wrap"
            width={[0.95, 0.95, 0.9, 0.88]}
            mx="auto">
            <MainGamesContentContainerBox width={[1, 1, 1, 0.75]} mx="auto">
              <AdWrapper
                height={["8rem", "8rem", "8rem", "10rem"]}
                render={() => {
                  return (
                    <Fragment>
                      <img src={ad1} alt="Ad Banner" />
                    </Fragment>
                  );
                }}
              />
              <GamesContentContainer>
                <LeagueContentContainer>
                  {renderLeagues(leagues)}
                </LeagueContentContainer>
                {id ? (
                  <GameInfoComponent
                    gameId={id}
                    bet9jaData={
                      bet9jaData
                        ? filterForSelectedGame(bet9jaData.market, id)
                        : null
                    }
                    merrybetData={
                      merrybetData
                        ? filterForSelectedGame(merrybetData.market, id)
                        : null
                    }
                    surebetData={
                      surebetData
                        ? filterForSelectedGame(surebetData.market, id)
                        : null
                    }
                    betwayData={
                      betwayData
                        ? filterForSelectedGame(betwayData.market, id)
                        : null
                    }
                    sportybetData={
                      sportybetData
                        ? filterForSelectedGame(sportybetData.market, id)
                        : null
                    }
                    nairabetData={
                      nairabetData
                        ? filterForSelectedGame(nairabetData.market, id)
                        : null
                    }
                    _1960betData={
                      _1960betData
                        ? filterForSelectedGame(_1960betData.market, id)
                        : null
                    }
                    betkingData={
                      betkingData
                        ? filterForSelectedGame(betkingData.market, id)
                        : null
                    }
                  />
                ) : null}
              </GamesContentContainer>
            </MainGamesContentContainerBox>
            <MainAdsContentContainerBox width={[0, 0, 0, 0.2]} px={["2rem"]}>
              <AdWrapper
                height="60rem"
                render={() => {
                  return (
                    <Fragment>
                      <img src={ad2} alt="Ad Banner" />
                    </Fragment>
                  );
                }}
              />
            </MainAdsContentContainerBox>
          </MainContentContainerFlex>
          {/* Bring in Footer */}
          <Footer />
        </Fragment>
      </Fragment>
    );
  }
}

export default Home;
