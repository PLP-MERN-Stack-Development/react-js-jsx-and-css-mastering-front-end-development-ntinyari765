import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-100 dark:bg-blue-950 text-center py-4 border-t border-blue-300 dark:border-blue-800 mt-8">
      <p className="text-blue-700 dark:text-blue-300 text-sm">
        © {new Date().getFullYear()} TaskMate — Stay organized, stay inspired
      </p>
    </footer>
  );
}

