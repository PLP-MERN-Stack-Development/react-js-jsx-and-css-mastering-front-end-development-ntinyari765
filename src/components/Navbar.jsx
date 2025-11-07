import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-100 px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-lg tracking-wide">
        <Link to="/">TaskFlow</Link>
      </h1>
      <div className="flex gap-6 items-center">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>Home</NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>Tasks</NavLink>
        <NavLink to="/posts" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>Posts</NavLink>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-blue-200 dark:bg-blue-800 hover:scale-105 transition"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
}


