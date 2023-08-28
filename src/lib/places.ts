import { place } from "./types/types";

export const northIsland: place[] = [
  { name: "Auckland", x: 680, y: 380, train: ["Northern Explorer"] },
  { name: "Hamilton", x: 750, y: 500, train: ["Northern Explorer"] },
  { name: "Palmerston North", x: 760, y: 750, train: ["Northern Explorer"] },
  {
    name: "Tongariro National Park",
    x: 760,
    y: 620,
    train: ["Northern Explorer"],
  },
  { name: "Wellington", x: 700, y: 870, train: ["Northern Explorer"] },
];

export const southIsland: place[] = [
  { name: "Blenheim", x: 600, y: 890, train: ["Coastal Pacific"] },
  {
    name: "Christchurch",
    x: 490,
    y: 1100,
    train: ["Coastal Pacific", "TranzAlpine"],
    adjacents: ["Greymouth"],
  },
  {
    name: "Greymouth",
    x: 390,
    y: 1000,
    train: ["TranzAlpine", "Scenic Coach"],
    adjacents: ["Christchurch"],
  },
  {
    name: "Kaikoura",
    x: 580,
    y: 1000,
    train: ["Coastal Pacific"],
  },
  { name: "Queenstown", x: 220, y: 1280, train: ["Scenic Coach"] },
];

export const places = northIsland.concat(southIsland);

export const northernExplorer = [
  {
    x1: 750,
    x2: 690,
    y1: 500,
    y2: 400,
    fill: "#4eab68",
    name: "Northern Explorer",
  },
  {
    x1: 760,
    x2: 750,
    y1: 600,
    y2: 500,
    fill: "#4eab68",
    name: "Northern Explorer",
  },
  {
    x1: 760,
    x2: 760,
    y1: 750,
    y2: 620,
    fill: "#4eab68",
    name: "Northern Explorer",
  },
  {
    x1: 700,
    x2: 760,
    y1: 880,
    y2: 750,
    fill: "#4eab68",
    name: "Northern Explorer",
  },
];

export const coastalPacific = [
  {
    x1: 600,
    x2: 580,
    y1: 900,
    y2: 1000,
    fill: "#00a4b6",
    name: "Coastal Pacific",
  },
  {
    x1: 590,
    x2: 490,
    y1: 1000,
    y2: 1100,
    fill: "#00a4b6",
    name: "Coastal Pacific",
  },
];

export const tranzAlpine = [
  {
    x1: 390,
    x2: 490,
    y1: 1000,
    y2: 1100,
    fill: "#4b7471",
    name: "TranzAlpine",
  },
];

export const scenicCoach = [
  {
    x1: 390,
    x2: 210,
    y1: 1000,
    y2: 1290,
    fill: "#94b2b5",
    name: "Scenic Coach",
  },
];
