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

const RenderGameCards = gamesObj => {
  const gamesIndex = Object.keys(gamesObj);
  return gamesIndex.map((key, index) => {
    return <GameCard key={key} game={gamesObj[key]} isEven={index % 2 === 0} />;
  });
};

const LeagueContainer = ({ leagueData }) => {
  return (
    <LeagueContainerWrapper>
      <LeagueNameTitleContainer flexDirection="row">
        <LeagueTitle width={[1, 1, 4 / 12, 3 / 12]}>
          {leagueData.title || `English Premier League`}
        </LeagueTitle>
        <LeagueTitleLine width={[0, 0, 8 / 12, 9 / 12]} />
      </LeagueNameTitleContainer>

      <LeagueGamesWrapper>
        {RenderGameCards(leagueData.games)}
      </LeagueGamesWrapper>
    </LeagueContainerWrapper>
  );
};

export default LeagueContainer;
