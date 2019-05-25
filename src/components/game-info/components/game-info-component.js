/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import Router from "next/router";
import Styled from "styled-components";
import _ from "lodash";
import { Flex, Box } from "rebass";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

import _x12OddsData from "@/data/1x2-odds-data";
import _1stHalfResultOddsData from "@/data/1st-half-result-odds-data";
import _bothTeamsToScoreOddsData from "@/data/both-teams-to-score-odds-data";
import _doubleChanceOddsData from "@/data/double-chance-odds-data";
import _mockLeagueOddsData from "@/data/mock-league";
import _totalGoalsOddsData from "@/data/total-goals-odds-data";

import closeIcon from "@/resources/icons/close.svg";

// Declare styled components...
const GameComponentWrapper = Styled.div`
    width: 60%;
    display: flex;
    border-left: 1px solid rgba(10, 10, 10, 0.09);
    height: 100%;
    @media screen and (max-width: 738px){
      position: absolute;
      z-index: 3;
      width: 100%;
      border-left: none;
    }
`;

const GameInfoContentContainer = Styled.div`
  width: 100%;
  position: relative;
  background-color: #FFFFFF;
  padding: 4rem 1.5rem;
  @media screen and (max-width: 738px){
    padding: 2rem 0rem;
  }
`;

const GameInfoContentHeadingWrapper = Styled(Flex)`
  height: auto;
  @media screen and (max-width: 738px){
    background-color: ${props =>
      props.theme ? props.theme.colorTheme.grey : "inherit"};
    padding: 1rem 1.5rem;

  }
`;

const GameInfoHeadingContent = Styled(Flex)`
  display: flex;
  flex-direction: row;
`;

const GameDateContainer = Styled.span`
  display: block;
  width: 100%;
  opacity: .7;
  font-size: 1.4rem;
  margin-top: 1rem;
  text-align: left;
`;

const TeamInfoContainer = Styled(Box)`
  font-size: 1.6rem;
`;

const GameInfoContentHeadingContent = Styled(Box)`
  display: flex;
  flex-direction: column;
`;

const GameInfoCloseContainer = Styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 1.5rem;
  @media screen and (max-width: 738px){
    padding-right: 0px;
  }
`;

const CloseButtonWrapper = Styled.div`
  height: 1.8rem;
  width: 1.8rem;
  margin-top: 1rem;
  @media screen and (max-width: 738px){
    height: 1.4rem;
    width: 1.4rem;
  }
`;

const CloseButton = Styled.button`
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0.5;
  cursor: pointer;
  transition: transform 0.4s ease-out;
  &:hover{
    transform: scale(.85) rotate(90deg);
  }
`;

const MarketControlsContainer = Styled(Flex)`
  height: auto;
  @media screen and (max-width: 738px){
    padding: 0px;
  }
`;

const MarketIndicatorWrapper = Styled(Box)``;

const MarketIndicator = Styled.span`
  background-color: rgba(240, 240, 240, 0.6);
  color: #DB4437;
  width: 100%;
  border-radius: 5px;
  height: 100%;
  display: block;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  padding: .75rem 1rem;  
`;

const MarketDropdownWrapper = Styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDropdown = Styled(Dropdown)`
    width: 100%;
    .Dropdown-control{
    background-color: rgba(230, 230, 230, 0.7);
    font-size: 1.3rem;
  }
  .Dropdown-menu{
    font-size: 1.2rem;
    border-radius: 7px;
    max-height: auto !important;
    @media screen and (max-width: 738px){
      width: 200%;
      left: -100%;
      margin-top: 10px;
    }
    .Dropdown-option{
      padding: 12px 10px;
    }
  }
`;

const BookiesTableWrapper = Styled.div`
  width: 100%;
  min-height: 4rem;
  margin-top: 2.5rem;
  padding: .5rem 1.5rem;
  @media screen and (max-width: 738px){
    padding: 0px;
  }
