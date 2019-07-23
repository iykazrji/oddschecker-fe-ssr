/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Styled from "styled-components";
import { Flex, Box } from "rebass";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

import _x12OddsData from "@/data/1x2-odds-data";
import _1stHalfResultOddsData from "@/data/1st-half-result-odds-data";
import _bothTeamsToScoreOddsData from "@/data/both-teams-to-score-odds-data";
import _doubleChanceOddsData from "@/data/double-chance-odds-data";
import _totalGoalsOddsData from "@/data/total-goals-odds-data";

import closeIcon from "@/resources/icons/close.svg";

// Declare styled components...
const GameComponentWrapper = Styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    position: relative;
    padding-bottom: 5rem;
    @media screen and (max-width: 738px){
      background-color: #FFFFFF;
    }
  `;

const GameInfoContentContainer = Styled.div`
  width: 100%;
  height: 60vh;
  position: sticky;
  top: 100px;
  background-color: #FFFFFF;
  padding: 4rem 1.5rem;
  overflow: visible;
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
const GameInfoComponent = ({
  gameId,
  bet9jaData,
  merrybetData,
  surebetData,
  betwayData,
  sportybetData,
  nairabetData,
  _1960betData,
  betkingData
}) => {
  // market odds dropdown options
  const dropdownOptions = [
    { value: "1X2", label: "1X2" },
    { value: "Both Teams to Score", label: "Both Teams to Score" },
    { value: "Double Chance", label: "Double Chance" },
    { value: "Total Goals: Under / Over", label: "Total Goals: Under / Over" },
    { value: "1st Half Result", label: "1st Half Result" }
  ];

  // Decleare parts of state...
  const [selectedMarket, setSelectedMarket] = useState(dropdownOptions[0]);
  const [selectedOddsData, setSelectedOddsData] = useState(
    _x12OddsData(
      bet9jaData ? (bet9jaData[0] ? bet9jaData[0].odds : null) : null,
      merrybetData ? (merrybetData[0] ? merrybetData[0].odds : null) : null,
      surebetData ? (surebetData[0] ? surebetData[0].odds : null) : null,
      betwayData ? (betwayData[0] ? betwayData[0].odds : null) : null,
      sportybetData ? (sportybetData[0] ? sportybetData[0].odds : null) : null,
      nairabetData ? (nairabetData[0] ? nairabetData[0].odds : null) : null,
      _1960betData ? (_1960betData[0] ? _1960betData[0].odds : null) : null,
      betkingData ? (betkingData[0] ? betkingData[0].odds : null) : null
    )
  );
  const [selectedOddsTableColumns, setSelectedOddsTableColumns] = useState(
    _x12tableColumns
  );

  const getSelectedGameDetails = (id, market) => {
    return market.filter(game => {
      return game.eventID.localeCompare(id) === 0;
    });
  };

  const onSelectMarket = option => {
    setSelectedMarket(option);
    // Set Oddsdata & Table Column values...
  };

  const game = getSelectedGameDetails(gameId, merrybetData);

  const teams = game[0] ? game[0].event.split("-", 2) : null;
  const team1 = teams ? teams[0] || "Team 1" : "Team 1";
  const team2 = teams ? teams[1] || "Team 2" : "Team 2";

  // Render new data when component mounts

  const buildOddsDataTable = market => {
    switch (market.value) {
      case "1X2":
        setSelectedOddsData(
          _x12OddsData(
            bet9jaData ? (bet9jaData[0] ? bet9jaData[0].odds : null) : null,
            merrybetData
              ? merrybetData[0]
                ? merrybetData[0].odds
                : null
              : null,
            surebetData ? (surebetData[0] ? surebetData[0].odds : null) : null,
            betwayData ? (betwayData[0] ? betwayData[0].odds : null) : null,
            sportybetData
              ? sportybetData[0]
                ? sportybetData[0].odds
                : null
              : null,
            nairabetData
              ? nairabetData[0]
                ? nairabetData[0].odds
                : null
              : null,
            _1960betData
              ? _1960betData[0]
                ? _1960betData[0].odds
                : null
              : null,
            betkingData ? (betkingData[0] ? betkingData[0].odds : null) : null
          )
        );
        setSelectedOddsTableColumns(_x12tableColumns);
        break;

      case "Both Teams to Score":
        setSelectedOddsData(
          _bothTeamsToScoreOddsData(
            bet9jaData ? (bet9jaData[0] ? bet9jaData[0].odds : null) : null,
            merrybetData
              ? merrybetData[0]
                ? merrybetData[0].odds
                : null
              : null,
            surebetData ? (surebetData[0] ? surebetData[0].odds : null) : null,
            betwayData ? (betwayData[0] ? betwayData[0].odds : null) : null,
            sportybetData
              ? sportybetData[0]
                ? sportybetData[0].odds
                : null
              : null,
            nairabetData
              ? nairabetData[0]
                ? nairabetData[0].odds
                : null
              : null,
            _1960betData
              ? _1960betData[0]
                ? _1960betData[0].odds
                : null
              : null,
            betkingData ? (betkingData[0] ? betkingData[0].odds : null) : null
          )
        );
        setSelectedOddsTableColumns(_bothTeamScoreTableColumns);
        break;

      case "Double Chance":
        setSelectedOddsData(
          _doubleChanceOddsData(
            bet9jaData ? (bet9jaData[0] ? bet9jaData[0].odds : null) : null,
            merrybetData
              ? merrybetData[0]
                ? merrybetData[0].odds
                : null
              : null,
            surebetData ? (surebetData[0] ? surebetData[0].odds : null) : null,
            betwayData ? (betwayData[0] ? betwayData[0].odds : null) : null,
            sportybetData
              ? sportybetData[0]
                ? sportybetData[0].odds
                : null
              : null,
            nairabetData
              ? nairabetData[0]
                ? nairabetData[0].odds
                : null
              : null,
            _1960betData
              ? _1960betData[0]
                ? _1960betData[0].odds
                : null
              : null,
            betkingData ? (betkingData[0] ? betkingData[0].odds : null) : null
          )
        );
        setSelectedOddsTableColumns(_doubleChanceTableColumns);
        break;

      case "Total Goals: Under / Over":
        setSelectedOddsData(
          _totalGoalsOddsData(
            bet9jaData ? (bet9jaData[0] ? bet9jaData[0].odds : null) : null,
            merrybetData
              ? merrybetData[0]
                ? merrybetData[0].odds
                : null
              : null,
            surebetData ? (surebetData[0] ? surebetData[0].odds : null) : null,
            betwayData ? (betwayData[0] ? betwayData[0].odds : null) : null,
            sportybetData
              ? sportybetData[0]
                ? sportybetData[0].odds
                : null
              : null,
            nairabetData
              ? nairabetData[0]
                ? nairabetData[0].odds
                : null
              : null,
            _1960betData
              ? _1960betData[0]
                ? _1960betData[0].odds
                : null
              : null,
            betkingData ? (betkingData[0] ? betkingData[0].odds : null) : null
          )
        );
        setSelectedOddsTableColumns(_totalGoalsTableColumns);
        break;

      case "1st Half Result":
        setSelectedOddsData(
          _1stHalfResultOddsData(
            bet9jaData ? (bet9jaData[0] ? bet9jaData[0].odds : null) : null,
            merrybetData
              ? merrybetData[0]
                ? merrybetData[0].odds
                : null
              : null,
            surebetData ? (surebetData[0] ? surebetData[0].odds : null) : null,
            betwayData ? (betwayData[0] ? betwayData[0].odds : null) : null,
            sportybetData
              ? sportybetData[0]
                ? sportybetData[0].odds
                : null
              : null,
            nairabetData
              ? nairabetData[0]
                ? nairabetData[0].odds
                : null
              : null,
            _1960betData
              ? _1960betData[0]
                ? _1960betData[0].odds
                : null
              : null,
            betkingData ? (betkingData[0] ? betkingData[0].odds : null) : null
          )
        );
        setSelectedOddsTableColumns(_1stHalfResultTableColumns);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    buildOddsDataTable(selectedMarket);
  });

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
              <TeamInfoContainer>{team1}</TeamInfoContainer>
              <TeamInfoContainer px={["3rem"]}>vs</TeamInfoContainer>
              <TeamInfoContainer>{team2}</TeamInfoContainer>
            </GameInfoHeadingContent>
            <GameDateContainer>{`${
              game
                ? game[0]
                  ? game[0].date
                  : "Date not available"
                : "Date not available"
            } / ${
              game
                ? game[0]
                  ? game[0].time
                  : "Time not avaialable"
                : "Time not available"
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

        {
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
        }
      </GameInfoContentContainer>
      <div className="clear" />
    </GameComponentWrapper>
  );
};

export default GameInfoComponent;
