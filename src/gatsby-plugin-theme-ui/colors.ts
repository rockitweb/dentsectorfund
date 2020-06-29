interface BaseColors {
  transparent: string;
  black: string;
  white: string;
  primary: string[];
  secondary: string[];
  neutrals: string[];
  supportingA: string[];
  supportingB: string[];
  supportingC: string[];
}

const baseColors: BaseColors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  primary: [
    "#E7E9EC",
    "#C2C8CF",
    "#9EA7B2",
    "#556479",
    "#0C223F",
    "#0B1F39",
    "#071426",
    "#050F1C",
    "#040A13",
  ],
  secondary: [
    "#F7E8EA",
    "#EAC5CA",
    "#DEA2AB",
    "#C55C6B",
    "#AC162C",
    "#9B1428",
    "#670D1A",
    "#4D0A14",
    "#34070D",
  ],
  neutrals: [
    "#F5F7FA",
    "#E4E7EB",
    "#CBD2D9",
    "#9AA5B1",
    "#7B8794",
    "#616E7C",
    "#52606D",
    "#3E4C59",
    "#323F4B",
    "#1F2933",
  ],
  supportingA: [
    "#EBF8FF",
    "#D1EEFC",
    "#A7D8F0",
    "#7CC1E4",
    "#55AAD4",
    "#3994C1",
    "#2D83AE",
    "#1D6F98",
    "#166086",
    "#0B4F71",
  ],
  supportingB: [
    "#FFEEEE",
    "#FACDCD",
    "#F29B9B",
    "#E66A6A",
    "#D64545",
    "#BA2525",
    "#A61B1B",
    "#911111",
    "#780A0A",
    "#610404",
  ],
  supportingC: [
    "#FFFAEB",
    "#FCEFC7",
    "#F8E3A3",
    "#F9DA8B",
    "#F7D070",
    "#E9B949",
    "#C99A2E",
    "#A27C1A",
    "#7C5E10",
    "#513C06",
  ],
};

export default baseColors;
