const express = require("express");
const app = express();

// Define an array of 10 upcoming games
const upcomingGames = [
  [
    "Los Angeles Lakers",
    "https://loodibee.com/wp-content/uploads/nba-los-angeles-lakers-logo-300x300.png",
    "Brooklyn Nets",
    "https://loodibee.com/wp-content/uploads/nba-brooklyn-nets-logo-300x300.png",
    "2023-03-01",
    "Staples Center",
  ],
  [
    "Philadelphia 76ers",
    "https://loodibee.com/wp-content/uploads/nba-philadelphia-76ers-logo-300x300.png",
    "Golden State Warriors",
    "https://loodibee.com/wp-content/uploads/nba-golden-state-warriors-logo-2020-300x300.png",
    "2023-03-02",
    "Wells Fargo Center",
  ],
  [
    "Miami Heat",
    "https://loodibee.com/wp-content/uploads/nba-miami-heat-logo-300x300.png",
    "Toronto Raptors",
    "https://loodibee.com/wp-content/uploads/nba-toronto-raptors-logo-2020-300x300.png",
    "2023-03-03",
    "AmericanAirlines Arena",
  ],
  [
    "Utah Jazz",
    "https://loodibee.com/wp-content/uploads/utah-jazz-logo-2022-300x300.png",
    "Boston Celtics",
    "https://loodibee.com/wp-content/uploads/nba-boston-celtics-logo-300x300.png",
    "2023-03-04",
    "Vivint Arena",
  ],
  [
    "Houston Rockets",
    "https://loodibee.com/wp-content/uploads/nba-houston-rockets-logo-2020-300x300.png",
    "Milwaukee Bucks",
    "https://loodibee.com/wp-content/uploads/nba-milwaukee-bucks-logo-300x300.png",
    "2023-03-05",
    "Toyota Center",
  ],
  [
    "Denver Nuggets",
    "https://loodibee.com/wp-content/uploads/nba-denver-nuggets-logo-2018-300x300.png",
    "Atlanta Hawks",
    "https://loodibee.com/wp-content/uploads/nba-atlanta-hawks-logo-300x300.png",
    "2023-03-06",
    "Ball Arena",
  ],
  [
    "Los Angeles Clippers",
    "https://loodibee.com/wp-content/uploads/nba-la-clippers-logo-300x300.png",
    "New York Knicks",
    "https://loodibee.com/wp-content/uploads/nba-new-york-knicks-logo-300x300.png",
    "2023-03-07",
    "Staples Center",
  ],
  [
    "Phoenix Suns",
    "https://loodibee.com/wp-content/uploads/nba-phoenix-suns-logo-300x300.png",
    "Indiana Pacers",
    "https://loodibee.com/wp-content/uploads/nba-indiana-pacers-logo-300x300.png",
    "2023-03-08",
    "Phoenix Suns Arena",
  ],
  [
    "Dallas Mavericks",
    "https://loodibee.com/wp-content/uploads/nba-dallas-mavericks-logo-300x300.png",
    "Charlotte Hornets",
    "https://loodibee.com/wp-content/uploads/nba-charlotte-hornets-logo-300x300.png",
    "2023-03-09",
    "American Airlines Center",
  ],
  [
    "San Antonio Spurs",
    "https://loodibee.com/wp-content/uploads/nba-san-antonio-spurs-logo-300x300.png",
    "Cleveland Cavaliers",
    "https://loodibee.com/wp-content/uploads/Clevelan-Cavaliers-logo-2022-300x300.png",
    "2023-03-10",
    "AT&T Center",
  ],
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
