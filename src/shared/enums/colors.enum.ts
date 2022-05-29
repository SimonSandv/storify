type ColorPaletteAsArray = {
  label: string;
  values: {
    label: string;
    value: string;
  }[];
};

/* enum Colors {
  HeroBlue = "#280071",
  DarkBlue = "#071D49",
  CTAGreen = "#26D07C",
  HeroRed = "#F9423A",
  White = "#FFFFFF",
  Maroon = "#633231",
  CTAYellow = "#E9EC6B",
  Violet = "#B1B5CE",
  CoolGray = "#53565A",
  Black = "#000000",
  Peach = "#EACBBB",
  WarmGrey = "#6E6259",
  Blue1 = "#004A75",
  Blue2 = "#0E76B7",
  Blue3 = "#62B3E5",
  Blue4 = "#AFD8F1",
  Blue5 = "#E5F6FE",
  Red1 = "#9B0C4B",
  Red2 = "#D51067",
  Red3 = "#E56385",
  Red4 = "#F0B3CA",
  Red5 = "#FFEFF3",
  Green1 = "#266232",
  Green2 = "#348644",
  Green3 = "#6CC04A",
  Green4 = "#BDE093",
  Green5 = "#F1FCED",
  Orange1 = "#E36A49",
  Orange2 = "#F78D2D",
  Orange3 = "#FFBE85",
  Orange4 = "#FDEFE2",
  Background = "#F8F8F8",
  ComponentBase = "#EEEEEE",
  LineColor = "#DDDDDD",
  ComponentOutline = "#CCCCCC",
  DisabledText = "#999999",
  SecondaryText = "#666666",
  PrimaryText = "#333333",
} */
export const ColorsTieto = [
  { color: "#280071", title: "Hero Blue" },
  { color: "#071D49", title: "Dark Blue" },
  { color: "#26D07C", title: "CTA Green" },
  { color: "#F9423A", title: "Hero Red" },
  { color: "#FFFFFF", title: "White" },
  { color: "#633231", title: "Maroon" },
  { color: "#E9EC6B", title: "CTA Yellow" },
  { color: "#B1B5CE", title: "Violet" },
  { color: "#53565A", title: "Cool Gray" },
  { color: "#000000", title: "Black" },
  { color: "#EACBBB", title: "Peach" },
  { color: "#6E6259", title: "Warm Grey" },
];

const Colors = [
  { color: "#280071", title: "Hero Blue" },
  { color: "#071D49", title: "Dark Blue" },
  { color: "#26D07C", title: "CTA Green" },
  { color: "#F9423A", title: "Hero Red" },
  { color: "#FFFFFF", title: "White" },
  { color: "#633231", title: "Maroon" },
  { color: "#E9EC6B", title: "CTA Yellow" },
  { color: "#B1B5CE", title: "Violet" },
  { color: "#53565A", title: "Cool Gray" },
  { color: "#000000", title: "Black" },
  { color: "#EACBBB", title: "Peach" },
  { color: "#6E6259", title: "Warm Grey" },
  { color: "#004A75", title: "Blue 1" },
  { color: "#0E76B7", title: "Blue 2" },
  { color: "#62B3E5", title: "Blue 3" },
  { color: "#AFD8F1", title: "Blue 4" },
  { color: "#E5F6FE", title: "Blue 5" },
  { color: "#9B0C4B", title: "Red 1" },
  { color: "#D51067", title: "Red 2" },
  { color: "#E56385", title: "Red 3" },
  { color: "#F0B3CA", title: "Red 4" },
  { color: "#FFEFF3", title: "Red 5" },
  { color: "#266232", title: "Green 1" },
  { color: "#348644", title: "Green 2" },
  { color: "#6CC04A", title: "Green 3" },
  { color: "#BDE093", title: "Green 4" },
  { color: "#F1FCED", title: "Green 5" },
  { color: "#E36A49", title: "Orange 1" },
  { color: "#F78D2D", title: "Orange 2" },
  { color: "#FFBE85", title: "Orange 3" },
  { color: "#FDEFE2", title: "Orange 4" },
  { color: "#F8F8F8", title: "Background" },
  { color: "#EEEEEE", title: "Component Base" },
  { color: "#DDDDDD", title: "Line Color" },
  { color: "#CCCCCC", title: "Component Outline" },
  { color: "#999999", title: "Disabled Text" },
  { color: "#666666", title: "Secondary Text" },
  { color: "#333333", title: "Primary Text" },
];

