export interface ThingKnownStructure {
  id: number;
  name: string;
  category: string;
  isFun: boolean;
  makesMoney: boolean;
}
export type ThingsKnown = ThingKnownStructure[];

export const knownThings: ThingsKnown = [
  { id: 1, name: "Tenis", category: "Sports", isFun: true, makesMoney: false },
  {
    id: 2,
    name: "VolleyBall",
    category: "Sports",
    isFun: true,
    makesMoney: false,
  },
  {
    id: 3,
    name: "Cooking",
    category: "Skills",
    isFun: true,
    makesMoney: true,
  },
  {
    id: 4,
    name: "3D Design",
    category: "Skills",
    isFun: true,
    makesMoney: true,
  },
  {
    id: 5,
    name: "FrontEnd",
    category: "Programming",
    isFun: true,
    makesMoney: true,
  },
  {
    id: 6,
    name: "PaintBall",
    category: "Sports",
    isFun: true,
    makesMoney: false,
  },
];
