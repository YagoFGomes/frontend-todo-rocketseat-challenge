"use client";
import { Task } from "@/types";
import React, { useState } from "react";
import { FiEdit, FiSettings } from "react-icons/fi";
import ButtonSettings from "./ButtonSettings";

interface TaskCardProps {
  task: Task;
  onDeleteTask: (taskId: string) => void;
}
function TaskCard({ task, onDeleteTask }: TaskCardProps) {
  function checkStatusTodo() {
    if (task.completed_at !== null) {
      return "completed";
    } else {
      return "todo";
    }
  }

  const [statusTask, setStatusTask] = useState<"completed" | "todo">(
    checkStatusTodo
  );

  function onCompleteTask() {
    setStatusTask("completed");
  }
  function onUncompleteCompleteTask() {
    setStatusTask("todo");
  }

  function returnStatus(statusTask: "completed" | "todo") {
    if (statusTask == "completed") {
      return (
        <span className="bg-lime-600  text-white px-2 py-1 text-xs rounded-xl font-bold">
          Finished!
        </span>
      );
    } else {
      return (
        <span className="bg-orange-600 text-white px-2 py-1 text-xs rounded-xl font-bold">
          ToDo
        </span>
      );
    }
  }

  return (
    <div className="group bg-gray-700 p-4 rounded mb-4 relative hover:bg-purple-700 transition-colors ">
      <div className="absolute top-0 right-0 p-2">
        <div className="w-5 h-5 text-zinc-200 group-hover:animate-spin transition-all">
          <ButtonSettings
            task={task}
            statusTask={statusTask}
            onCompleteTask={onCompleteTask}
            onUncompleteCompleteTask={onUncompleteCompleteTask}
            onDeleteTask={onDeleteTask}
          />
        </div>
      </div>
      <div className="mb-4">{returnStatus(statusTask)}</div>
      <div className="pr-10">
        <h2 className="text-xl font-semibold">{task.title}</h2>
        <p>{task.description}</p>
      </div>
    </div>
  );
}

export default TaskCard;
