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
      yes: nairabetOdds ? nairabetOdds.GG : "--.--",
      no: nairabetOdds ? nairabetOdds.NG : "--.--"
    },
    {
      logo: bet9jaLogo,
      bookie: "Bet9ja",
      yes: bet9jaOdds ? bet9jaOdds.GG : "--.--",
      no: bet9jaOdds ? bet9jaOdds.NG : "--.--"
    },
    {
      logo: _1960betLogo,
      bookie: "1960Bet",
      yes: _1960betOdds ? _1960betOdds.GG : "--.--",
      no: _1960betOdds ? _1960betOdds.NG : "--.--"
    },
    {
      logo: betWayLogo,
      bookie: "Betway",
      yes: betwayOdds ? betwayOdds.GG : "--.--",
      no: betwayOdds ? betwayOdds.NG : "--.--"
    },
    {
      logo: betKingLogo,
      bookie: "Betking",
      yes: betkingOdds ? betkingOdds.GG : "--.--",
      no: betkingOdds ? betkingOdds.NG : "--.--"
    },
    {
      logo: sportybetLogo,
      bookie: "SportyBet",
      yes: sportybetOdds ? sportybetOdds.GG : "--.--",
      no: sportybetOdds ? sportybetOdds.NG : "--.--"
    },
    {
      logo: surebetLogo,
      bookie: "Surebet",
      yes: surebetOdds ? surebetOdds.GG : "--.--",
      no: surebetOdds ? surebetOdds.NG : "--.--"
    },
    {
      logo: merrybetLogo,
      bookie: "Merrybet",
      yes: merryBetOdds ? merryBetOdds.GG : "--.--",
      no: merryBetOdds ? merryBetOdds.NG : "--.--"
    }
  ];
};

export default buildDataTable;