export const ColorPalette: ColorPaletteAsArray = {
  label: "primaryPalette",
  values: [
    { value: "#280071", label: "Hero Blue" },
    { value: "#071D49", label: "Dark Blue" },
    { value: "#26D07C", label: "CTA Green" },
    { value: "#F9423A", label: "Hero Red" },
    { value: "#FFFFFF", label: "White" },
    { value: "#633231", label: "Maroon" },
    { value: "#E9EC6B", label: "CTA Yellow" },
    { value: "#B1B5CE", label: "Violet" },
    { value: "#53565A", label: "Cool Gray" },
    { value: "#000000", label: "Black" },
    { value: "#EACBBB", label: "Peach" },
    { value: "#6E6259", label: "Warm Grey" },
    { value: "#004A75", label: "Blue 1" },
    { value: "#0E76B7", label: "Blue 2" },
    { value: "#62B3E5", label: "Blue 3" },
    { value: "#AFD8F1", label: "Blue 4" },
    { value: "#E5F6FE", label: "Blue 5" },
    { value: "#9B0C4B", label: "Red 1" },
    { value: "#D51067", label: "Red 2" },
    { value: "#E56385", label: "Red 3" },
    { value: "#F0B3CA", label: "Red 4" },
    { value: "#FFEFF3", label: "Red 5" },
    { value: "#266232", label: "Green 1" },
    { value: "#348644", label: "Green 2" },
    { value: "#6CC04A", label: "Green 3" },
    { value: "#BDE093", label: "Green 4" },
    { value: "#F1FCED", label: "Green 5" },
    { value: "#E36A49", label: "Orange 1" },
    { value: "#F78D2D", label: "Orange 2" },
    { value: "#FFBE85", label: "Orange 3" },
    { value: "#FDEFE2", label: "Orange 4" },
    { value: "#F8F8F8", label: "Background" },
    { value: "#EEEEEE", label: "Component Base" },
    { value: "#DDDDDD", label: "Line Color" },
    { value: "#CCCCCC", label: "Component Outline" },
    { value: "#999999", label: "Disabled Text" },
    { value: "#666666", label: "Secondary Text" },
    { value: "#333333", label: "Primary Text" },
  ],
};

/* interface IColors {
  HeroBlue: "#280071";
  DarkBlue: "#071D49";
  CTAGreen: "#26D07C";
  HeroRed: "#F9423A";
  White: "#FFFFFF";
  Maroon: "#633231";
  CTAYellow: "#E9EC6B";
  Violet: "#B1B5CE";
  CoolGray: "#53565A";
  Black: "#000000";
  Peach: "#EACBBB";
  WarmGrey: "#6E6259";
  Blue1: "#004A75";
  Blue2: "#0E76B7";
  Blue3: "#62B3E5";
  Blue4: "#AFD8F1";
  Blue5: "#E5F6FE";
  Red1: "#9B0C4B";
  Red2: "#D51067";
  Red3: "#E56385";
  Red4: "#F0B3CA";
  Red5: "#FFEFF3";
  Green1: "#266232";
  Green2: "#348644";
  Green3: "#6CC04A";
  Green4: "#BDE093";
  Green5: "#F1FCED";
  Orange1: "#E36A49";
  Orange2: "#F78D2D";
  Orange3: "#FFBE85";
  Orange4: "#FDEFE2";
  Background: "#F8F8F8";
  ComponentBase: "#EEEEEE";
  LineColor: "#DDDDDD";
  ComponentOutline: "#CCCCCC";
  DisabledText: "#999999";
  SecondaryText: "#666666";
  PrimaryText: "#333333";
} */

export default Colors;
