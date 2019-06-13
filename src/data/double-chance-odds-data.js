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
      1: nairabetOdds ? nairabetOdds["1X"] : "--.--",
      x: nairabetOdds ? nairabetOdds["2X"] : "--.--",
      2: nairabetOdds ? nairabetOdds["12"] : "--.--"
    },
    {
      logo: bet9jaLogo,
      bookie: "Bet9ja",
      1: bet9jaOdds ? bet9jaOdds["1X"] : "--.--",
      x: bet9jaOdds ? bet9jaOdds["2X"] : "--.--",
      2: bet9jaOdds ? bet9jaOdds["12"] : "--.--"
    },
    {
      logo: _1960betLogo,
      bookie: "1960Bet",
      1: _1960betOdds ? _1960betOdds["1X"] : "--.--",
      x: _1960betOdds ? _1960betOdds["2X"] : "--.--",
      2: _1960betOdds ? _1960betOdds["12"] : "--.--"
    },
    {
      logo: betWayLogo,
      bookie: "Betway",
      1: betwayOdds ? betwayOdds["1X"] : "--.--",
      x: betwayOdds ? betwayOdds["2X"] : "--.--",
      2: betwayOdds ? betwayOdds["12"] : "--.--"
    },
    {
      logo: betKingLogo,
      bookie: "Betking",
      1: betkingOdds ? betkingOdds["1X"] : "--.--",
      x: betkingOdds ? betkingOdds["2X"] : "--.--",
      2: betkingOdds ? betkingOdds["12"] : "--.--"
    },
    {
      logo: sportybetLogo,
      bookie: "SportyBet",
      1: sportybetOdds ? sportybetOdds["1X"] : "--.--",
      x: sportybetOdds ? sportybetOdds["2X"] : "--.--",
      2: sportybetOdds ? sportybetOdds["12"] : "--.--"
    },
    {
      logo: surebetLogo,
      bookie: "Surebet",
      1: surebetOdds ? surebetOdds["1X"] : "--.--",
      x: surebetOdds ? surebetOdds["2X"] : "--.--",
      2: surebetOdds ? surebetOdds["12"] : "--.--"
    },
    {
      logo: merrybetLogo,
      bookie: "Merrybet",
      1: merryBetOdds ? merryBetOdds["1X"] : "--.--",
      x: merryBetOdds ? merryBetOdds["2X"] : "--.--",
      2: merryBetOdds ? merryBetOdds["12"] : "--.--"
    }
  ];
};

export default buildDataTable;
