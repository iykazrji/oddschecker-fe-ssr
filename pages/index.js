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

// Get Mock Data...
import MockLeague from "../src/data/mock-league";

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

const renderLeagues = leagueData => {
  return leagueData.map((_leagueData, index) => {
    return <LeagueContainer key={index} leagueData={_leagueData} />;
  });
};

class Home extends React.Component {
  static async getInitialProps({ query }) {
    if (query) {
      return {
        query,
        id: query.id
      };
    }
    return {};
  }

  render() {
    const { id } = this.props;
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
                      <AdSense.Google
                        client="ca-pub-0936516816530901"
                        slot="1068504788"
                        responsive="true"
                        format="auto"
                        style={{
                          display: "inline-block",
                          width: "970px",
                          height: "90px"
                        }}
                      />
                    </Fragment>
                  );
                }}
              />
              <GamesContentContainer>
                <LeagueContentContainer>
                  {renderLeagues(MockLeague)}
                </LeagueContentContainer>
                {/* <Route
                path={`${match.url}game/:id`}
                render={({ match, history }) => {
                  return <GameInfoComponent match={match} history={history} />;
                }}
              /> */
                id ? <GameInfoComponent gameId={id} /> : null}
              </GamesContentContainer>
            </MainGamesContentContainerBox>
            <MainAdsContentContainerBox width={[0, 0, 0, 0.2]} px={["2rem"]}>
              <AdWrapper
                height="60rem"
                render={() => {
                  return (
                    <Fragment>
                      <AdSense.Google
                        client="ca-pub-0936516816530901"
                        slot="2688654314"
                        responsive="true"
                        format="auto"
                        style={{
                          display: "inline-block",
                          width: "169px",
                          height: "600px"
                        }}
                      />
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
