import { IconType } from "react-icons";

export interface ButtonProps {
  className?: string;
  title: string;
  blacked?: boolean;
  handleClick: () => void;
}

export interface AboutItemProps {
  id: number;
  icon: IconType;
  headerText: string;
  aboutText: string;
  href: string;
}

export interface ProductProps {
  id: number;
  src: string;
  category: string[];
  liked: boolean;
}

export interface ImgProps {
  width: number;
  height: number;
  className?: string;
}
