"use client";

import { CardTitle } from "@/components/ui/card";

import Logo from "../svgs/Logo";
import About from "../svgs/About";
import Rate from "../svgs/Rate";
import Setting from "../svgs/Setting";
import { useTheme } from "../Theme-provider";
import Tooltip from "../Tooltip";
import ModeToggle from "../ModeToggler";
import { Link } from "react-router";
interface CardProps {
  onRatingToggle: () => void;
  ratingOpen: boolean;
}

export function CardHeader({ onRatingToggle, ratingOpen }: CardProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "Light Mode" : "Dark Mode";

  return (
    <div className='border-b border-light py-3 px-4 flex items-center justify-between'>
      <CardTitle className='text-[15px] font-semibold flex items-center gap-2'>
        <Logo />
        WebShot
        <span className='py-1 px-2 bg-secondary rounded-md text-xs font-medium'>
          v1.0
        </span>
      </CardTitle>
      <div className='flex items-center gap-2'>
        <Tooltip content={mode} trigger={<ModeToggle />} />
        <Tooltip content='About Us' trigger={<About />} />
        <Tooltip
          content='Rate Us'
          trigger={<Rate />}
          onClick={onRatingToggle}
          className={ratingOpen ? "bg-light" : ""}
        />
        <Tooltip
          content='Settings'
          trigger={
            <Link to='/options/capture'>
              <Setting />
            </Link>
          }
        />
      </div>
    </div>
  );
}
