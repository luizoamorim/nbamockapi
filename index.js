const express = require("express");
const app = express();

// Define an array of 10 upcoming games
const upcomingGames = [
  {
    teamA: "Los Angeles Lakers",
    teamB: "Brooklyn Nets",
    date: "2023-03-01",
    location: "Staples Center",
  },
  {
    teamA: "Philadelphia 76ers",
    teamB: "Golden State Warriors",
    date: "2023-03-02",
    location: "Wells Fargo Center",
  },
  {
    teamA: "Miami Heat",
    teamB: "Toronto Raptors",
    date: "2023-03-03",
    location: "AmericanAirlines Arena",
  },
  {
    teamA: "Utah Jazz",
    teamB: "Boston Celtics",
    date: "2023-03-04",
    location: "Vivint Arena",
  },
  {
    teamA: "Houston Rockets",
    teamB: "Milwaukee Bucks",
    date: "2023-03-05",
    location: "Toyota Center",
  },
  {
    teamA: "Denver Nuggets",
    teamB: "Atlanta Hawks",
    date: "2023-03-06",
    location: "Ball Arena",
  },
  {
    teamA: "Los Angeles Clippers",
    teamB: "New York Knicks",
    date: "2023-03-07",
    location: "Staples Center",
  },
  {
    teamA: "Phoenix Suns",
    teamB: "Indiana Pacers",
    date: "2023-03-08",
    location: "Phoenix Suns Arena",
  },
  {
    teamA: "Dallas Mavericks",
    teamB: "Charlotte Hornets",
    date: "2023-03-09",
    location: "American Airlines Center",
  },
  {
    teamA: "San Antonio Spurs",
    teamB: "Cleveland Cavaliers",
    date: "2023-03-10",
    location: "AT&T Center",
  },
];

// Define a route that returns the list of upcoming games
app.get("/upcoming-games", (req, res) => {
  res.json(upcomingGames);
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
