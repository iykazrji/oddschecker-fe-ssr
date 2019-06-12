import nairabetLogo from "@/resources/icons/company-logos/nairabet.svg";
import bet9jaLogo from "@/resources/icons/company-logos/bet9ja.svg";
import betWayLogo from "@/resources/icons/company-logos/betway.svg";
import betKingLogo from "@/resources/icons/company-logos/betking-logo.svg";
import sportybetLogo from "@/resources/icons/company-logos/sportybet.svg";
import _1960betLogo from "@/resources/icons/company-logos/1960bet.png";
import surebetLogo from "@/resources/icons/company-logos/surebet247.png";
import merrybetLogo from "@/resources/icons/company-logos/merrybet.png";

const buildDataTable = (
  bet9jaOdds,
  merryBetOdds,
  surebetOdds,
  betwayOdds,
  sportybetOdds,
  nairabetOdds,
  _1960betOdds,
  betkingOdds
) => {
  return [
    {
      logo: nairabetLogo,
      bookie: "Nairabet",
      1: nairabetOdds ? nairabetOdds["1"] : "--.--",
      x: nairabetOdds ? nairabetOdds.X : "--.--",
      2: nairabetOdds ? nairabetOdds["2"] : "--.--"
    },
    {
      logo: bet9jaLogo,
      bookie: "Bet9ja",
      1: bet9jaOdds ? bet9jaOdds["1"] : "--.--",
      x: bet9jaOdds ? bet9jaOdds.X : "--.--",
      2: bet9jaOdds ? bet9jaOdds["2"] : "--.--"
    },
    {
      logo: _1960betLogo,
      bookie: "1960Bet",
      1: _1960betOdds ? _1960betOdds["1"] : "--.--",
      x: _1960betOdds ? _1960betOdds.X : "--.--",
      2: _1960betOdds ? _1960betOdds["2"] : "--.--"
    },
    {
      logo: betWayLogo,
      bookie: "Betway",
      1: betwayOdds ? betwayOdds["1"] : "--.--",
      x: betwayOdds ? betwayOdds.X : "--.--",
      2: betwayOdds ? betwayOdds["2"] : "--.--"
    },
    {
      logo: betKingLogo,
      bookie: "Betking",
      1: betkingOdds ? betkingOdds["1"] : "--.--",
      x: betkingOdds ? betkingOdds.X : "--.--",
      2: betkingOdds ? betkingOdds["2"] : "--.--"
    },
    {
      logo: sportybetLogo,
      bookie: "SportyBet",
      1: sportybetOdds ? sportybetOdds["1"] : "--.--",
      x: sportybetOdds ? sportybetOdds.X : "--.--",
      2: sportybetOdds ? sportybetOdds["2"] : "--.--"
    },
    {
      logo: surebetLogo,
      bookie: "Surebet",
      1: surebetOdds ? surebetOdds["1"] : "--.--",
      x: surebetOdds ? surebetOdds.X : "--.--",
      2: surebetOdds ? surebetOdds["2"] : "--.--"
    },
    {
      logo: merrybetLogo,
      bookie: "Merrybet",
      1: merryBetOdds ? merryBetOdds["1"] : "--.--",
      x: merryBetOdds ? merryBetOdds.X : "--.--",
      2: merryBetOdds ? merryBetOdds["2"] : "--.--"
    }
  ];
};

export default buildDataTable;
