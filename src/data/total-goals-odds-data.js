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
      under: nairabetOdds ? nairabetOdds["U2.5"] : "--.--",
      over: nairabetOdds ? nairabetOdds["O2.5"] : "--.--"
    },
    {
      logo: bet9jaLogo,
      bookie: "Bet9ja",
      under: bet9jaOdds ? bet9jaOdds["U2.5"] : "--.--",
      over: bet9jaOdds ? bet9jaOdds["O2.5"] : "--.--"
    },
    {
      logo: _1960betLogo,
      bookie: "1960Bet",
      under: _1960betOdds ? _1960betOdds["U2.5"] : "--.--",
      over: _1960betOdds ? _1960betOdds["O2.5"] : "--.--"
    },
    {
      logo: betWayLogo,
      bookie: "Betway",
      under: betwayOdds ? betwayOdds["U2.5"] : "--.--",
      over: betwayOdds ? betwayOdds["O2.5"] : "--.--"
    },
    {
      logo: betKingLogo,
      bookie: "Betking",
      under: betkingOdds ? betkingOdds["U2.5"] : "--.--",
      over: betkingOdds ? betkingOdds["O2.5"] : "--.--"
    },
    {
      logo: sportybetLogo,
      bookie: "SportyBet",
      under: sportybetOdds ? sportybetOdds["U2.5"] : "--.--",
      over: sportybetOdds ? sportybetOdds["O2.5"] : "--.--"
    },
    {
      logo: surebetLogo,
      bookie: "Surebet",
      under: surebetOdds ? surebetOdds["U2.5"] : "--.--",
      over: surebetOdds ? surebetOdds["O2.5"] : "--.--"
    },
    {
      logo: merrybetLogo,
      bookie: "Merrybet",
      under: merryBetOdds ? merryBetOdds["U2.5"] : "--.--",
      over: merryBetOdds ? merryBetOdds["O2.5"] : "--.--"
    }
  ];
};

export default buildDataTable;
