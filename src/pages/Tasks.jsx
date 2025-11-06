import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <Card className="bg-gradient-to-b from-blue-50 to-white border border-blue-200 shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          📝 My Tasks
        </h2>

        <div className="flex gap-3 mb-6">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="flex justify-center gap-3 mb-5">
          {["all", "active", "completed"].map((f) => (
            <Button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>

        {filteredTasks.length === 0 ? (
          <div className="text-gray-500 text-center italic mt-5">
            No tasks yet. Add one to get started!
          </div>
        ) : (
          <ul className="space-y-3">
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className={`flex items-center justify-between p-3 border rounded-xl transition-all duration-300 ${
                  task.completed
                    ? "bg-blue-100 border-blue-200 opacity-70"
                    : "bg-white border-blue-100 hover:shadow-md"
                }`}
              >
                <div
                  onClick={() => toggleComplete(task.id)}
                  className={`cursor-pointer flex-1 text-left ${
                    task.completed
                      ? "line-through text-blue-400"
                      : "text-blue-800"
                  }`}
                >
                  {task.text}
                </div>
                <Button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

