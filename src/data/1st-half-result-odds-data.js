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
      1: nairabetOdds ? nairabetOdds["1HT"] : "--.--",
      x: nairabetOdds ? nairabetOdds.XHT : "--.--",
      2: nairabetOdds ? nairabetOdds["2HT"] : "--.--"
    },
    {
      logo: bet9jaLogo,
      bookie: "Bet9ja",
      1: bet9jaOdds ? bet9jaOdds["1HT"] : "--.--",
      x: bet9jaOdds ? bet9jaOdds.XHT : "--.--",
      2: bet9jaOdds ? bet9jaOdds["2HT"] : "--.--"
    },
    {
      logo: _1960betLogo,
      bookie: "1960Bet",
      1: _1960betOdds ? _1960betOdds["1HT"] : "--.--",
      x: _1960betOdds ? _1960betOdds.XHT : "--.--",
      2: _1960betOdds ? _1960betOdds["2HT"] : "--.--"
    },
    {
      logo: betWayLogo,
      bookie: "Betway",
      1: betwayOdds ? betwayOdds["1HT"] : "--.--",
      x: betwayOdds ? betwayOdds.XHT : "--.--",
      2: betwayOdds ? betwayOdds["2HT"] : "--.--"
    },
    {
      logo: betKingLogo,
      bookie: "Betking",
      1: betkingOdds ? betkingOdds["1HT"] : "--.--",
      x: betkingOdds ? betkingOdds.XHT : "--.--",
      2: betkingOdds ? betkingOdds["2HT"] : "--.--"
    },
    {
      logo: sportybetLogo,
      bookie: "SportyBet",
      1: sportybetOdds ? sportybetOdds["1HT"] : "--.--",
      x: sportybetOdds ? sportybetOdds.XHT : "--.--",
      2: sportybetOdds ? sportybetOdds["2HT"] : "--.--"
    },
    {
      logo: surebetLogo,
      bookie: "Surebet",
      1: surebetOdds ? surebetOdds["1HT"] : "--.--",
      x: surebetOdds ? surebetOdds.XHT : "--.--",
      2: surebetOdds ? surebetOdds["2HT"] : "--.--"
    },
    {
      logo: merrybetLogo,
      bookie: "Merrybet",
      1: merryBetOdds ? merryBetOdds["1HT"] : "--.--",
      x: merryBetOdds ? merryBetOdds.XHT : "--.--",
      2: merryBetOdds ? merryBetOdds["2HT"] : "--.--"
    }
  ];
};

export default buildDataTable;