`;

// Table Styles
const StyledTable = Styled(ReactTable)`
  width: auto;
  font-size: 1.4rem;
  text-align: left;
  background-color: rgba(240, 240, 240, 0.6);
  border: none !important;
  border-radius: 4px 4px 0px 0px;
  .rt-thead{
    box-shadow: none !important;
    height: 4.5rem;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    min-width: 100% !important;
    width: 100% !important;
    .rt-th{
      display: flex;
      align-items: center;
      padding: 1rem 1.5rem !important;
      @media screen and (max-width: 738px){
        padding: .5rem 1rem !important;
      }
    }
  }
  .rt-tbody{
    .rt-td{
      display: flex;
      align-items: center;
      padding: 1rem 1.5rem !important;
      @media screen and (max-width: 738px){
        padding: 1rem 1rem !important;
      }
    }
  }
`;

const TableLogoWrapper = Styled.div`
  width: 100%;
  height: 3rem;
  text-align: center;
  display: flex;
  justify-content:center;
  align-items: center;
  padding: .25rem;
  img {
    height: auto;
    max-height: 100%;
    max-width: 100%;
  }
`;

const TableSubtextWrapper = Styled.div`
  background-color: rgba(235, 235, 235, 0.7);
  padding: 2rem;
  border-radius: 0px 0px 4px 4px;
  p{
    font-size: 1.4rem;
    display: block;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    a{
      color: #DB4437;
    }
  }
