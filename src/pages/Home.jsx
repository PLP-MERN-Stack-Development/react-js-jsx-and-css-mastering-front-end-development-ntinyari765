import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-lg rounded-3xl p-10 border border-blue-100 dark:border-slate-700">
        <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">
          Welcome to TaskFlow 
        </h1>
        <p className="text-blue-700/80 dark:text-blue-300/80 text-lg leading-relaxed mb-6">
          Stay organized and focused with your daily tasks. Track progress, manage priorities, 
          and achieve your goals effortlessly — all in one clean and calm space.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/tasks"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md"
          >
            View My Tasks
          </Link>
          <Link
            to="/posts"
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md"
          >
            Explore Posts
          </Link>
        </div>

        <div className="mt-8 text-sm text-blue-600/70">
         Simplify your workflow. Empower your day.
        </div>
      </div>
    </div>
  );
}

