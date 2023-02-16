export interface ThingKnownStructure {
  id: number;
  thing: string;
  category: string;
  isFun: boolean;
  makesMoney: boolean;
}
type ThingsKnown = ThingKnownStructure[];

export const knownThings: ThingsKnown = [
  { id: 1, thing: "Tenis", category: "Sports", isFun: true, makesMoney: false },
  {
    id: 2,
    thing: "VolleyBall",
    category: "Sports",
    isFun: true,
    makesMoney: false,
  },
  {
    id: 3,
    thing: "Cooking",
    category: "Skills",
    isFun: true,
    makesMoney: true,
  },
  {
    id: 4,
    thing: "3D Design",
    category: "Skills",
    isFun: true,
    makesMoney: true,
  },
  {
    id: 5,
    thing: "FrontEnd",
    category: "Programming",
    isFun: true,
    makesMoney: true,
  },
  {
    id: 6,
    thing: "PaintBall",
    category: "Sports",
    isFun: true,
    makesMoney: false,
  },
];
