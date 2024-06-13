const COLORS = {
  green: {
    bg: "bg-[#ECF7D4]",
    badge: "bg-[#D6F497]",
  },
  orange: {
    bg: "bg-[#F9EFE1]",
    badge: "bg-[#F7E0B8]",
  },
  red: {
    bg: "bg-[#FBE5E7]",
    badge: "bg-[#FDC6C7]",
  },
  blue: {
    bg: "bg-[#DDEEFF]",
    badge: "bg-[#B0D4FF]",
  },
  purple: {
    bg: "bg-[#F3E6F9]",
    badge: "bg-[#E1C9F5]",
  },
  yellow: {
    bg: "bg-[#FFF9D9]",
    badge: "bg-[#FFEB99]",
  },
  pink: {
    bg: "bg-[#FFE4E9]",
    badge: "bg-[#FFB3C1]",
  },
  gray: {
    bg: "bg-[#F4F4F4]",
    badge: "bg-[#D1D1D1]",
  },
  teal: {
    bg: "bg-[#E0F4F4]",
    badge: "bg-[#A8E3E3]",
  },
  brown: {
    bg: "bg-[#F3E7E1]",
    badge: "bg-[#DCC2B6]",
  },
};

export const getRandomColor = () => {
  const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
  const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
  const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
  return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};
