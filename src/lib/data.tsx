import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { HiEnvelope, HiHome, HiSquaresPlus, HiUser } from "react-icons/hi2";
import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from "react-icons/si";

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

export const socials = [
  {
    name: "Github",
    url: "https://l.arthur404.dev/github",
    icon: <SiGithub />,
  },
  {
    name: "Youtube",
    url: "https://l.arthur404.dev/youtube",
    icon: <SiYoutube />,
  },
  {
    name: "Linkedin",
    url: "https://l.arthur404.dev/linkedin",
    icon: <SiLinkedin />,
  },
  {
    name: "Instagram",
    url: "https://l.arthur404.dev/instagram",
    icon: <SiInstagram />,
  },
  {
    name: "Discord",
    url: "https://l.arthur404.dev/discord",
    icon: <SiDiscord />,
  },
];
