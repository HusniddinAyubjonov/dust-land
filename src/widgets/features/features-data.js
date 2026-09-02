import decideOnTheWays from "@/shared/assets/features/decide-on-the-ways.png";
import ownAUniqueArsenal from "@/shared/assets/features/own-a-unique-arsenal.png";
import bewareOf from "@/shared/assets/features/beware-of.png";
import chooseOneFromTheFour from "@/shared/assets/features/choose-one-from-the-four.png";
import enjoyTheStunningGraphics from "@/shared/assets/features/enjoy-the-stunning-graphics.jpg";

export const featuresData = [
  {
    id: "decide-on-the-ways",
    variant: "photo",
    decorated: true,
    image: decideOnTheWays,
    heading: [
      [{ text: "DECIDE ON ", accent: false }],
      [{ text: "THE WAYS", accent: true }],
    ],
    text: "TO ACHIEVE YOUR MISSION GOAL, BE ON YOUR GUARD, AS THE SMARTEST PATH ISN'T ALWAYS THE EASIEST, WILL YOU DARE?",
  },
  {
    id: "own-a-unique-arsenal",
    variant: "render",
    image: ownAUniqueArsenal,
    heading: [
      [{ text: "OWN A UNIQUE ", accent: false }],
      [{ text: "ARSENAL!", accent: true }],
    ],
    text: "USE A WEAPON CONSTRUCTOR TO CREATE SUPER-POWERFUL GUNS!",
  },
  {
    id: "beware-of",
    variant: "render",
    grid: false,
    boxed: false,
    image: bewareOf,
    heading: [
      [
        { text: "BEWARE ", accent: true },
        { text: "OF", accent: false },
      ],
    ],
    text: "MUTANTS, DEADLY BEASTS, AND HOSTILE GANGS, MANY OF WHICH ARE CANNIBALISTIC...",
  },
  {
    id: "choose-one-from-the-four",
    variant: "render",
    image: chooseOneFromTheFour,
    heading: [
      [{ text: "CHOOSE ONE", accent: false }],
      [{ text: "FROM THE FOUR", accent: false }],
      [{ text: "UNIQUE FACTIONS", accent: true }],
    ],
    text: "EACH WITH ITS OWN TERRITORIES, WHERE PLAYERS CAN SAFELY TRADE AND COLLABORATE.",
  },
  {
    id: "enjoy-the-stunning-graphics",
    variant: "photo",
    image: enjoyTheStunningGraphics,
    heading: [
      [{ text: "ENJOY THE ", accent: false }],
      [{ text: "STUNNING", accent: true }],
      [{ text: "GRAPHICS", accent: false }],
    ],
    text: "THAT WILL ALLOW YOU TO FULLY EXPERIENCE THE HOSTILITY OF THE SURROUNDING ENVIRONMENT.",
  },
];
