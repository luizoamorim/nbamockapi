const express = require("express");
const app = express();

// Define an array of 10 upcoming games
const upcomingGames = [
  {
    teamA: "Los Angeles Lakers",
    teamAImage:
      "https://loodibee.com/wp-content/uploads/nba-los-angeles-lakers-logo-300x300.png",
    teamB: "Brooklyn Nets",
    teamBImage:
      "https://loodibee.com/wp-content/uploads/nba-brooklyn-nets-logo-300x300.png",
    date: "2023-03-01",
    location: "Staples Center",
  },
  {
    teamA: "Philadelphia 76ers",
    teamAImage:
      "https://loodibee.com/wp-content/uploads/nba-philadelphia-76ers-logo-300x300.png",
    teamB: "Golden State Warriors",
    teamBImage:
      "https://loodibee.com/wp-content/uploads/nba-golden-state-warriors-logo-2020-300x300.png",
    date: "2023-03-02",
    location: "Wells Fargo Center",
  },
  {
    teamA: "Miami Heat",
    teamAImage:
      "https://loodibee.com/wp-content/uploads/nba-miami-heat-logo-300x300.png",
    teamB: "Toronto Raptors",
    teamBImage:
      "https://loodibee.com/wp-content/uploads/nba-toronto-raptors-logo-2020-300x300.png",
    date: "2023-03-03",
    location: "AmericanAirlines Arena",
  },
  {
    teamA: "Utah Jazz",
    teamAImage:
      "https://loodibee.com/wp-content/uploads/utah-jazz-logo-2022-300x300.png",
    teamB: "Boston Celtics",
    teamBImage:
      "https://loodibee.com/wp-content/uploads/nba-boston-celtics-logo-300x300.png",
    date: "2023-03-04",
    location: "Vivint Arena",
  },
  {
    teamA: "Houston Rockets",
    teamAImage:
      "https://loodibee.com/wp-content/uploads/nba-houston-rockets-logo-2020-300x300.png",
    teamB: "Milwaukee Bucks",
    teamBImage:
      "https://loodibee.com/wp-content/uploads/nba-milwaukee-bucks-logo-300x300.png",
    date: "2023-03-05",
    location: "Toyota Center",
  },
  {
    teamA: "Denver Nuggets",
    teamAImage:
      "https://loodibee.com/wp-content/uploads/nba-denver-nuggets-logo-2018-300x300.png",
    teamB: "Atlanta Hawks",
    teamBImage:
      "https://loodibee.com/wp-content/uploads/nba-atlanta-hawks-logo-300x300.png",
    date: "2023-03-06",
    location: "Ball Arena",
  },
  {
    teamA: "Los Angeles Clippers",
    teamAImage:
      "https://loodibee.com/wp-content/uploads/nba-la-clippers-logo-300x300.png",
    teamB: "New York Knicks",
    teamBImage:
      "https://loodibee.com/wp-content/uploads/nba-new-york-knicks-logo-300x300.png",
    date: "2023-03-07",
    location: "Staples Center",
  },
  {
    teamA: "Phoenix Suns",
    teamAImage:
      "https://loodibee.com/wp-content/uploads/nba-phoenix-suns-logo-300x300.png",
    teamB: "Indiana Pacers",
    teamBImage:
      "https://loodibee.com/wp-content/uploads/nba-indiana-pacers-logo-300x300.png",
    date: "2023-03-08",
    location: "Phoenix Suns Arena",
  },
  {
    teamA: "Dallas Mavericks",
    teamAImage:
      "https://loodibee.com/wp-content/uploads/nba-dallas-mavericks-logo-300x300.png",
    teamB: "Charlotte Hornets",
    teamBImage:
      "https://loodibee.com/wp-content/uploads/nba-charlotte-hornets-logo-300x300.png",
    date: "2023-03-09",
    location: "American Airlines Center",
  },
  {
    teamA: "San Antonio Spurs",
    teamAImage:
      "https://loodibee.com/wp-content/uploads/nba-san-antonio-spurs-logo-300x300.png",
    teamB: "Cleveland Cavaliers",
    teamBImage:
      "https://loodibee.com/wp-content/uploads/Clevelan-Cavaliers-logo-2022-300x300.png",
    date: "2023-03-10",
    location: "AT&T Center",
  },
];

const resultingGames = [
  {
    teamA: 118,
    teamB: 100,
  },
  {
    teamA: 115,
    teamB: 102,
  },
  {
    teamA: 99,
    teamB: 89,
  },
  {
    teamA: 89,
    teamB: 74,
  },
  {
    teamA: 125,
    teamB: 55,
  },
  {
    teamA: 131,
    teamB: 101,
  },
  {
    teamA: 77,
    teamB: 78,
  },
  {
    teamA: 100,
    teamB: 119,
  },
  {
    teamA: 98,
    teamB: 114,
  },
  {
    teamA: 97,
    teamB: 103,
  },
];

// Define a route that returns the list of upcoming games
app.get("/upcoming-games", (req, res) => {
  res.json(upcomingGames);
});

app.get("/resulting-games", (req, res) => {
  res.json(resultingGames);
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