`;

const goBack = router => {
  router.push("/");
};

const _x12tableColumns = [
  {
    Header: "Bookie",
    accessor: "logo",
    Cell: ({ original, value }) => {
      return (
        <TableLogoWrapper className="logo-wrapper">
          {" "}
          <img src={value} alt={original.bookie} />
        </TableLogoWrapper>
      );
    }
  },
  {
    Header: "1",
    accessor: "1",
    width: 100
  },
  {
    Header: "x",
    accessor: "x",
    width: 100
  },
  {
    Header: "2",
    accessor: "2",
    width: 100
  }
];

const _1stHalfResultTableColumns = [
  {
    Header: "Bookie",
    accessor: "logo",
    Cell: ({ original, value }) => {
      return (
        <TableLogoWrapper className="logo-wrapper">
          {" "}
          <img src={value} alt={original.bookie} />
        </TableLogoWrapper>
      );
    }
  },
  {
    Header: "1",
    accessor: "1",
    width: 100,
    pivot: true
  },
  {
    Header: "x",
    accessor: "x",
    width: 100
  },
  {
    Header: "2",
    accessor: "2",
    width: 100
  }
];

const _bothTeamScoreTableColumns = [
  {
    Header: "Bookie",
    accessor: "logo",
    Cell: ({ original, value }) => {
      return (
        <TableLogoWrapper className="logo-wrapper">
          {" "}
          <img src={value} alt={original.bookie} />
        </TableLogoWrapper>
      );
    }
  },
  {
    Header: "YES",
    accessor: "yes",
    width: 100,
    pivot: true
  },
  {
    Header: "NO",
    accessor: "no",
    width: 100
  }
];

const _doubleChanceTableColumns = [
  {
    Header: "Bookie",
    accessor: "logo",
    Cell: ({ original, value }) => {
      return (
        <TableLogoWrapper className="logo-wrapper">
          {" "}
          <img src={value} alt={original.bookie} />
        </TableLogoWrapper>
      );
    }
  },
  {
    Header: "1X",
    accessor: "1",
    width: 100,
    pivot: true
  },
  {
    Header: "X2",
    accessor: "x",
    width: 100
  },
  {
    Header: "12",
    accessor: "2",
    width: 100
  }
];

const _totalGoalsTableColumns = [
  {
    Header: "Bookie",
    accessor: "logo",
    Cell: ({ original, value }) => {
      return (
        <TableLogoWrapper className="logo-wrapper">
          {" "}
          <img src={value} alt={original.bookie} />
        </TableLogoWrapper>
      );
    }
  },
  {
    Header: "UNDER 2.5",
    accessor: "under",
    width: 100,
    pivot: true
  },
  {
    Header: "OVER 2.5",
    accessor: "over",
    width: 100
  }
];

// GameInfoComponent...
const GameInfoComponent = ({ gameId }) => {
  const gameObj = _.chain(_mockLeagueOddsData)
    .map(league => {
      return _.find(league.games, game => {
        return game.id === gameId;
      });
    })
    .filter(value => {
      return value;
    })
    .value();

  // market odds dropdown options
  const dropdownOptions = [
    "1X2",
    "Both Teams to Score",
    "Double Chance",
    "Total Goals: Under / Over",
    "1st Half Result"
  ];

  // Decleare parts of state...
  const [selectedMarket, setSelectedMarket] = useState(dropdownOptions[0]);
  const [selectedOddsData, setSelectedOddsData] = useState(_x12OddsData);
  const [selectedOddsTableColumns, setSelectedOddsTableColumns] = useState(
    _x12tableColumns
  );

  const onSelectMarket = option => {
    setSelectedMarket(option);

    // Set Oddsdata & Table Column values...
    switch (option.value) {
      case "1X2":
        setSelectedOddsData(_x12OddsData);
        setSelectedOddsTableColumns(_x12tableColumns);
        break;

      case "Both Teams to Score":
        setSelectedOddsData(_bothTeamsToScoreOddsData);
        setSelectedOddsTableColumns(_bothTeamScoreTableColumns);
        break;

      case "Double Chance":
        setSelectedOddsData(_doubleChanceOddsData);
        setSelectedOddsTableColumns(_doubleChanceTableColumns);
        break;

      case "Total Goals: Under / Over":
        setSelectedOddsData(_totalGoalsOddsData);
        setSelectedOddsTableColumns(_totalGoalsTableColumns);
        break;

      case "1st Half Result":
        setSelectedOddsData(_1stHalfResultOddsData);
        setSelectedOddsTableColumns(_1stHalfResultTableColumns);
        break;

      default:
        break;
    }
  };

  return (
    <GameComponentWrapper className="game-info-wrapper">
      <GameInfoContentContainer className="game-info-content-container">
        <GameInfoContentHeadingWrapper
          width={[1]}
          flexDirection="row"
          alignItems="flex-start">
          <GameInfoContentHeadingContent
            width={[1, 11 / 12, 11 / 12]}
            px={["0rem", "0rem", "1.5rem", "1.5rem"]}
            mx="auto">
            <GameInfoHeadingContent>
              <TeamInfoContainer>{gameObj[0].team1.name}</TeamInfoContainer>
              <TeamInfoContainer px={["3rem"]}>vs</TeamInfoContainer>
              <TeamInfoContainer>{gameObj[0].team2.name}</TeamInfoContainer>
            </GameInfoHeadingContent>
            <GameDateContainer>{`${gameObj[0].time.date} / ${
              gameObj[0].time.time
            }`}</GameDateContainer>
          </GameInfoContentHeadingContent>
          <GameInfoCloseContainer width={[1 / 12]}>
            <CloseButtonWrapper>
              <CloseButton
                onClick={e => {
                  e.stopPropagation();
                  goBack(Router);
                }}
              />
            </CloseButtonWrapper>
          </GameInfoCloseContainer>
        </GameInfoContentHeadingWrapper>
        <MarketControlsContainer
          justifyContent="center"
          alignItems="center"
          mt={["1.5rem"]}
          px={[`1.5rem`]}>
          <MarketIndicatorWrapper
            width={[6 / 12, 6 / 12, 7 / 12, 7 / 12]}
            mr={["2rem"]}>
            <MarketIndicator>
              Market:{" "}
              {`${
                selectedMarket.value ? selectedMarket.value : selectedMarket
              }`}
            </MarketIndicator>
          </MarketIndicatorWrapper>
          <MarketDropdownWrapper width={[6 / 12, 6 / 12, 5 / 12, 5 / 12]}>
            <StyledDropdown
              options={dropdownOptions}
              value={selectedMarket}
              onChange={onSelectMarket}
              placeholder="Change Market"
            />
          </MarketDropdownWrapper>
        </MarketControlsContainer>
        {/* Bookies Table */}
        <BookiesTableWrapper>
          <StyledTable
            data={selectedOddsData}
            columns={selectedOddsTableColumns}
            loading={false}
            showPagination={false}
            resizable={false}
            minRows={selectedOddsData.length}
          />
          <TableSubtextWrapper>
            <p>
              Odds shown here come direct from online bookmakers. Please check
              all aspects of your bets before making a placement.{" "}
              <a href="/">More Info</a>
            </p>
          </TableSubtextWrapper>
        </BookiesTableWrapper>
      </GameInfoContentContainer>
    </GameComponentWrapper>
  );
};

export default GameInfoComponent;
