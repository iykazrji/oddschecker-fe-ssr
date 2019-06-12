/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { Flex, Box } from "rebass";
import { Link } from "../../../../routes";

import arrowIcon from "@/resources/icons/right-arrow-filled.svg";

/** @component */
const GameCardContainer = Styled(Flex)`
    height: 6rem;
    width: 100%;
    background-color: ${props =>
      props.isEven ? `rgba(240, 240, 240, 0.6)` : `#FFFFFF`};
    box-shadow: ${props =>
      props.isActiveGame ? "1px 6px 15px rgba(10, 10, 10, 0.1)" : null};
    position: relative;
    &:before{
      content: " ";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background-color: ${props => (props.isActiveGame ? "#DB4437" : null)};
    }
    @media screen and (max-width: 738px){
      height: auto;
      background-color: ${props =>
        props.theme ? props.theme.colorTheme.white : "#FFFFFF"};
        border-bottom: 1px solid rgba(50, 50, 50, .25);
      box-shadow: none;
      &:before{
        display: none;
      }
    }
`;

const GameTimeContainer = Styled(Flex)`
  @media screen and (max-width: 738px){
    flex-direction: row-reverse;
    align-items: flex-end;
  }
`;

const GameTimeWrapper = Styled(Box)`
  @media screen and (max-width: 738px){
    font-size: 1.2rem;
    color: rgba(50, 50, 50, 0.5);
    &:before{
      content: "-";
      margin: 0px .5rem;
    }
  }
`;

const GameDateWrapper = Styled(Box)`
	font-size: 1.2rem;
	color: rgba(50, 50, 50, 0.5);
`;

const TeamContentWrapper = Styled(Box)`
  display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 1.5rem;
  @media screen and (max-width: 738px){
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-right: 1.3rem;
  }
`;

const TeamInfoContainer = Styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: 2rem;
  @media screen and (max-width: 738px){
    margin-left: 0px;
  }
`;
const VsTextWrapper = Styled(Box)`
	margin-left: 2rem;
  @media screen and (max-width: 738px){
    margin: 0rem 2rem;
  }
`;

/**
 * TODO: This component would be used when the Team badges are provided.
 */
// const TeamBadgeWrapper = Styled.div`
// 	width: 1.25rem;
// 	height: 1.25rem;
// 	border-radius: 50%;
// 	margin: 0 1rem;
// 	background-image: url(${props => (props.teamBadge ? props.teamBadge : null)});
// 	background-color: ${props =>
//     props.teamBadge ? null : `rgba(200, 200, 200, 0.7)`};
// 	background-size: contain;
// 	background-repeat: no-repeat;
// 	background-position: center;
// `;

const TeamNameWrapper = Styled.div`
	
`;
const TeamNameText = Styled.p`
	color: inherit;
  @media screen and (max-width: 738px){
    margin: .2rem 0rem;
  }
`;

const StyledLink = Styled.a`
	width: 100%;
	color: inherit;
	text-decoration: none;
  display: flex;
  flex-direction: row;
`;

const ArrowContainer = Styled.div`
  @media screen and (min-width: 738px){
    display: none;
  }
  width: 2rem;
  height: 2rem;
  text-align: center;
  margin-left: auto;
  img {
    height: 100%;
    max-width: 100%;
  }
`;

/**
 *  Game Card component. Renders the game info in the Game List components for
 *  specific leagues.
 *
 *  @visibleName GameCardComponent
 *  @returns boolean
 */

const checkGamePath = (game, location) => {
  const gameID = game.id;

  // We need to find the active game card.
  // We first get the game Id from the path and test
  // If it is the value of the gameId.

  let pathArr = [];
  if (location && location.pathname) {
    pathArr = location.pathname.split("/");
    if (pathArr) {
      const pathArrLength = pathArr.length - 1;
      const pathID = pathArr[pathArrLength];
      return gameID === pathID;
    }
    return false;
  }
  return false;
};

const GameCard = ({ game, isEven, location, league }) => {
  if (!game) {
    return null;
  }
  const teams = game.event.split("-", 2);
  const team1 = teams[0];
  const team2 = teams[1];

  return (
    <GameCardContainer
      className="game-card-container"
      alignItems="center"
      px={["1.5rem"]}
      py={["2rem", "2rem", "1rem", "1rem"]}
      isEven={isEven}
      isActiveGame={checkGamePath(game, location)}>
      {/* We are passing a 'TRUE' state to the location prop so we can use it in the parent router to perform
        Consecutive Route renders 
        ...
        We are removing the team badge placeholders for now till they are provided.
        TODO: Replace the TeamBadge components when the team badges can be made available.
    */}
      <Link route={`/game/${league}/${game.eventID || game.eventRef}`} passHref>
        <StyledLink>
          <TeamContentWrapper>
            <GameTimeContainer
              flexDirection="column"
              width={["auto", "auto", "5.5rem", "5.5rem"]}>
              <GameTimeWrapper>{game.time || `19:45`}</GameTimeWrapper>
              <GameDateWrapper>{game.date || `26 Aug`}</GameDateWrapper>
            </GameTimeContainer>
            <TeamInfoContainer>
              <TeamNameWrapper>
                <TeamNameText>{team1 || "Team 1"}</TeamNameText>
              </TeamNameWrapper>
              <VsTextWrapper>
                <span>vs</span>
              </VsTextWrapper>
              <TeamInfoContainer>
                <TeamNameWrapper>
                  <TeamNameText>{team2 || "Team 2"}</TeamNameText>
                </TeamNameWrapper>
              </TeamInfoContainer>
            </TeamInfoContainer>
          </TeamContentWrapper>
          <ArrowContainer>
            <img src={arrowIcon} alt="Arrow Icon" />
          </ArrowContainer>
        </StyledLink>
      </Link>
    </GameCardContainer>
  );
};
GameCard.propTypes = {
  /** Check if game card is even */
  isEven: PropTypes.bool,
  /** Contains the Match object */
  match: PropTypes.object,
  /** Contains the Game object */
  game: PropTypes.object,

  /** Contains the Router's location. Useful incase of Re-routing */
  location: PropTypes.object
};

GameCard.defaultProps = {
  isEven: false,
  game: {},
  location: {},
  match: {}
};

export default GameCard;
