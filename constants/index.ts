import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaDribbble,
  FaAward,
} from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { TfiGoogle } from "react-icons/tfi";
import { GiFountainPen } from "react-icons/gi";
import { SlVector } from "react-icons/sl";
import { SiGooglefonts } from "react-icons/si";
import { ImMenu } from "react-icons/im";
import { GoProject } from "react-icons/go";
import { BsEmojiSmile } from "react-icons/bs";
import { LiaGlassCheersSolid } from "react-icons/lia";

export const navigationMenu = [
  {
    id: 0,
    url: "/",
    name: "Home",
  },
  {
    id: 1,
    url: "/features",
    name: "features",
  },
  {
    id: 2,
    url: "/portfolio",
    name: "portfolio",
  },
  {
    id: 3,
    url: "/elements",
    name: "elements",
  },
  {
    id: 4,
    url: "/about",
    name: "about",
  },
  {
    id: 5,
    url: "/team",
    name: "team",
  },
  {
    id: 6,
    url: "/blog",
    name: "blog",
  },
  {
    id: 7,
    url: "/contact",
    name: "contact",
  },
];

export const footerNav = {
  navigation: [
    {
      id: 0,
      url: "/",
      name: "home",
    },
    {
      id: 1,
      url: "/about",
      name: "about",
    },
    {
      id: 2,
      url: "/blog",
      name: "blog",
    },
    {
      id: 3,
      url: "/contact",
      name: "contact",
    },
  ],
  social: [
    {
      id: 0,
      name: "facebook",
      icon: FaFacebookF,
      url: "http://facebook.com",
    },
    {
      id: 1,
      name: "twitter",
      icon: FaTwitter,
      url: "http://twitter.com",
    },
    {
      id: 2,
      name: "googleplus",
      icon: TfiGoogle,
      url: "http://googleplus",
    },
    {
      id: 3,
      name: "pinterest",
      icon: FaPinterest,
      url: "http://pinterest.com",
    },
    {
      id: 4,
      name: "dribbbble",
      icon: FaDribbble,
      url: "http://dribbbble.com",
    },
  ],
};

export const aboutData = [
  {
    id: 0,
    icon: GiFountainPen,
    headerText: "pixel perfect",
    aboutText: "Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet",
    href: "#",
  },
  {
    id: 1,
    icon: SlVector,
    headerText: "vector shapes",
    aboutText: "Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet",
    href: "#",
  },
  {
    id: 2,
    icon: SiGooglefonts,
    headerText: "google fonts",
    aboutText: "Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet",
    href: "#",
  },
  {
    id: 3,
    icon: FiLayers,
    headerText: "easy layers",
    aboutText: "Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet",
    href: "#",
  },
  {
    id: 4,
    icon: ImMenu,
    headerText: "bootstrap grid",
    aboutText: "Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet",
    href: "#",
  },
];

export const categoryProduct = {
  filtereds: ["all", "ui/ux design", "programming", "photography", "ecommerce"],
  products: [
    {
      id: 0,
      src: "/img-37.jpg",
      category: ["ui/ux design", "photography"],
      liked: true,
    },
    {
      id: 1,
      src: "/img-32.jpg",
      category: ["programming", "photography"],
      liked: true,
    },
    {
      id: 2,
      src: "/img-33.jpg",
      category: ["ui/ux design", "photography"],
      liked: false,
    },
    {
      id: 3,
      src: "/img-34.jpg",
      category: ["programming", "ecommerce"],
      liked: false,
    },
    {
      id: 4,
      src: "/img-35.jpg",
      category: ["programming", "ecommerce"],
      liked: false,
    },
    {
      id: 5,
      src: "/img-36.jpg",
      category: ["ui/ux design", "ecommerce"],
      liked: false,
    },
  ],
};

export const storyData = [
  {
    id: 0,
    href: "#",
    name: "WEB & INTERACTIVE DESIGN",
  },
  {
    id: 1,
    href: "#",
    name: "DATABASE DESIGN",
  },
  {
    id: 2,
    href: "#",
    name: "CONTENT MANAGEMENT",
  },
  {
    id: 3,
    href: "#",
    name: "TECHNICAL DOCUMENTATION",
  },
  {
    id: 4,
    href: "#",
    name: "ECOMMERCE SOLUTIONS",
  },
  {
    id: 5,
    href: "#",
    name: "WEB APPLICATIONS",
  },
  {
    id: 6,
    href: "#",
    name: "SOFTWARE ARCHITECTURE",
  },
  {
    id: 7,
    href: "#",
    name: "SOFTWARE DEVELOPMENT",
  },
  {
    id: 8,
    href: "#",
    name: "SEARCH OPTIMIZATION",
  },
  {
    id: 9,
    href: "#",
    name: "ECOMMERCE SOLUTIONS",
  },
];

export const teamworkData = [
  {
    id: 0,
    name: "Jason Stratham",
    role: "ui/ux guru",
    src: "/team-02.jpg",
  },
  {
    id: 1,
    name: "Jessica Fizovic",
    role: "ui/ux guru",
    src: "/team-01.jpg",
  },
  {
    id: 2,
    name: "James Nass",
    role: "ui/ux guru",
    src: "/team-03.jpg",
  },
  {
    id: 3,
    name: "Steve Manning",
    role: "ui/ux guru",
    src: "/team-02.jpg",
  },
  {
    id: 4,
    name: "Jessica Fizovic",
    role: "ui/ux guru",
    src: "/team-01.jpg",
  },
];

export const information = [
  {
    id: 0,
    icon: GoProject,
    numeric: 505,
    title: "total projects",
  },
  {
    id: 1,
    icon: BsEmojiSmile,
    numeric: 220,
    title: "satisfied clients",
  },
  {
    id: 2,
    icon: FaAward,
    numeric: 720,
    title: "awards won",
  },
  {
    id: 3,
    icon: LiaGlassCheersSolid,
    numeric: 707,
    title: "millions met",
  },
];
