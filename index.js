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

const sportsABI = {
  _format: "hh-sol-artifact-1",
  contractName: "Sports",
  sourceName: "contracts/Sports.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "_chainlinkToken",
          type: "address",
        },
        {
          internalType: "address[]",
          name: "_chainlinkOracle",
          type: "address[]",
        },
        {
          internalType: "bytes32",
          name: "_jobIdNumbers",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "_jobIdMultipleNumbers",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "_jobIdBytes",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "_relayer",
          type: "address",
        },
        {
          internalType: "address",
          name: "_usdcContractAddress",
          type: "address",
        },
        {
          internalType: "address[]",
          name: "_admins",
          type: "address[]",
        },
        {
          internalType: "string[]",
          name: "_API",
          type: "string[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "_gameId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_homeScore",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_awayScore",
          type: "uint256",
        },
      ],
      name: "BetCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "ChainlinkCancelled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "ChainlinkFulfilled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "ChainlinkRequested",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes",
          name: "_gameTime",
          type: "bytes",
        },
        {
          indexed: true,
          internalType: "bytes",
          name: "_homeTeam",
          type: "bytes",
        },
        {
          indexed: true,
          internalType: "bytes",
          name: "_awayTeam",
          type: "bytes",
        },
      ],
      name: "GameCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "print",
          type: "uint256",
        },
      ],
      name: "Print",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "requestId",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes[]",
          name: "data",
          type: "bytes[]",
        },
      ],
      name: "RequestBytesFulfilled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "requestId",
          type: "bytes32",
        },
      ],
      name: "RequestBytesSent",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "requestId",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "random",
          type: "uint256",
        },
      ],
      name: "RequestNumberFulfilled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "requestId",
          type: "bytes32",
        },
      ],
      name: "RequestNumberSent",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "requestId",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "TeamA",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "TeamB",
          type: "uint256",
        },
      ],
      name: "RequestResultFulfilled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "requestId",
          type: "bytes32",
        },
      ],
      name: "RequestResultSent",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "USDc",
      outputs: [
        {
          internalType: "contract USDC",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "addGamesFromAPI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_gameId",
          type: "uint256",
        },
      ],
      name: "addResultsFromAPI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "betsByGame",
      outputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "gameId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "homeScore",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "awayScore",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "betWon",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "betCompleted",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "requestId",
          type: "bytes32",
        },
        {
          internalType: "bytes[]",
          name: "_arrayOfBytes",
          type: "bytes[]",
        },
      ],
      name: "fulfillBytesArray",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_requestId",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "_number",
          type: "uint256",
        },
      ],
      name: "fulfillNumber",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "requestId",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "_teamA",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_teamB",
          type: "uint256",
        },
      ],
      name: "fulfillResults",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "gameCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "games",
      outputs: [
        {
          internalType: "bytes",
          name: "homeTeam",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "homeTeamImage",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "awayTeam",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "awayTeamImage",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "gameTime",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "homeScore",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "awayScore",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "gameCompleted",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "lotteryPool",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "betsCount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "betsAmount",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "loosersByGame",
      outputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "gameId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "homeScore",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "awayScore",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "betWon",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "betCompleted",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "loterryWinners",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_gameId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_homeScore",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_awayScore",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_USDCamount",
          type: "uint256",
        },
      ],
      name: "makeBet",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
        {
          internalType: "address payable",
          name: "destination",
          type: "address",
        },
      ],
      name: "transferFunds",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_newJobIdNumbers",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "_newJobIdMultipleNumbers",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "_newJobIdBytes",
          type: "bytes32",
        },
      ],
      name: "updateChainlinkJobIdNumbers",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_gameId",
          type: "uint256",
        },
      ],
      name: "updateGameScore",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_newOracle",
          type: "address",
        },
      ],
      name: "updateGamesOracle",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_newUrl",
          type: "string",
        },
      ],
      name: "updateNumberAPI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x608060405260016004553480156200001657600080fd5b5060405162006f0e38038062006f0e83398181016040528101906200003c9190620009c5565b6200005c620000506200030d60201b60201c565b6200031560201b60201c565b6200006d89620003db60201b60201c565b6200009c8860018151811062000088576200008762000b01565b5b60200260200101516200041f60201b60201c565b87600081518110620000b357620000b262000b01565b5b6020026020010151601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550866011819055508460128190555085601381905550600a670de0b6b3a7640000600162000129919062000b69565b62000135919062000be3565b60148190555060236103e8670de0b6b3a7640000600162000157919062000b69565b62000163919062000be3565b6200016f919062000b69565b60158190555082601860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060005b82518110156200022657620002127fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775848381518110620001fe57620001fd62000b01565b5b60200260200101516200046360201b60201c565b806200021e9062000c1b565b9050620001b9565b506200023c6000801b336200046360201b60201c565b6200026e7fab4f864e5201b0fde9b5ee3e4cf96384802b0ffdfcf7f9de4699ce21a30afc4f856200046360201b60201c565b8060008151811062000285576200028462000b01565b5b6020026020010151600d90816200029d919062000ea9565b5080600181518110620002b557620002b462000b01565b5b6020026020010151600e9081620002cd919062000ea9565b5080600281518110620002e557620002e462000b01565b5b6020026020010151600f9081620002fd919062000ea9565b5050505050505050505062000f90565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6200047582826200055560201b60201c565b620005515760016007600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620004f66200030d60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006007600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200060182620005d4565b9050919050565b6200061381620005f4565b81146200061f57600080fd5b50565b600081519050620006338162000608565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000689826200063e565b810181811067ffffffffffffffff82111715620006ab57620006aa6200064f565b5b80604052505050565b6000620006c0620005c0565b9050620006ce82826200067e565b919050565b600067ffffffffffffffff821115620006f157620006f06200064f565b5b602082029050602081019050919050565b600080fd5b60006200071e6200071884620006d3565b620006b4565b9050808382526020820190506020840283018581111562000744576200074362000702565b5b835b818110156200077157806200075c888262000622565b84526020840193505060208101905062000746565b5050509392505050565b600082601f83011262000793576200079262000639565b5b8151620007a584826020860162000707565b91505092915050565b6000819050919050565b620007c381620007ae565b8114620007cf57600080fd5b50565b600081519050620007e381620007b8565b92915050565b600067ffffffffffffffff8211156200080757620008066200064f565b5b602082029050602081019050919050565b600080fd5b600067ffffffffffffffff8211156200083b576200083a6200064f565b5b62000846826200063e565b9050602081019050919050565b60005b838110156200087357808201518184015260208101905062000856565b60008484015250505050565b60006200089662000890846200081d565b620006b4565b905082815260208101848484011115620008b557620008b462000818565b5b620008c284828562000853565b509392505050565b600082601f830112620008e257620008e162000639565b5b8151620008f48482602086016200087f565b91505092915050565b6000620009146200090e84620007e9565b620006b4565b905080838252602082019050602084028301858111156200093a576200093962000702565b5b835b818110156200098857805167ffffffffffffffff81111562000963576200096262000639565b5b808601620009728982620008ca565b855260208501945050506020810190506200093c565b5050509392505050565b600082601f830112620009aa57620009a962000639565b5b8151620009bc848260208601620008fd565b91505092915050565b60008060008060008060008060006101208a8c031215620009eb57620009ea620005ca565b5b6000620009fb8c828d0162000622565b99505060208a015167ffffffffffffffff81111562000a1f5762000a1e620005cf565b5b62000a2d8c828d016200077b565b985050604062000a408c828d01620007d2565b975050606062000a538c828d01620007d2565b965050608062000a668c828d01620007d2565b95505060a062000a798c828d0162000622565b94505060c062000a8c8c828d0162000622565b93505060e08a015167ffffffffffffffff81111562000ab05762000aaf620005cf565b5b62000abe8c828d016200077b565b9250506101008a015167ffffffffffffffff81111562000ae35762000ae2620005cf565b5b62000af18c828d0162000992565b9150509295985092959850929598565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000b768262000b30565b915062000b838362000b30565b925082820262000b938162000b30565b9150828204841483151762000bad5762000bac62000b3a565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600062000bf08262000b30565b915062000bfd8362000b30565b92508262000c105762000c0f62000bb4565b5b828204905092915050565b600062000c288262000b30565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362000c5d5762000c5c62000b3a565b5b600182019050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000cbb57607f821691505b60208210810362000cd15762000cd062000c73565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830262000d3b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000cfc565b62000d47868362000cfc565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000d8a62000d8462000d7e8462000b30565b62000d5f565b62000b30565b9050919050565b6000819050919050565b62000da68362000d69565b62000dbe62000db58262000d91565b84845462000d09565b825550505050565b600090565b62000dd562000dc6565b62000de281848462000d9b565b505050565b5b8181101562000e0a5762000dfe60008262000dcb565b60018101905062000de8565b5050565b601f82111562000e595762000e238162000cd7565b62000e2e8462000cec565b8101602085101562000e3e578190505b62000e5662000e4d8562000cec565b83018262000de7565b50505b505050565b600082821c905092915050565b600062000e7e6000198460080262000e5e565b1980831691505092915050565b600062000e99838362000e6b565b9150826002028217905092915050565b62000eb48262000c68565b67ffffffffffffffff81111562000ed05762000ecf6200064f565b5b62000edc825462000ca2565b62000ee982828562000e0e565b600060209050601f83116001811462000f21576000841562000f0c578287015190505b62000f18858262000e8b565b86555062000f88565b601f19841662000f318662000cd7565b60005b8281101562000f5b5784890151825560018201915060208501945060208101905062000f34565b8683101562000f7b578489015162000f77601f89168262000e6b565b8355505b6001600288020188555050505b505050505050565b615f6e8062000fa06000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c8063955406d1116100f9578063cea24e7411610097578063ee0f45ff11610071578063ee0f45ff1461049e578063f08e362f146104d4578063f2fde38b146104f0578063f9ace24e1461050c576101a9565b8063cea24e741461044a578063d547741f14610466578063e5a2a1f814610482576101a9565b8063a217fddf116100d3578063a217fddf146103d6578063ade3778a146103f4578063afcc4ad514610410578063bfd5c6df1461042e576101a9565b8063955406d11461039457806399befd53146103b0578063a063e9fb146103ba576101a9565b80633b6e6f1b11610166578063715018a611610140578063715018a6146103205780638da5cb5b1461032a57806391d14854146103485780639552513e14610378576101a9565b80633b6e6f1b146102b05780634d1975b4146102e6578063708d90d614610304576101a9565b806301ffc9a7146101ae57806303fd88d5146101de578063117a5b901461020e578063248a9ca3146102485780632f2ff15d1461027857806336568abe14610294575b600080fd5b6101c860048036038101906101c39190613f6b565b610528565b6040516101d59190613fb3565b60405180910390f35b6101f860048036038101906101f39190614004565b6105a2565b6040516102059190614072565b60405180910390f35b61022860048036038101906102239190614004565b6105d5565b60405161023f9b9a9998979695949392919061412c565b60405180910390f35b610262600480360381019061025d9190614230565b6108e4565b60405161026f919061426c565b60405180910390f35b610292600480360381019061028d91906142b3565b610904565b005b6102ae60048036038101906102a991906142b3565b610925565b005b6102ca60048036038101906102c591906142f3565b6109a8565b6040516102dd9796959493929190614333565b60405180910390f35b6102ee610a31565b6040516102fb91906143a2565b60405180910390f35b61031e600480360381019061031991906143bd565b610a37565b005b610328610be7565b005b610332610bfb565b60405161033f9190614072565b60405180910390f35b610362600480360381019061035d91906142b3565b610c25565b60405161036f9190613fb3565b60405180910390f35b610392600480360381019061038d9190614410565b610c90565b005b6103ae60048036038101906103a99190614463565b610d71565b005b6103b8610e5b565b005b6103d460048036038101906103cf9190614490565b61108e565b005b6103de6114b1565b6040516103eb919061426c565b60405180910390f35b61040e600480360381019061040991906144f7565b6114b8565b005b6104186117c1565b6040516104259190614596565b60405180910390f35b610448600480360381019061044391906146e6565b6117e7565b005b610464600480360381019061045f9190614004565b6118a0565b005b610480600480360381019061047b91906142b3565b611952565b005b61049c600480360381019061049791906148b6565b611973565b005b6104b860048036038101906104b391906142f3565b611b54565b6040516104cb9796959493929190614333565b60405180910390f35b6104ee60048036038101906104e99190614950565b611bdd565b005b61050a60048036038101906105059190614463565b611c8a565b005b61052660048036038101906105219190614004565b611d0d565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061059b575061059a82612021565b5b9050919050565b600a6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b6020528060005260406000206000915090508060000180546105f8906149bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610624906149bf565b80156106715780601f1061064657610100808354040283529160200191610671565b820191906000526020600020905b81548152906001019060200180831161065457829003601f168201915b505050505090806001018054610686906149bf565b80601f01602080910402602001604051908101604052809291908181526020018280546106b2906149bf565b80156106ff5780601f106106d4576101008083540402835291602001916106ff565b820191906000526020600020905b8154815290600101906020018083116106e257829003601f168201915b505050505090806002018054610714906149bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610740906149bf565b801561078d5780601f106107625761010080835404028352916020019161078d565b820191906000526020600020905b81548152906001019060200180831161077057829003601f168201915b5050505050908060030180546107a2906149bf565b80601f01602080910402602001604051908101604052809291908181526020018280546107ce906149bf565b801561081b5780601f106107f05761010080835404028352916020019161081b565b820191906000526020600020905b8154815290600101906020018083116107fe57829003601f168201915b505050505090806004018054610830906149bf565b80601f016020809104026020016040519081016040528092919081815260200182805461085c906149bf565b80156108a95780601f1061087e576101008083540402835291602001916108a9565b820191906000526020600020905b81548152906001019060200180831161088c57829003601f168201915b5050505050908060050154908060060154908060070160009054906101000a900460ff169080600801549080600901549080600a015490508b565b600060076000838152602001908152602001600020600101549050919050565b61090d826108e4565b6109168161208b565b610920838361209f565b505050565b61092d612180565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461099a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099190614a73565b60405180910390fd5b6109a48282612188565b5050565b6008602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040154908060050160009054906101000a900460ff16908060050160019054906101000a900460ff16905087565b600c5481565b826005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ad9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad090614b05565b60405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a2837f278d18a75e865cf3e726d05a02b077061926492380d35c05f56555a5e7b3e7df8484604051610b6e929190614b25565b60405180910390a282600b600060175481526020019081526020016000206005018190555081600b60006017548152602001908152602001600020600601819055506001600b6000601754815260200190815260200160002060070160006101000a81548160ff02191690831515021790555050505050565b610bef61226a565b610bf960006122e8565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006007600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610cba7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177533610c25565b80610cf75750610cc8610bfb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610d36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2d90614b9a565b60405180910390fd5b6000801b8314610d4857826011819055505b6000801b8214610d5a57816013819055505b6000801b8114610d6c57806012819055505b505050565b610d9b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177533610c25565b80610dd85750610da9610bfb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610e17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0e90614b9a565b60405180910390fd5b80601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610e857fab4f864e5201b0fde9b5ee3e4cf96384802b0ffdfcf7f9de4699ce21a30afc4f33610c25565b80610ec25750610e93610bfb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610f01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef890614c06565b60405180910390fd5b6000610f176012543063e5a2a1f860e01b6123ae565b9050610fed6040518060400160405280600381526020017f6765740000000000000000000000000000000000000000000000000000000000815250600e8054610f5f906149bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610f8b906149bf565b8015610fd85780601f10610fad57610100808354040283529160200191610fd8565b820191906000526020600020905b815481529060010190602001808311610fbb57829003601f168201915b5050505050836123df9092919063ffffffff16565b6110416040518060400160405280600481526020017f7061746800000000000000000000000000000000000000000000000000000000815250611031600c54612412565b836123df9092919063ffffffff16565b600061105b8260026014546110569190614c84565b6124e0565b9050807fd7b8242f7efe54cbffbcb9ab3cab3bd45981f49ab301d6b839ed011d0b31667360405160405180910390a25050565b600c5484106110d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c990614d01565b60405180910390fd5b60008111611115576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110c90614d93565b60405180910390fd5b6000601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161117693929190614db3565b6020604051808303816000875af1158015611195573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b99190614e16565b9050806111fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f290614e8f565b60405180910390fd5b600b600086815260200190815260200160002060070160009054906101000a900460ff161561125f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125690614efb565b60405180910390fd5b600060148361126e9190614c84565b9050600060058461127f9190614c84565b905080600b600089815260200190815260200160002060080160008282546112a79190614f1b565b925050819055508082856112bb9190614f4f565b6112c59190614f4f565b600b6000898152602001908152602001600020600a0160008282546112ea9190614f1b565b925050819055506040518060e001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200188815260200182848761132b9190614f4f565b6113359190614f4f565b815260200187815260200186815260200160001515815260200160001515815250600860008981526020019081526020016000206000600b60008b815260200190815260200160002060090154815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff02191690831515021790555060c08201518160050160016101000a81548160ff021916908315150217905550905050600b6000888152602001908152602001600020600901600081548092919061146990614f83565b9190505550867fbb79d51f1411ca03952954c866d22ae3532b227b2cf62e257cf182397a64717387876040516114a0929190614b25565b60405180910390a250505050505050565b6000801b81565b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461155a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155190614b05565b60405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a2827f56674309f088f07dcc038cf9f886d47b6d58c2aee17422468a7c223cc0839a02836040516115ed91906143a2565b60405180910390a281601681905550600182146117bc5760096000601754815260200190815260200160002060006001846116289190614f4f565b815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600a6000601754815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600960006017548152602001908152602001600020600060018661170f9190614f4f565b815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600b60006017548152602001908152602001600020600801546040518363ffffffff1660e01b8152600401611777929190614fcb565b6020604051808303816000875af1158015611796573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ba9190614e16565b505b505050565b601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6118117fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177533610c25565b8061184e575061181f610bfb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61188d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188490614b9a565b60405180910390fd5b80600d908161189c91906151a1565b5050565b6118ca7fab4f864e5201b0fde9b5ee3e4cf96384802b0ffdfcf7f9de4699ce21a30afc4f33610c25565b8061190757506118d8610bfb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b611946576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161193d90614c06565b60405180910390fd5b61194f81612517565b50565b61195b826108e4565b6119648161208b565b61196e8383612188565b505050565b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611a15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a0c90614b05565b60405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a281604051611a86919061535c565b6040518091039020837f5a57b85ff6e2f515bf4fbf834a27cec6083d7baf9eff5bbcce49d75d4c44ce3e60405160405180910390a3611b4f82600081518110611ad257611ad1615373565b5b602002602001015183600181518110611aee57611aed615373565b5b602002602001015184600281518110611b0a57611b09615373565b5b602002602001015185600381518110611b2657611b25615373565b5b602002602001015186600481518110611b4257611b41615373565b5b6020026020010151612c66565b505050565b6009602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040154908060050160009054906101000a900460ff16908060050160019054906101000a900460ff16905087565b611be561226a565b601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82846040518363ffffffff1660e01b8152600401611c429291906153c3565b6020604051808303816000875af1158015611c61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c859190614e16565b505050565b611c9261226a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611d01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cf89061545e565b60405180910390fd5b611d0a816122e8565b50565b611d377fab4f864e5201b0fde9b5ee3e4cf96384802b0ffdfcf7f9de4699ce21a30afc4f33610c25565b80611d745750611d45610bfb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b611db3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611daa90614c06565b60405180910390fd5b6000611dc96013543063708d90d660e01b6123ae565b90506000611dd683612412565b604051602001611de69190615506565b60405160208183030381529060405290506000611e0284612412565b604051602001611e129190615574565b6040516020818303038152906040529050611ef76040518060400160405280600381526020017f6765740000000000000000000000000000000000000000000000000000000000815250600f8054611e69906149bf565b80601f0160208091040260200160405190810160405280929190818152602001828054611e95906149bf565b8015611ee25780601f10611eb757610100808354040283529160200191611ee2565b820191906000526020600020905b815481529060010190602001808311611ec557829003601f168201915b5050505050856123df9092919063ffffffff16565b611f416040518060400160405280600581526020017f706174683100000000000000000000000000000000000000000000000000000081525083856123df9092919063ffffffff16565b611f8b6040518060400160405280600581526020017f706174683200000000000000000000000000000000000000000000000000000081525082856123df9092919063ffffffff16565b611fd66040518060400160405280600881526020017f6d756c7469706c79000000000000000000000000000000000000000000000000815250600185612e179092919063ffffffff16565b836017819055506000611feb846015546124e0565b9050807fe7a32afcf2413a36519016aab1d0c301eb77ab022284beed2a278aad61d1a09260405160405180910390a25050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61209c81612097612180565b612e4a565b50565b6120a98282610c25565b61217c5760016007600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550612121612180565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b6121928282610c25565b156122665760006007600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061220b612180565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b612272612180565b73ffffffffffffffffffffffffffffffffffffffff16612290610bfb565b73ffffffffffffffffffffffffffffffffffffffff16146122e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122dd906155e2565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6123b6613e21565b6123be613e21565b6123d585858584612ecf909392919063ffffffff16565b9150509392505050565b6123f6828460800151612f7f90919063ffffffff16565b61240d818460800151612f7f90919063ffffffff16565b505050565b60606000600161242184612fa4565b01905060008167ffffffffffffffff8111156124405761243f6145bb565b5b6040519080825280601f01601f1916602001820160405280156124725781602001600182028036833780820191505090505b509050600082602001820190505b6001156124d5578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816124c9576124c8614c26565b5b04945060008503612480575b819350505050919050565b600061250f600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684846130f7565b905092915050565b600c54811061255b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161255290614d01565b60405180910390fd5b600b600082815260200190815260200160002060070160009054906101000a900460ff166125be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125b59061564e565b60405180910390fd5b6000600b6000838152602001908152602001600020600901540315612c63576000805b600b6000848152602001908152602001600020600901548110156126ae57600b600084815260200190815260200160002060050154600860008581526020019081526020016000206000838152602001908152602001600020600301541480156126875750600b60008481526020019081526020016000206006015460086000858152602001908152602001600020600083815260200190815260200160002060040154145b1561269b57818061269790614f83565b9250505b80806126a690614f83565b9150506125e1565b5060008167ffffffffffffffff8111156126cb576126ca6145bb565b5b60405190808252806020026020018201604052801561270457816020015b6126f1613e8e565b8152602001906001900390816126e95790505b5090506000806000805b600b600088815260200190815260200160002060090154811015612ad857600b600088815260200190815260200160002060050154600860008981526020019081526020016000206000838152602001908152602001600020600301541480156127b45750600b60008881526020019081526020016000206006015460086000898152602001908152602001600020600083815260200190815260200160002060040154145b1561294257600160086000898152602001908152602001600020600083815260200190815260200160002060050160006101000a81548160ff0219169083151502179055506008600088815260200190815260200160002060008281526020019081526020016000206040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff161515151581526020016005820160019054906101000a900460ff1615151515815250508585815181106128ef576128ee615373565b5b6020026020010181905250600860008881526020019081526020016000206000828152602001908152602001600020600201548261292d9190614f1b565b9150838061293a90614f83565b945050612a85565b6008600088815260200190815260200160002060008281526020019081526020016000206009600089815260200190815260200160002060008581526020019081526020016000206000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820154816002015560038201548160030155600482015481600401556005820160009054906101000a900460ff168160050160006101000a81548160ff0219169083151502179055506005820160019054906101000a900460ff168160050160016101000a81548160ff0219169083151502179055509050508280612a8190614f83565b9350505b600160086000898152602001908152602001600020600083815260200190815260200160002060050160016101000a81548160ff0219169083151502179055508080612ad090614f83565b91505061270e565b5060008303612b2557600b6000878152602001908152602001600020600a0154600b60008881526020019081526020016000206008016000828254612b1d9190614f1b565b925050819055505b60005b83811015612c4c57601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb868381518110612b8157612b80615373565b5b60200260200101516000015184888581518110612ba157612ba0615373565b5b602002602001015160400151600b60008d8152602001908152602001600020600a0154612bce919061566e565b612bd89190614c84565b6040518363ffffffff1660e01b8152600401612bf5929190614fcb565b6020604051808303816000875af1158015612c14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c389190614e16565b508080612c4490614f83565b915050612b28565b5085601781905550612c5d826131c1565b50505050505b50565b604051806101600160405280868152602001858152602001848152602001838152602001828152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815250600b6000600c5481526020019081526020016000206000820151816000019081612ce4919061570b565b506020820151816001019081612cfa919061570b565b506040820151816002019081612d10919061570b565b506060820151816003019081612d26919061570b565b506080820151816004019081612d3c919061570b565b5060a0820151816005015560c0820151816006015560e08201518160070160006101000a81548160ff0219169083151502179055506101008201518160080155610120820151816009015561014082015181600a0155905050600c6000815480929190612da890614f83565b919050555082604051612dbb9190615819565b604051809103902085604051612dd19190615819565b60405180910390207f77191e0d0f58febc4c0d721e40183a0a4742b9b53af57cd3bde8468cd27118c183604051612e089190615830565b60405180910390a35050505050565b612e2e828460800151612f7f90919063ffffffff16565b612e4581846080015161335c90919063ffffffff16565b505050565b612e548282610c25565b612ecb57612e6181613409565b612e6f8360001c6020613436565b604051602001612e809291906158ea565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612ec2919061595d565b60405180910390fd5b5050565b612ed7613e21565b612ee78560800151610100613672565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b612f8c82600383516136dc565b612f9f818361386190919063ffffffff16565b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613002577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612ff857612ff7614c26565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061303f576d04ee2d6d415b85acef8100000000838161303557613034614c26565b5b0492506020810190505b662386f26fc10000831061306e57662386f26fc10000838161306457613063614c26565b5b0492506010810190505b6305f5e1008310613097576305f5e100838161308d5761308c614c26565b5b0492506008810190505b61271083106130bc5761271083816130b2576130b1614c26565b5b0492506004810190505b606483106130df57606483816130d5576130d4614c26565b5b0492506002810190505b600a83106130ee576001810190505b80915050919050565b600080600454905060018161310c9190614f1b565b6004819055506000633c6d41b960e01b600080876000015188604001518660028b608001516000015160405160240161314b979695949392919061598e565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506131b686838684613883565b925050509392505050565b60006131d76011543063ade3778a60e01b6123ae565b90506000600d6131e684612412565b6040516020016131f7929190615a87565b60405160208183030381529060405290506132526040518060400160405280600381526020017f676574000000000000000000000000000000000000000000000000000000000081525082846123df9092919063ffffffff16565b6132ab6040518060400160405280600481526020017f706174680000000000000000000000000000000000000000000000000000000081525060405180602001604052806000815250846123df9092919063ffffffff16565b6132f66040518060400160405280600581526020017f74696d6573000000000000000000000000000000000000000000000000000000815250600184612e179092919063ffffffff16565b6000613327601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684601454613a18565b9050807f1bbf3b6e20d98e7a10bd8311f993bf505fa12c23c2106847f80ded6578bbd95060405160405180910390a250505050565b7fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000008112156133935761338e8282613ae4565b613405565b67ffffffffffffffff8113156133b2576133ad8282613b5b565b613404565b600081126133cb576133c6826000836136dc565b613403565b613402826001837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6133fd9190615ab5565b6136dc565b5b5b5b5050565b606061342f8273ffffffffffffffffffffffffffffffffffffffff16601460ff16613436565b9050919050565b606060006002836002613449919061566e565b6134539190614f1b565b67ffffffffffffffff81111561346c5761346b6145bb565b5b6040519080825280601f01601f19166020018201604052801561349e5781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106134d6576134d5615373565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061353a57613539615373565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000600184600261357a919061566e565b6135849190614f1b565b90505b6001811115613624577f3031323334353637383961626364656600000000000000000000000000000000600f8616601081106135c6576135c5615373565b5b1a60f81b8282815181106135dd576135dc615373565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c94508061361d90615af8565b9050613587565b5060008414613668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161365f90615b6d565b60405180910390fd5b8091505092915050565b61367a613ee5565b60006020836136899190615b8d565b146136b55760208261369b9190615b8d565b60206136a79190614f4f565b826136b29190614f1b565b91505b81836020018181525050604051808452600081528281016020016040525082905092915050565b60178167ffffffffffffffff16116137135761370d8160058460ff16901b60ff161784613ba790919063ffffffff16565b5061385c565b60ff8167ffffffffffffffff161161376957613742601860058460ff16901b1784613ba790919063ffffffff16565b506137638167ffffffffffffffff16600185613bc79092919063ffffffff16565b5061385b565b61ffff8167ffffffffffffffff16116137c057613799601960058460ff16901b1784613ba790919063ffffffff16565b506137ba8167ffffffffffffffff16600285613bc79092919063ffffffff16565b5061385a565b63ffffffff8167ffffffffffffffff1611613819576137f2601a60058460ff16901b1784613ba790919063ffffffff16565b506138138167ffffffffffffffff16600485613bc79092919063ffffffff16565b50613859565b613836601b60058460ff16901b1784613ba790919063ffffffff16565b506138578167ffffffffffffffff16600885613bc79092919063ffffffff16565b505b5b5b5b505050565b613869613ee5565b61387b83846000015151848551613be9565b905092915050565b60003084604051602001613898929190615c39565b604051602081830303815290604052805190602001209050846005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea08685856040518463ffffffff1660e01b815260040161398e93929190615c65565b6020604051808303816000875af11580156139ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906139d19190614e16565b613a10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613a0790615d15565b60405180910390fd5b949350505050565b6000806004549050600181613a2d9190614f1b565b6004819055506000634042994660e01b60008087600001513089604001518760018c6080015160000151604051602401613a6e989796959493929190615d35565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050613ad986838684613883565b925050509392505050565b613b0260036005600660ff16901b1783613ba790919063ffffffff16565b50613b5782827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff613b339190615ab5565b604051602001613b4391906143a2565b604051602081830303815290604052613cd8565b5050565b613b7960026005600660ff16901b1783613ba790919063ffffffff16565b50613ba38282604051602001613b8f91906143a2565b604051602081830303815290604052613cd8565b5050565b613baf613ee5565b613bbf8384600001515184613cfd565b905092915050565b613bcf613ee5565b613be0848560000151518585613d53565b90509392505050565b613bf1613ee5565b8251821115613bff57600080fd5b84602001518285613c109190614f1b565b1115613c4557613c44856002613c3588602001518887613c309190614f1b565b613de1565b613c3f919061566e565b613dfd565b5b600080865180518760208301019350808887011115613c645787860182525b60208701925050505b60208410613cab5780518252602082613c869190614f1b565b9150602081613c959190614f1b565b9050602084613ca49190614f4f565b9350613c6d565b60006001856020036101000a03905080198251168184511681811785525050508692505050949350505050565b613ce582600283516136dc565b613cf8818361386190919063ffffffff16565b505050565b613d05613ee5565b83602001518310613d2b57613d2a8460028660200151613d25919061566e565b613dfd565b5b83518051602085830101848153818603613d46576001820183525b5050508390509392505050565b613d5b613ee5565b84602001518483613d6c9190614f1b565b1115613d9457613d938560028685613d849190614f1b565b613d8e919061566e565b613dfd565b5b6000600183610100613da69190615eed565b613db09190614f4f565b90508551838682010185831982511617815281518588011115613dd35784870182525b505085915050949350505050565b600081831115613df357829050613df7565b8190505b92915050565b600082600001519050613e108383613672565b50613e1b8382613861565b50505050565b6040518060a0016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200160008152602001613e88613ee5565b81525090565b6040518060e00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581525090565b604051806040016040528060608152602001600081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613f4881613f13565b8114613f5357600080fd5b50565b600081359050613f6581613f3f565b92915050565b600060208284031215613f8157613f80613f09565b5b6000613f8f84828501613f56565b91505092915050565b60008115159050919050565b613fad81613f98565b82525050565b6000602082019050613fc86000830184613fa4565b92915050565b6000819050919050565b613fe181613fce565b8114613fec57600080fd5b50565b600081359050613ffe81613fd8565b92915050565b60006020828403121561401a57614019613f09565b5b600061402884828501613fef565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061405c82614031565b9050919050565b61406c81614051565b82525050565b60006020820190506140876000830184614063565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156140c75780820151818401526020810190506140ac565b60008484015250505050565b6000601f19601f8301169050919050565b60006140ef8261408d565b6140f98185614098565b93506141098185602086016140a9565b614112816140d3565b840191505092915050565b61412681613fce565b82525050565b6000610160820190508181036000830152614147818e6140e4565b9050818103602083015261415b818d6140e4565b9050818103604083015261416f818c6140e4565b90508181036060830152614183818b6140e4565b90508181036080830152614197818a6140e4565b90506141a660a083018961411d565b6141b360c083018861411d565b6141c060e0830187613fa4565b6141ce61010083018661411d565b6141dc61012083018561411d565b6141ea61014083018461411d565b9c9b505050505050505050505050565b6000819050919050565b61420d816141fa565b811461421857600080fd5b50565b60008135905061422a81614204565b92915050565b60006020828403121561424657614245613f09565b5b60006142548482850161421b565b91505092915050565b614266816141fa565b82525050565b6000602082019050614281600083018461425d565b92915050565b61429081614051565b811461429b57600080fd5b50565b6000813590506142ad81614287565b92915050565b600080604083850312156142ca576142c9613f09565b5b60006142d88582860161421b565b92505060206142e98582860161429e565b9150509250929050565b6000806040838503121561430a57614309613f09565b5b600061431885828601613fef565b925050602061432985828601613fef565b9150509250929050565b600060e082019050614348600083018a614063565b614355602083018961411d565b614362604083018861411d565b61436f606083018761411d565b61437c608083018661411d565b61438960a0830185613fa4565b61439660c0830184613fa4565b98975050505050505050565b60006020820190506143b7600083018461411d565b92915050565b6000806000606084860312156143d6576143d5613f09565b5b60006143e48682870161421b565b93505060206143f586828701613fef565b925050604061440686828701613fef565b9150509250925092565b60008060006060848603121561442957614428613f09565b5b60006144378682870161421b565b93505060206144488682870161421b565b92505060406144598682870161421b565b9150509250925092565b60006020828403121561447957614478613f09565b5b60006144878482850161429e565b91505092915050565b600080600080608085870312156144aa576144a9613f09565b5b60006144b887828801613fef565b94505060206144c987828801613fef565b93505060406144da87828801613fef565b92505060606144eb87828801613fef565b91505092959194509250565b6000806040838503121561450e5761450d613f09565b5b600061451c8582860161421b565b925050602061452d85828601613fef565b9150509250929050565b6000819050919050565b600061455c61455761455284614031565b614537565b614031565b9050919050565b600061456e82614541565b9050919050565b600061458082614563565b9050919050565b61459081614575565b82525050565b60006020820190506145ab6000830184614587565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6145f3826140d3565b810181811067ffffffffffffffff82111715614612576146116145bb565b5b80604052505050565b6000614625613eff565b905061463182826145ea565b919050565b600067ffffffffffffffff821115614651576146506145bb565b5b61465a826140d3565b9050602081019050919050565b82818337600083830152505050565b600061468961468484614636565b61461b565b9050828152602081018484840111156146a5576146a46145b6565b5b6146b0848285614667565b509392505050565b600082601f8301126146cd576146cc6145b1565b5b81356146dd848260208601614676565b91505092915050565b6000602082840312156146fc576146fb613f09565b5b600082013567ffffffffffffffff81111561471a57614719613f0e565b5b614726848285016146b8565b91505092915050565b600067ffffffffffffffff82111561474a576147496145bb565b5b602082029050602081019050919050565b600080fd5b600067ffffffffffffffff82111561477b5761477a6145bb565b5b614784826140d3565b9050602081019050919050565b60006147a461479f84614760565b61461b565b9050828152602081018484840111156147c0576147bf6145b6565b5b6147cb848285614667565b509392505050565b600082601f8301126147e8576147e76145b1565b5b81356147f8848260208601614791565b91505092915050565b600061481461480f8461472f565b61461b565b905080838252602082019050602084028301858111156148375761483661475b565b5b835b8181101561487e57803567ffffffffffffffff81111561485c5761485b6145b1565b5b80860161486989826147d3565b85526020850194505050602081019050614839565b5050509392505050565b600082601f83011261489d5761489c6145b1565b5b81356148ad848260208601614801565b91505092915050565b600080604083850312156148cd576148cc613f09565b5b60006148db8582860161421b565b925050602083013567ffffffffffffffff8111156148fc576148fb613f0e565b5b61490885828601614888565b9150509250929050565b600061491d82614031565b9050919050565b61492d81614912565b811461493857600080fd5b50565b60008135905061494a81614924565b92915050565b6000806040838503121561496757614966613f09565b5b600061497585828601613fef565b92505060206149868582860161493b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806149d757607f821691505b6020821081036149ea576149e9614990565b5b50919050565b600082825260208201905092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000614a5d602f836149f0565b9150614a6882614a01565b604082019050919050565b60006020820190508181036000830152614a8c81614a50565b9050919050565b7f536f75726365206d75737420626520746865206f7261636c65206f662074686560008201527f2072657175657374000000000000000000000000000000000000000000000000602082015250565b6000614aef6028836149f0565b9150614afa82614a93565b604082019050919050565b60006020820190508181036000830152614b1e81614ae2565b9050919050565b6000604082019050614b3a600083018561411d565b614b47602083018461411d565b9392505050565b7f49535f4e4f545f41444d494e0000000000000000000000000000000000000000600082015250565b6000614b84600c836149f0565b9150614b8f82614b4e565b602082019050919050565b60006020820190508181036000830152614bb381614b77565b9050919050565b7f49535f4e4f545f52454c41594552000000000000000000000000000000000000600082015250565b6000614bf0600e836149f0565b9150614bfb82614bba565b602082019050919050565b60006020820190508181036000830152614c1f81614be3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614c8f82613fce565b9150614c9a83613fce565b925082614caa57614ca9614c26565b5b828204905092915050565b7f496e76616c69642067616d652049440000000000000000000000000000000000600082015250565b6000614ceb600f836149f0565b9150614cf682614cb5565b602082019050919050565b60006020820190508181036000830152614d1a81614cde565b9050919050565b7f42657420616d6f756e74206d7573742062652067726561746572207468616e2060008201527f7a65726f00000000000000000000000000000000000000000000000000000000602082015250565b6000614d7d6024836149f0565b9150614d8882614d21565b604082019050919050565b60006020820190508181036000830152614dac81614d70565b9050919050565b6000606082019050614dc86000830186614063565b614dd56020830185614063565b614de2604083018461411d565b949350505050565b614df381613f98565b8114614dfe57600080fd5b50565b600081519050614e1081614dea565b92915050565b600060208284031215614e2c57614e2b613f09565b5b6000614e3a84828501614e01565b91505092915050565b7f5472616e73616374696f6e206661696c65640000000000000000000000000000600082015250565b6000614e796012836149f0565b9150614e8482614e43565b602082019050919050565b60006020820190508181036000830152614ea881614e6c565b9050919050565b7f47616d652068617320616c726561647920636f6d706c65746564000000000000600082015250565b6000614ee5601a836149f0565b9150614ef082614eaf565b602082019050919050565b60006020820190508181036000830152614f1481614ed8565b9050919050565b6000614f2682613fce565b9150614f3183613fce565b9250828201905080821115614f4957614f48614c55565b5b92915050565b6000614f5a82613fce565b9150614f6583613fce565b9250828203905081811115614f7d57614f7c614c55565b5b92915050565b6000614f8e82613fce565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614fc057614fbf614c55565b5b600182019050919050565b6000604082019050614fe06000830185614063565b614fed602083018461411d565b9392505050565b600081519050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026150617fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82615024565b61506b8683615024565b95508019841693508086168417925050509392505050565b600061509e61509961509484613fce565b614537565b613fce565b9050919050565b6000819050919050565b6150b883615083565b6150cc6150c4826150a5565b848454615031565b825550505050565b600090565b6150e16150d4565b6150ec8184846150af565b505050565b5b81811015615110576151056000826150d9565b6001810190506150f2565b5050565b601f8211156151555761512681614fff565b61512f84615014565b8101602085101561513e578190505b61515261514a85615014565b8301826150f1565b50505b505050565b600082821c905092915050565b60006151786000198460080261515a565b1980831691505092915050565b60006151918383615167565b9150826002028217905092915050565b6151aa82614ff4565b67ffffffffffffffff8111156151c3576151c26145bb565b5b6151cd82546149bf565b6151d8828285615114565b600060209050601f83116001811461520b57600084156151f9578287015190505b6152038582615185565b86555061526b565b601f19841661521986614fff565b60005b828110156152415784890151825560018201915060208501945060208101905061521c565b8683101561525e578489015161525a601f891682615167565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600081905092915050565b6000819050602082019050919050565b600081905092915050565b60006152af8261408d565b6152b98185615299565b93506152c98185602086016140a9565b6152d2816140d3565b840191505092915050565b60006152e983836152a4565b905092915050565b6000602082019050919050565b600061530982615273565b615313818561527e565b935061531e83615289565b8060005b8381101561534f57815161533688826152dd565b9750615341836152f1565b925050600181019050615322565b5085935050505092915050565b600061536882846152fe565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006153ad82614563565b9050919050565b6153bd816153a2565b82525050565b60006040820190506153d860008301856153b4565b6153e5602083018461411d565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006154486026836149f0565b9150615453826153ec565b604082019050919050565b600060208201905081810360008301526154778161543b565b9050919050565b600081905092915050565b600061549482614ff4565b61549e818561547e565b93506154ae8185602086016140a9565b80840191505092915050565b7f2c7465616d410000000000000000000000000000000000000000000000000000600082015250565b60006154f060068361547e565b91506154fb826154ba565b600682019050919050565b60006155128284615489565b915061551d826154e3565b915081905092915050565b7f2c7465616d420000000000000000000000000000000000000000000000000000600082015250565b600061555e60068361547e565b915061556982615528565b600682019050919050565b60006155808284615489565b915061558b82615551565b915081905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006155cc6020836149f0565b91506155d782615596565b602082019050919050565b600060208201905081810360008301526155fb816155bf565b9050919050565b7f5468652067616d65206973206e6f7420636f6d706c6574656400000000000000600082015250565b60006156386019836149f0565b915061564382615602565b602082019050919050565b600060208201905081810360008301526156678161562b565b9050919050565b600061567982613fce565b915061568483613fce565b925082820261569281613fce565b915082820484148315176156a9576156a8614c55565b5b5092915050565b60008190508160005260206000209050919050565b601f821115615706576156d7816156b0565b6156e084615014565b810160208510156156ef578190505b6157036156fb85615014565b8301826150f1565b50505b505050565b6157148261408d565b67ffffffffffffffff81111561572d5761572c6145bb565b5b61573782546149bf565b6157428282856156c5565b600060209050601f8311600181146157755760008415615763578287015190505b61576d8582615185565b8655506157d5565b601f198416615783866156b0565b60005b828110156157ab57848901518255600182019150602085019450602081019050615786565b868310156157c857848901516157c4601f891682615167565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b60006157f38261408d565b6157fd81856157dd565b935061580d8185602086016140a9565b80840191505092915050565b600061582582846157e8565b915081905092915050565b6000602082019050818103600083015261584a81846140e4565b905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600061588860178361547e565b915061589382615852565b601782019050919050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006158d460118361547e565b91506158df8261589e565b601182019050919050565b60006158f58261587b565b91506159018285615489565b915061590c826158c7565b91506159188284615489565b91508190509392505050565b600061592f82614ff4565b61593981856149f0565b93506159498185602086016140a9565b615952816140d3565b840191505092915050565b600060208201905081810360008301526159778184615924565b905092915050565b61598881613f13565b82525050565b600060e0820190506159a3600083018a614063565b6159b0602083018961411d565b6159bd604083018861425d565b6159ca606083018761597f565b6159d7608083018661411d565b6159e460a083018561411d565b81810360c08301526159f681846140e4565b905098975050505050505050565b60008154615a11816149bf565b615a1b818661547e565b94506001821660008114615a365760018114615a4b57615a7e565b60ff1983168652811515820286019350615a7e565b615a5485614fff565b60005b83811015615a7657815481890152600182019150602081019050615a57565b838801955050505b50505092915050565b6000615a938285615a04565b9150615a9f8284615489565b91508190509392505050565b6000819050919050565b6000615ac082615aab565b9150615acb83615aab565b9250828203905081811260008412168282136000851215161715615af257615af1614c55565b5b92915050565b6000615b0382613fce565b915060008203615b1657615b15614c55565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000615b576020836149f0565b9150615b6282615b21565b602082019050919050565b60006020820190508181036000830152615b8681615b4a565b9050919050565b6000615b9882613fce565b9150615ba383613fce565b925082615bb357615bb2614c26565b5b828206905092915050565b6000615bc982614563565b9050919050565b60008160601b9050919050565b6000615be882615bd0565b9050919050565b6000615bfa82615bdd565b9050919050565b615c12615c0d82615bbe565b615bef565b82525050565b6000819050919050565b615c33615c2e82613fce565b615c18565b82525050565b6000615c458285615c01565b601482019150615c558284615c22565b6020820191508190509392505050565b6000606082019050615c7a6000830186614063565b615c87602083018561411d565b8181036040830152615c9981846140e4565b9050949350505050565b7f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160008201527f636c650000000000000000000000000000000000000000000000000000000000602082015250565b6000615cff6023836149f0565b9150615d0a82615ca3565b604082019050919050565b60006020820190508181036000830152615d2e81615cf2565b9050919050565b600061010082019050615d4b600083018b614063565b615d58602083018a61411d565b615d65604083018961425d565b615d726060830188614063565b615d7f608083018761597f565b615d8c60a083018661411d565b615d9960c083018561411d565b81810360e0830152615dab81846140e4565b90509998505050505050505050565b60008160011c9050919050565b6000808291508390505b6001851115615e1157808604811115615ded57615dec614c55565b5b6001851615615dfc5780820291505b8081029050615e0a85615dba565b9450615dd1565b94509492505050565b600082615e2a5760019050615ee6565b81615e385760009050615ee6565b8160018114615e4e5760028114615e5857615e87565b6001915050615ee6565b60ff841115615e6a57615e69614c55565b5b8360020a915084821115615e8157615e80614c55565b5b50615ee6565b5060208310610133831016604e8410600b8410161715615ebc5782820a905083811115615eb757615eb6614c55565b5b615ee6565b615ec98484846001615dc7565b92509050818404811115615ee057615edf614c55565b5b81810290505b9392505050565b6000615ef882613fce565b9150615f0383613fce565b9250615f307fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484615e1a565b90509291505056fea264697066735822122022b074f5a2a10a33f193a86d51f8f05575a1353e177ae8e58af9b06012faaa6b64736f6c63430008110033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106101a95760003560e01c8063955406d1116100f9578063cea24e7411610097578063ee0f45ff11610071578063ee0f45ff1461049e578063f08e362f146104d4578063f2fde38b146104f0578063f9ace24e1461050c576101a9565b8063cea24e741461044a578063d547741f14610466578063e5a2a1f814610482576101a9565b8063a217fddf116100d3578063a217fddf146103d6578063ade3778a146103f4578063afcc4ad514610410578063bfd5c6df1461042e576101a9565b8063955406d11461039457806399befd53146103b0578063a063e9fb146103ba576101a9565b80633b6e6f1b11610166578063715018a611610140578063715018a6146103205780638da5cb5b1461032a57806391d14854146103485780639552513e14610378576101a9565b80633b6e6f1b146102b05780634d1975b4146102e6578063708d90d614610304576101a9565b806301ffc9a7146101ae57806303fd88d5146101de578063117a5b901461020e578063248a9ca3146102485780632f2ff15d1461027857806336568abe14610294575b600080fd5b6101c860048036038101906101c39190613f6b565b610528565b6040516101d59190613fb3565b60405180910390f35b6101f860048036038101906101f39190614004565b6105a2565b6040516102059190614072565b60405180910390f35b61022860048036038101906102239190614004565b6105d5565b60405161023f9b9a9998979695949392919061412c565b60405180910390f35b610262600480360381019061025d9190614230565b6108e4565b60405161026f919061426c565b60405180910390f35b610292600480360381019061028d91906142b3565b610904565b005b6102ae60048036038101906102a991906142b3565b610925565b005b6102ca60048036038101906102c591906142f3565b6109a8565b6040516102dd9796959493929190614333565b60405180910390f35b6102ee610a31565b6040516102fb91906143a2565b60405180910390f35b61031e600480360381019061031991906143bd565b610a37565b005b610328610be7565b005b610332610bfb565b60405161033f9190614072565b60405180910390f35b610362600480360381019061035d91906142b3565b610c25565b60405161036f9190613fb3565b60405180910390f35b610392600480360381019061038d9190614410565b610c90565b005b6103ae60048036038101906103a99190614463565b610d71565b005b6103b8610e5b565b005b6103d460048036038101906103cf9190614490565b61108e565b005b6103de6114b1565b6040516103eb919061426c565b60405180910390f35b61040e600480360381019061040991906144f7565b6114b8565b005b6104186117c1565b6040516104259190614596565b60405180910390f35b610448600480360381019061044391906146e6565b6117e7565b005b610464600480360381019061045f9190614004565b6118a0565b005b610480600480360381019061047b91906142b3565b611952565b005b61049c600480360381019061049791906148b6565b611973565b005b6104b860048036038101906104b391906142f3565b611b54565b6040516104cb9796959493929190614333565b60405180910390f35b6104ee60048036038101906104e99190614950565b611bdd565b005b61050a60048036038101906105059190614463565b611c8a565b005b61052660048036038101906105219190614004565b611d0d565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061059b575061059a82612021565b5b9050919050565b600a6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b6020528060005260406000206000915090508060000180546105f8906149bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610624906149bf565b80156106715780601f1061064657610100808354040283529160200191610671565b820191906000526020600020905b81548152906001019060200180831161065457829003601f168201915b505050505090806001018054610686906149bf565b80601f01602080910402602001604051908101604052809291908181526020018280546106b2906149bf565b80156106ff5780601f106106d4576101008083540402835291602001916106ff565b820191906000526020600020905b8154815290600101906020018083116106e257829003601f168201915b505050505090806002018054610714906149bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610740906149bf565b801561078d5780601f106107625761010080835404028352916020019161078d565b820191906000526020600020905b81548152906001019060200180831161077057829003601f168201915b5050505050908060030180546107a2906149bf565b80601f01602080910402602001604051908101604052809291908181526020018280546107ce906149bf565b801561081b5780601f106107f05761010080835404028352916020019161081b565b820191906000526020600020905b8154815290600101906020018083116107fe57829003601f168201915b505050505090806004018054610830906149bf565b80601f016020809104026020016040519081016040528092919081815260200182805461085c906149bf565b80156108a95780601f1061087e576101008083540402835291602001916108a9565b820191906000526020600020905b81548152906001019060200180831161088c57829003601f168201915b5050505050908060050154908060060154908060070160009054906101000a900460ff169080600801549080600901549080600a015490508b565b600060076000838152602001908152602001600020600101549050919050565b61090d826108e4565b6109168161208b565b610920838361209f565b505050565b61092d612180565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461099a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099190614a73565b60405180910390fd5b6109a48282612188565b5050565b6008602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040154908060050160009054906101000a900460ff16908060050160019054906101000a900460ff16905087565b600c5481565b826005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ad9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad090614b05565b60405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a2837f278d18a75e865cf3e726d05a02b077061926492380d35c05f56555a5e7b3e7df8484604051610b6e929190614b25565b60405180910390a282600b600060175481526020019081526020016000206005018190555081600b60006017548152602001908152602001600020600601819055506001600b6000601754815260200190815260200160002060070160006101000a81548160ff02191690831515021790555050505050565b610bef61226a565b610bf960006122e8565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006007600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610cba7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177533610c25565b80610cf75750610cc8610bfb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610d36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2d90614b9a565b60405180910390fd5b6000801b8314610d4857826011819055505b6000801b8214610d5a57816013819055505b6000801b8114610d6c57806012819055505b505050565b610d9b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177533610c25565b80610dd85750610da9610bfb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610e17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0e90614b9a565b60405180910390fd5b80601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610e857fab4f864e5201b0fde9b5ee3e4cf96384802b0ffdfcf7f9de4699ce21a30afc4f33610c25565b80610ec25750610e93610bfb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610f01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef890614c06565b60405180910390fd5b6000610f176012543063e5a2a1f860e01b6123ae565b9050610fed6040518060400160405280600381526020017f6765740000000000000000000000000000000000000000000000000000000000815250600e8054610f5f906149bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610f8b906149bf565b8015610fd85780601f10610fad57610100808354040283529160200191610fd8565b820191906000526020600020905b815481529060010190602001808311610fbb57829003601f168201915b5050505050836123df9092919063ffffffff16565b6110416040518060400160405280600481526020017f7061746800000000000000000000000000000000000000000000000000000000815250611031600c54612412565b836123df9092919063ffffffff16565b600061105b8260026014546110569190614c84565b6124e0565b9050807fd7b8242f7efe54cbffbcb9ab3cab3bd45981f49ab301d6b839ed011d0b31667360405160405180910390a25050565b600c5484106110d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c990614d01565b60405180910390fd5b60008111611115576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110c90614d93565b60405180910390fd5b6000601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161117693929190614db3565b6020604051808303816000875af1158015611195573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b99190614e16565b9050806111fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f290614e8f565b60405180910390fd5b600b600086815260200190815260200160002060070160009054906101000a900460ff161561125f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125690614efb565b60405180910390fd5b600060148361126e9190614c84565b9050600060058461127f9190614c84565b905080600b600089815260200190815260200160002060080160008282546112a79190614f1b565b925050819055508082856112bb9190614f4f565b6112c59190614f4f565b600b6000898152602001908152602001600020600a0160008282546112ea9190614f1b565b925050819055506040518060e001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200188815260200182848761132b9190614f4f565b6113359190614f4f565b815260200187815260200186815260200160001515815260200160001515815250600860008981526020019081526020016000206000600b60008b815260200190815260200160002060090154815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff02191690831515021790555060c08201518160050160016101000a81548160ff021916908315150217905550905050600b6000888152602001908152602001600020600901600081548092919061146990614f83565b9190505550867fbb79d51f1411ca03952954c866d22ae3532b227b2cf62e257cf182397a64717387876040516114a0929190614b25565b60405180910390a250505050505050565b6000801b81565b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461155a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155190614b05565b60405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a2827f56674309f088f07dcc038cf9f886d47b6d58c2aee17422468a7c223cc0839a02836040516115ed91906143a2565b60405180910390a281601681905550600182146117bc5760096000601754815260200190815260200160002060006001846116289190614f4f565b815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600a6000601754815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600960006017548152602001908152602001600020600060018661170f9190614f4f565b815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600b60006017548152602001908152602001600020600801546040518363ffffffff1660e01b8152600401611777929190614fcb565b6020604051808303816000875af1158015611796573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ba9190614e16565b505b505050565b601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6118117fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177533610c25565b8061184e575061181f610bfb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61188d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188490614b9a565b60405180910390fd5b80600d908161189c91906151a1565b5050565b6118ca7fab4f864e5201b0fde9b5ee3e4cf96384802b0ffdfcf7f9de4699ce21a30afc4f33610c25565b8061190757506118d8610bfb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b611946576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161193d90614c06565b60405180910390fd5b61194f81612517565b50565b61195b826108e4565b6119648161208b565b61196e8383612188565b505050565b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611a15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a0c90614b05565b60405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a281604051611a86919061535c565b6040518091039020837f5a57b85ff6e2f515bf4fbf834a27cec6083d7baf9eff5bbcce49d75d4c44ce3e60405160405180910390a3611b4f82600081518110611ad257611ad1615373565b5b602002602001015183600181518110611aee57611aed615373565b5b602002602001015184600281518110611b0a57611b09615373565b5b602002602001015185600381518110611b2657611b25615373565b5b602002602001015186600481518110611b4257611b41615373565b5b6020026020010151612c66565b505050565b6009602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040154908060050160009054906101000a900460ff16908060050160019054906101000a900460ff16905087565b611be561226a565b601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82846040518363ffffffff1660e01b8152600401611c429291906153c3565b6020604051808303816000875af1158015611c61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c859190614e16565b505050565b611c9261226a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611d01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cf89061545e565b60405180910390fd5b611d0a816122e8565b50565b611d377fab4f864e5201b0fde9b5ee3e4cf96384802b0ffdfcf7f9de4699ce21a30afc4f33610c25565b80611d745750611d45610bfb565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b611db3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611daa90614c06565b60405180910390fd5b6000611dc96013543063708d90d660e01b6123ae565b90506000611dd683612412565b604051602001611de69190615506565b60405160208183030381529060405290506000611e0284612412565b604051602001611e129190615574565b6040516020818303038152906040529050611ef76040518060400160405280600381526020017f6765740000000000000000000000000000000000000000000000000000000000815250600f8054611e69906149bf565b80601f0160208091040260200160405190810160405280929190818152602001828054611e95906149bf565b8015611ee25780601f10611eb757610100808354040283529160200191611ee2565b820191906000526020600020905b815481529060010190602001808311611ec557829003601f168201915b5050505050856123df9092919063ffffffff16565b611f416040518060400160405280600581526020017f706174683100000000000000000000000000000000000000000000000000000081525083856123df9092919063ffffffff16565b611f8b6040518060400160405280600581526020017f706174683200000000000000000000000000000000000000000000000000000081525082856123df9092919063ffffffff16565b611fd66040518060400160405280600881526020017f6d756c7469706c79000000000000000000000000000000000000000000000000815250600185612e179092919063ffffffff16565b836017819055506000611feb846015546124e0565b9050807fe7a32afcf2413a36519016aab1d0c301eb77ab022284beed2a278aad61d1a09260405160405180910390a25050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61209c81612097612180565b612e4a565b50565b6120a98282610c25565b61217c5760016007600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550612121612180565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b6121928282610c25565b156122665760006007600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061220b612180565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b612272612180565b73ffffffffffffffffffffffffffffffffffffffff16612290610bfb565b73ffffffffffffffffffffffffffffffffffffffff16146122e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122dd906155e2565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6123b6613e21565b6123be613e21565b6123d585858584612ecf909392919063ffffffff16565b9150509392505050565b6123f6828460800151612f7f90919063ffffffff16565b61240d818460800151612f7f90919063ffffffff16565b505050565b60606000600161242184612fa4565b01905060008167ffffffffffffffff8111156124405761243f6145bb565b5b6040519080825280601f01601f1916602001820160405280156124725781602001600182028036833780820191505090505b509050600082602001820190505b6001156124d5578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816124c9576124c8614c26565b5b04945060008503612480575b819350505050919050565b600061250f600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684846130f7565b905092915050565b600c54811061255b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161255290614d01565b60405180910390fd5b600b600082815260200190815260200160002060070160009054906101000a900460ff166125be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125b59061564e565b60405180910390fd5b6000600b6000838152602001908152602001600020600901540315612c63576000805b600b6000848152602001908152602001600020600901548110156126ae57600b600084815260200190815260200160002060050154600860008581526020019081526020016000206000838152602001908152602001600020600301541480156126875750600b60008481526020019081526020016000206006015460086000858152602001908152602001600020600083815260200190815260200160002060040154145b1561269b57818061269790614f83565b9250505b80806126a690614f83565b9150506125e1565b5060008167ffffffffffffffff8111156126cb576126ca6145bb565b5b60405190808252806020026020018201604052801561270457816020015b6126f1613e8e565b8152602001906001900390816126e95790505b5090506000806000805b600b600088815260200190815260200160002060090154811015612ad857600b600088815260200190815260200160002060050154600860008981526020019081526020016000206000838152602001908152602001600020600301541480156127b45750600b60008881526020019081526020016000206006015460086000898152602001908152602001600020600083815260200190815260200160002060040154145b1561294257600160086000898152602001908152602001600020600083815260200190815260200160002060050160006101000a81548160ff0219169083151502179055506008600088815260200190815260200160002060008281526020019081526020016000206040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff161515151581526020016005820160019054906101000a900460ff1615151515815250508585815181106128ef576128ee615373565b5b6020026020010181905250600860008881526020019081526020016000206000828152602001908152602001600020600201548261292d9190614f1b565b9150838061293a90614f83565b945050612a85565b6008600088815260200190815260200160002060008281526020019081526020016000206009600089815260200190815260200160002060008581526020019081526020016000206000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182015481600101556002820154816002015560038201548160030155600482015481600401556005820160009054906101000a900460ff168160050160006101000a81548160ff0219169083151502179055506005820160019054906101000a900460ff168160050160016101000a81548160ff0219169083151502179055509050508280612a8190614f83565b9350505b600160086000898152602001908152602001600020600083815260200190815260200160002060050160016101000a81548160ff0219169083151502179055508080612ad090614f83565b91505061270e565b5060008303612b2557600b6000878152602001908152602001600020600a0154600b60008881526020019081526020016000206008016000828254612b1d9190614f1b565b925050819055505b60005b83811015612c4c57601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb868381518110612b8157612b80615373565b5b60200260200101516000015184888581518110612ba157612ba0615373565b5b602002602001015160400151600b60008d8152602001908152602001600020600a0154612bce919061566e565b612bd89190614c84565b6040518363ffffffff1660e01b8152600401612bf5929190614fcb565b6020604051808303816000875af1158015612c14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c389190614e16565b508080612c4490614f83565b915050612b28565b5085601781905550612c5d826131c1565b50505050505b50565b604051806101600160405280868152602001858152602001848152602001838152602001828152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815250600b6000600c5481526020019081526020016000206000820151816000019081612ce4919061570b565b506020820151816001019081612cfa919061570b565b506040820151816002019081612d10919061570b565b506060820151816003019081612d26919061570b565b506080820151816004019081612d3c919061570b565b5060a0820151816005015560c0820151816006015560e08201518160070160006101000a81548160ff0219169083151502179055506101008201518160080155610120820151816009015561014082015181600a0155905050600c6000815480929190612da890614f83565b919050555082604051612dbb9190615819565b604051809103902085604051612dd19190615819565b60405180910390207f77191e0d0f58febc4c0d721e40183a0a4742b9b53af57cd3bde8468cd27118c183604051612e089190615830565b60405180910390a35050505050565b612e2e828460800151612f7f90919063ffffffff16565b612e4581846080015161335c90919063ffffffff16565b505050565b612e548282610c25565b612ecb57612e6181613409565b612e6f8360001c6020613436565b604051602001612e809291906158ea565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612ec2919061595d565b60405180910390fd5b5050565b612ed7613e21565b612ee78560800151610100613672565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b612f8c82600383516136dc565b612f9f818361386190919063ffffffff16565b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613002577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612ff857612ff7614c26565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061303f576d04ee2d6d415b85acef8100000000838161303557613034614c26565b5b0492506020810190505b662386f26fc10000831061306e57662386f26fc10000838161306457613063614c26565b5b0492506010810190505b6305f5e1008310613097576305f5e100838161308d5761308c614c26565b5b0492506008810190505b61271083106130bc5761271083816130b2576130b1614c26565b5b0492506004810190505b606483106130df57606483816130d5576130d4614c26565b5b0492506002810190505b600a83106130ee576001810190505b80915050919050565b600080600454905060018161310c9190614f1b565b6004819055506000633c6d41b960e01b600080876000015188604001518660028b608001516000015160405160240161314b979695949392919061598e565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506131b686838684613883565b925050509392505050565b60006131d76011543063ade3778a60e01b6123ae565b90506000600d6131e684612412565b6040516020016131f7929190615a87565b60405160208183030381529060405290506132526040518060400160405280600381526020017f676574000000000000000000000000000000000000000000000000000000000081525082846123df9092919063ffffffff16565b6132ab6040518060400160405280600481526020017f706174680000000000000000000000000000000000000000000000000000000081525060405180602001604052806000815250846123df9092919063ffffffff16565b6132f66040518060400160405280600581526020017f74696d6573000000000000000000000000000000000000000000000000000000815250600184612e179092919063ffffffff16565b6000613327601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684601454613a18565b9050807f1bbf3b6e20d98e7a10bd8311f993bf505fa12c23c2106847f80ded6578bbd95060405160405180910390a250505050565b7fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000008112156133935761338e8282613ae4565b613405565b67ffffffffffffffff8113156133b2576133ad8282613b5b565b613404565b600081126133cb576133c6826000836136dc565b613403565b613402826001837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6133fd9190615ab5565b6136dc565b5b5b5b5050565b606061342f8273ffffffffffffffffffffffffffffffffffffffff16601460ff16613436565b9050919050565b606060006002836002613449919061566e565b6134539190614f1b565b67ffffffffffffffff81111561346c5761346b6145bb565b5b6040519080825280601f01601f19166020018201604052801561349e5781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106134d6576134d5615373565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061353a57613539615373565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000600184600261357a919061566e565b6135849190614f1b565b90505b6001811115613624577f3031323334353637383961626364656600000000000000000000000000000000600f8616601081106135c6576135c5615373565b5b1a60f81b8282815181106135dd576135dc615373565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c94508061361d90615af8565b9050613587565b5060008414613668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161365f90615b6d565b60405180910390fd5b8091505092915050565b61367a613ee5565b60006020836136899190615b8d565b146136b55760208261369b9190615b8d565b60206136a79190614f4f565b826136b29190614f1b565b91505b81836020018181525050604051808452600081528281016020016040525082905092915050565b60178167ffffffffffffffff16116137135761370d8160058460ff16901b60ff161784613ba790919063ffffffff16565b5061385c565b60ff8167ffffffffffffffff161161376957613742601860058460ff16901b1784613ba790919063ffffffff16565b506137638167ffffffffffffffff16600185613bc79092919063ffffffff16565b5061385b565b61ffff8167ffffffffffffffff16116137c057613799601960058460ff16901b1784613ba790919063ffffffff16565b506137ba8167ffffffffffffffff16600285613bc79092919063ffffffff16565b5061385a565b63ffffffff8167ffffffffffffffff1611613819576137f2601a60058460ff16901b1784613ba790919063ffffffff16565b506138138167ffffffffffffffff16600485613bc79092919063ffffffff16565b50613859565b613836601b60058460ff16901b1784613ba790919063ffffffff16565b506138578167ffffffffffffffff16600885613bc79092919063ffffffff16565b505b5b5b5b505050565b613869613ee5565b61387b83846000015151848551613be9565b905092915050565b60003084604051602001613898929190615c39565b604051602081830303815290604052805190602001209050846005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea08685856040518463ffffffff1660e01b815260040161398e93929190615c65565b6020604051808303816000875af11580156139ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906139d19190614e16565b613a10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613a0790615d15565b60405180910390fd5b949350505050565b6000806004549050600181613a2d9190614f1b565b6004819055506000634042994660e01b60008087600001513089604001518760018c6080015160000151604051602401613a6e989796959493929190615d35565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050613ad986838684613883565b925050509392505050565b613b0260036005600660ff16901b1783613ba790919063ffffffff16565b50613b5782827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff613b339190615ab5565b604051602001613b4391906143a2565b604051602081830303815290604052613cd8565b5050565b613b7960026005600660ff16901b1783613ba790919063ffffffff16565b50613ba38282604051602001613b8f91906143a2565b604051602081830303815290604052613cd8565b5050565b613baf613ee5565b613bbf8384600001515184613cfd565b905092915050565b613bcf613ee5565b613be0848560000151518585613d53565b90509392505050565b613bf1613ee5565b8251821115613bff57600080fd5b84602001518285613c109190614f1b565b1115613c4557613c44856002613c3588602001518887613c309190614f1b565b613de1565b613c3f919061566e565b613dfd565b5b600080865180518760208301019350808887011115613c645787860182525b60208701925050505b60208410613cab5780518252602082613c869190614f1b565b9150602081613c959190614f1b565b9050602084613ca49190614f4f565b9350613c6d565b60006001856020036101000a03905080198251168184511681811785525050508692505050949350505050565b613ce582600283516136dc565b613cf8818361386190919063ffffffff16565b505050565b613d05613ee5565b83602001518310613d2b57613d2a8460028660200151613d25919061566e565b613dfd565b5b83518051602085830101848153818603613d46576001820183525b5050508390509392505050565b613d5b613ee5565b84602001518483613d6c9190614f1b565b1115613d9457613d938560028685613d849190614f1b565b613d8e919061566e565b613dfd565b5b6000600183610100613da69190615eed565b613db09190614f4f565b90508551838682010185831982511617815281518588011115613dd35784870182525b505085915050949350505050565b600081831115613df357829050613df7565b8190505b92915050565b600082600001519050613e108383613672565b50613e1b8382613861565b50505050565b6040518060a0016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200160008152602001613e88613ee5565b81525090565b6040518060e00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581525090565b604051806040016040528060608152602001600081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613f4881613f13565b8114613f5357600080fd5b50565b600081359050613f6581613f3f565b92915050565b600060208284031215613f8157613f80613f09565b5b6000613f8f84828501613f56565b91505092915050565b60008115159050919050565b613fad81613f98565b82525050565b6000602082019050613fc86000830184613fa4565b92915050565b6000819050919050565b613fe181613fce565b8114613fec57600080fd5b50565b600081359050613ffe81613fd8565b92915050565b60006020828403121561401a57614019613f09565b5b600061402884828501613fef565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061405c82614031565b9050919050565b61406c81614051565b82525050565b60006020820190506140876000830184614063565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156140c75780820151818401526020810190506140ac565b60008484015250505050565b6000601f19601f8301169050919050565b60006140ef8261408d565b6140f98185614098565b93506141098185602086016140a9565b614112816140d3565b840191505092915050565b61412681613fce565b82525050565b6000610160820190508181036000830152614147818e6140e4565b9050818103602083015261415b818d6140e4565b9050818103604083015261416f818c6140e4565b90508181036060830152614183818b6140e4565b90508181036080830152614197818a6140e4565b90506141a660a083018961411d565b6141b360c083018861411d565b6141c060e0830187613fa4565b6141ce61010083018661411d565b6141dc61012083018561411d565b6141ea61014083018461411d565b9c9b505050505050505050505050565b6000819050919050565b61420d816141fa565b811461421857600080fd5b50565b60008135905061422a81614204565b92915050565b60006020828403121561424657614245613f09565b5b60006142548482850161421b565b91505092915050565b614266816141fa565b82525050565b6000602082019050614281600083018461425d565b92915050565b61429081614051565b811461429b57600080fd5b50565b6000813590506142ad81614287565b92915050565b600080604083850312156142ca576142c9613f09565b5b60006142d88582860161421b565b92505060206142e98582860161429e565b9150509250929050565b6000806040838503121561430a57614309613f09565b5b600061431885828601613fef565b925050602061432985828601613fef565b9150509250929050565b600060e082019050614348600083018a614063565b614355602083018961411d565b614362604083018861411d565b61436f606083018761411d565b61437c608083018661411d565b61438960a0830185613fa4565b61439660c0830184613fa4565b98975050505050505050565b60006020820190506143b7600083018461411d565b92915050565b6000806000606084860312156143d6576143d5613f09565b5b60006143e48682870161421b565b93505060206143f586828701613fef565b925050604061440686828701613fef565b9150509250925092565b60008060006060848603121561442957614428613f09565b5b60006144378682870161421b565b93505060206144488682870161421b565b92505060406144598682870161421b565b9150509250925092565b60006020828403121561447957614478613f09565b5b60006144878482850161429e565b91505092915050565b600080600080608085870312156144aa576144a9613f09565b5b60006144b887828801613fef565b94505060206144c987828801613fef565b93505060406144da87828801613fef565b92505060606144eb87828801613fef565b91505092959194509250565b6000806040838503121561450e5761450d613f09565b5b600061451c8582860161421b565b925050602061452d85828601613fef565b9150509250929050565b6000819050919050565b600061455c61455761455284614031565b614537565b614031565b9050919050565b600061456e82614541565b9050919050565b600061458082614563565b9050919050565b61459081614575565b82525050565b60006020820190506145ab6000830184614587565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6145f3826140d3565b810181811067ffffffffffffffff82111715614612576146116145bb565b5b80604052505050565b6000614625613eff565b905061463182826145ea565b919050565b600067ffffffffffffffff821115614651576146506145bb565b5b61465a826140d3565b9050602081019050919050565b82818337600083830152505050565b600061468961468484614636565b61461b565b9050828152602081018484840111156146a5576146a46145b6565b5b6146b0848285614667565b509392505050565b600082601f8301126146cd576146cc6145b1565b5b81356146dd848260208601614676565b91505092915050565b6000602082840312156146fc576146fb613f09565b5b600082013567ffffffffffffffff81111561471a57614719613f0e565b5b614726848285016146b8565b91505092915050565b600067ffffffffffffffff82111561474a576147496145bb565b5b602082029050602081019050919050565b600080fd5b600067ffffffffffffffff82111561477b5761477a6145bb565b5b614784826140d3565b9050602081019050919050565b60006147a461479f84614760565b61461b565b9050828152602081018484840111156147c0576147bf6145b6565b5b6147cb848285614667565b509392505050565b600082601f8301126147e8576147e76145b1565b5b81356147f8848260208601614791565b91505092915050565b600061481461480f8461472f565b61461b565b905080838252602082019050602084028301858111156148375761483661475b565b5b835b8181101561487e57803567ffffffffffffffff81111561485c5761485b6145b1565b5b80860161486989826147d3565b85526020850194505050602081019050614839565b5050509392505050565b600082601f83011261489d5761489c6145b1565b5b81356148ad848260208601614801565b91505092915050565b600080604083850312156148cd576148cc613f09565b5b60006148db8582860161421b565b925050602083013567ffffffffffffffff8111156148fc576148fb613f0e565b5b61490885828601614888565b9150509250929050565b600061491d82614031565b9050919050565b61492d81614912565b811461493857600080fd5b50565b60008135905061494a81614924565b92915050565b6000806040838503121561496757614966613f09565b5b600061497585828601613fef565b92505060206149868582860161493b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806149d757607f821691505b6020821081036149ea576149e9614990565b5b50919050565b600082825260208201905092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000614a5d602f836149f0565b9150614a6882614a01565b604082019050919050565b60006020820190508181036000830152614a8c81614a50565b9050919050565b7f536f75726365206d75737420626520746865206f7261636c65206f662074686560008201527f2072657175657374000000000000000000000000000000000000000000000000602082015250565b6000614aef6028836149f0565b9150614afa82614a93565b604082019050919050565b60006020820190508181036000830152614b1e81614ae2565b9050919050565b6000604082019050614b3a600083018561411d565b614b47602083018461411d565b9392505050565b7f49535f4e4f545f41444d494e0000000000000000000000000000000000000000600082015250565b6000614b84600c836149f0565b9150614b8f82614b4e565b602082019050919050565b60006020820190508181036000830152614bb381614b77565b9050919050565b7f49535f4e4f545f52454c41594552000000000000000000000000000000000000600082015250565b6000614bf0600e836149f0565b9150614bfb82614bba565b602082019050919050565b60006020820190508181036000830152614c1f81614be3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614c8f82613fce565b9150614c9a83613fce565b925082614caa57614ca9614c26565b5b828204905092915050565b7f496e76616c69642067616d652049440000000000000000000000000000000000600082015250565b6000614ceb600f836149f0565b9150614cf682614cb5565b602082019050919050565b60006020820190508181036000830152614d1a81614cde565b9050919050565b7f42657420616d6f756e74206d7573742062652067726561746572207468616e2060008201527f7a65726f00000000000000000000000000000000000000000000000000000000602082015250565b6000614d7d6024836149f0565b9150614d8882614d21565b604082019050919050565b60006020820190508181036000830152614dac81614d70565b9050919050565b6000606082019050614dc86000830186614063565b614dd56020830185614063565b614de2604083018461411d565b949350505050565b614df381613f98565b8114614dfe57600080fd5b50565b600081519050614e1081614dea565b92915050565b600060208284031215614e2c57614e2b613f09565b5b6000614e3a84828501614e01565b91505092915050565b7f5472616e73616374696f6e206661696c65640000000000000000000000000000600082015250565b6000614e796012836149f0565b9150614e8482614e43565b602082019050919050565b60006020820190508181036000830152614ea881614e6c565b9050919050565b7f47616d652068617320616c726561647920636f6d706c65746564000000000000600082015250565b6000614ee5601a836149f0565b9150614ef082614eaf565b602082019050919050565b60006020820190508181036000830152614f1481614ed8565b9050919050565b6000614f2682613fce565b9150614f3183613fce565b9250828201905080821115614f4957614f48614c55565b5b92915050565b6000614f5a82613fce565b9150614f6583613fce565b9250828203905081811115614f7d57614f7c614c55565b5b92915050565b6000614f8e82613fce565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614fc057614fbf614c55565b5b600182019050919050565b6000604082019050614fe06000830185614063565b614fed602083018461411d565b9392505050565b600081519050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026150617fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82615024565b61506b8683615024565b95508019841693508086168417925050509392505050565b600061509e61509961509484613fce565b614537565b613fce565b9050919050565b6000819050919050565b6150b883615083565b6150cc6150c4826150a5565b848454615031565b825550505050565b600090565b6150e16150d4565b6150ec8184846150af565b505050565b5b81811015615110576151056000826150d9565b6001810190506150f2565b5050565b601f8211156151555761512681614fff565b61512f84615014565b8101602085101561513e578190505b61515261514a85615014565b8301826150f1565b50505b505050565b600082821c905092915050565b60006151786000198460080261515a565b1980831691505092915050565b60006151918383615167565b9150826002028217905092915050565b6151aa82614ff4565b67ffffffffffffffff8111156151c3576151c26145bb565b5b6151cd82546149bf565b6151d8828285615114565b600060209050601f83116001811461520b57600084156151f9578287015190505b6152038582615185565b86555061526b565b601f19841661521986614fff565b60005b828110156152415784890151825560018201915060208501945060208101905061521c565b8683101561525e578489015161525a601f891682615167565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600081905092915050565b6000819050602082019050919050565b600081905092915050565b60006152af8261408d565b6152b98185615299565b93506152c98185602086016140a9565b6152d2816140d3565b840191505092915050565b60006152e983836152a4565b905092915050565b6000602082019050919050565b600061530982615273565b615313818561527e565b935061531e83615289565b8060005b8381101561534f57815161533688826152dd565b9750615341836152f1565b925050600181019050615322565b5085935050505092915050565b600061536882846152fe565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006153ad82614563565b9050919050565b6153bd816153a2565b82525050565b60006040820190506153d860008301856153b4565b6153e5602083018461411d565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006154486026836149f0565b9150615453826153ec565b604082019050919050565b600060208201905081810360008301526154778161543b565b9050919050565b600081905092915050565b600061549482614ff4565b61549e818561547e565b93506154ae8185602086016140a9565b80840191505092915050565b7f2c7465616d410000000000000000000000000000000000000000000000000000600082015250565b60006154f060068361547e565b91506154fb826154ba565b600682019050919050565b60006155128284615489565b915061551d826154e3565b915081905092915050565b7f2c7465616d420000000000000000000000000000000000000000000000000000600082015250565b600061555e60068361547e565b915061556982615528565b600682019050919050565b60006155808284615489565b915061558b82615551565b915081905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006155cc6020836149f0565b91506155d782615596565b602082019050919050565b600060208201905081810360008301526155fb816155bf565b9050919050565b7f5468652067616d65206973206e6f7420636f6d706c6574656400000000000000600082015250565b60006156386019836149f0565b915061564382615602565b602082019050919050565b600060208201905081810360008301526156678161562b565b9050919050565b600061567982613fce565b915061568483613fce565b925082820261569281613fce565b915082820484148315176156a9576156a8614c55565b5b5092915050565b60008190508160005260206000209050919050565b601f821115615706576156d7816156b0565b6156e084615014565b810160208510156156ef578190505b6157036156fb85615014565b8301826150f1565b50505b505050565b6157148261408d565b67ffffffffffffffff81111561572d5761572c6145bb565b5b61573782546149bf565b6157428282856156c5565b600060209050601f8311600181146157755760008415615763578287015190505b61576d8582615185565b8655506157d5565b601f198416615783866156b0565b60005b828110156157ab57848901518255600182019150602085019450602081019050615786565b868310156157c857848901516157c4601f891682615167565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b60006157f38261408d565b6157fd81856157dd565b935061580d8185602086016140a9565b80840191505092915050565b600061582582846157e8565b915081905092915050565b6000602082019050818103600083015261584a81846140e4565b905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600061588860178361547e565b915061589382615852565b601782019050919050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006158d460118361547e565b91506158df8261589e565b601182019050919050565b60006158f58261587b565b91506159018285615489565b915061590c826158c7565b91506159188284615489565b91508190509392505050565b600061592f82614ff4565b61593981856149f0565b93506159498185602086016140a9565b615952816140d3565b840191505092915050565b600060208201905081810360008301526159778184615924565b905092915050565b61598881613f13565b82525050565b600060e0820190506159a3600083018a614063565b6159b0602083018961411d565b6159bd604083018861425d565b6159ca606083018761597f565b6159d7608083018661411d565b6159e460a083018561411d565b81810360c08301526159f681846140e4565b905098975050505050505050565b60008154615a11816149bf565b615a1b818661547e565b94506001821660008114615a365760018114615a4b57615a7e565b60ff1983168652811515820286019350615a7e565b615a5485614fff565b60005b83811015615a7657815481890152600182019150602081019050615a57565b838801955050505b50505092915050565b6000615a938285615a04565b9150615a9f8284615489565b91508190509392505050565b6000819050919050565b6000615ac082615aab565b9150615acb83615aab565b9250828203905081811260008412168282136000851215161715615af257615af1614c55565b5b92915050565b6000615b0382613fce565b915060008203615b1657615b15614c55565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000615b576020836149f0565b9150615b6282615b21565b602082019050919050565b60006020820190508181036000830152615b8681615b4a565b9050919050565b6000615b9882613fce565b9150615ba383613fce565b925082615bb357615bb2614c26565b5b828206905092915050565b6000615bc982614563565b9050919050565b60008160601b9050919050565b6000615be882615bd0565b9050919050565b6000615bfa82615bdd565b9050919050565b615c12615c0d82615bbe565b615bef565b82525050565b6000819050919050565b615c33615c2e82613fce565b615c18565b82525050565b6000615c458285615c01565b601482019150615c558284615c22565b6020820191508190509392505050565b6000606082019050615c7a6000830186614063565b615c87602083018561411d565b8181036040830152615c9981846140e4565b9050949350505050565b7f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160008201527f636c650000000000000000000000000000000000000000000000000000000000602082015250565b6000615cff6023836149f0565b9150615d0a82615ca3565b604082019050919050565b60006020820190508181036000830152615d2e81615cf2565b9050919050565b600061010082019050615d4b600083018b614063565b615d58602083018a61411d565b615d65604083018961425d565b615d726060830188614063565b615d7f608083018761597f565b615d8c60a083018661411d565b615d9960c083018561411d565b81810360e0830152615dab81846140e4565b90509998505050505050505050565b60008160011c9050919050565b6000808291508390505b6001851115615e1157808604811115615ded57615dec614c55565b5b6001851615615dfc5780820291505b8081029050615e0a85615dba565b9450615dd1565b94509492505050565b600082615e2a5760019050615ee6565b81615e385760009050615ee6565b8160018114615e4e5760028114615e5857615e87565b6001915050615ee6565b60ff841115615e6a57615e69614c55565b5b8360020a915084821115615e8157615e80614c55565b5b50615ee6565b5060208310610133831016604e8410600b8410161715615ebc5782820a905083811115615eb757615eb6614c55565b5b615ee6565b615ec98484846001615dc7565b92509050818404811115615ee057615edf614c55565b5b81810290505b9392505050565b6000615ef882613fce565b9150615f0383613fce565b9250615f307fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484615e1a565b90509291505056fea264697066735822122022b074f5a2a10a33f193a86d51f8f05575a1353e177ae8e58af9b06012faaa6b64736f6c63430008110033",
  linkReferences: {},
  deployedLinkReferences: {},
};

// Define a route that returns the list of upcoming games
app.get("/upcoming-games", (req, res) => {
  res.json(upcomingGames);
});

app.get("/resulting-games", (req, res) => {
  res.json(resultingGames);
});

app.get("/sportsABI", (req, res) => {
  res.json(sportsABI);
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
