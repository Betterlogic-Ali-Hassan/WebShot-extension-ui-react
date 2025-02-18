"use client";
import { LuSun } from "react-icons/lu";
import { RiMoonFill } from "react-icons/ri";
import { useTheme } from "./Theme-provider";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "light" ? (
        <span onClick={() => setTheme("dark")}>
          <RiMoonFill size={20} className=' text-dark' />{" "}
        </span>
      ) : (
        <span onClick={() => setTheme("light")}>
          <LuSun size={20} className='!fill-none text-dark' />
        </span>
      )}
    </div>
  );
}
