import React from "react";
import Styled from "styled-components";
import { Flex, Box } from "rebass";
import GameCard from "../../games-card/components/game-card";

const LeagueContainerWrapper = Styled.div`
    height: auto;
    margin-bottom: 2rem;
`;

const LeagueNameTitleContainer = Styled(Flex)`
    color: #D52941;
    align-items: center;
    height: 7rem;
    @media screen and (max-width: 738px){
      background-color: ${props =>
        props.theme ? props.theme.colorTheme.grey : "inherit"};
      padding: .4rem 1rem;
      height: 3rem;
      margin-bottom: 1.5rem;
    }
`;

const LeagueTitle = Styled(Box)`
    font-size: 1.5rem;
    color: inherit;
    margin-left: 1rem;
    margin-right: 1rem;
    @media screen and (max-width: 738px){
      font-size: 1.3rem;
    }
`;

const LeagueTitleLine = Styled(Box)`
    height: 0rem;
    border-top: .1rem solid #D52941;
    width: 100%;
    @media screen and (max-width: 738px){
      display: none;
    }
`;

const LeagueGamesWrapper = Styled.div`
    height: auto;
`;

const GamesUnavailableMessageContainer = Styled.div`
  width: 100%;
  display: flex;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 1.8rem;
    text-align: center;
    color: rgba(10, 10, 10, 0.3);
    font-weight: 800;
  }
`;

const RenderGameCards = (gamesArr, league) => {
  return gamesArr.map((game, index) => {
    return (
      <GameCard
        key={game.eventID}
        game={game}
        league={league}
        isEven={index % 2 === 0}
      />
    );
  });
};

const LeagueContainer = ({ leagueData }) => {
  const res = Object.keys(leagueData).map(key => {
    return leagueData[key];
  });

  let league = "";

  if (res[0]) {
    switch (res[0].league) {
      case "European 2020 Qualifiers":
        league = "eu";
        break;
      case "Major League Soccer":
        league = "mls";
        break;
      case "Premier League":
        league = "pl";
        break;
      case "La Liga":
        league = "ll";
        break;
      default:
        league = "pl";
    }
  }

  return res[0] ? (
    <LeagueContainerWrapper>
      <LeagueNameTitleContainer flexDirection="row">
        <LeagueTitle width={[1, 1, 4 / 12, 3 / 12]}>
          {res[0].league || `English Premier League`}
        </LeagueTitle>
        <LeagueTitleLine width={[0, 0, 8 / 12, 9 / 12]} />
      </LeagueNameTitleContainer>

      <LeagueGamesWrapper>
        {res[0].marketCount > 0 ? (
          RenderGameCards(res[0].market, league)
        ) : (
          <GamesUnavailableMessageContainer>
            <p>No Games available for this competition</p>
          </GamesUnavailableMessageContainer>
        )}
      </LeagueGamesWrapper>
    </LeagueContainerWrapper>
  ) : null;
};

export default LeagueContainer;
