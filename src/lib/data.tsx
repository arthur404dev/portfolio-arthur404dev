import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { HiEnvelope, HiHome, HiSquaresPlus, HiUser } from "react-icons/hi2";

export const navigation = [
  {
    name: "Home",
    hash: "#home",
    icon: <HiHome />,
  },
  {
    name: "About",
    hash: "#about",
    icon: <HiUser />,
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: <HiSquaresPlus />,
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: <BsFillSuitcaseLgFill />,
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: <HiEnvelope />,
  },
];
