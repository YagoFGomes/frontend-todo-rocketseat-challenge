import { Task } from "@/types";
import React from "react";
import { FiEdit, FiSettings } from "react-icons/fi";

interface TaskCardProps {
  task: Task;
}
function TaskCard({ task }: TaskCardProps) {
  function returnStatus(taskCompleted: string | null) {
    if (taskCompleted) {
      return (
        <span className="bg-lime-600 mb-2 text-white px-2 py-1 text-xs rounded-xl font-bold">
          Finished!
        </span>
      );
    } else {
      return (
        <span className="bg-orange-600 mb-2 text-white px-2 py-1 text-xs rounded-xl font-bold">
          ToDo
        </span>
      );
    }
  }

  return (
    <a href={`/edit-task/${task.id}`}>
      <div className="group bg-gray-700 p-4 rounded mb-4 relative hover:bg-purple-700 transition-colors cursor-pointer">
        <div className="absolute top-0 right-0 p-2">
          <div className="w-5 h-5 text-zinc-200 group-hover:animate-spin transition-all">
            <FiSettings className="w-full h-full" />
          </div>
        </div>

        {returnStatus(task.completed_at)}

        <div className="pr-10">
          <h2 className="text-xl font-semibold">{task.title}</h2>
          <p>{task.description}</p>
        </div>
      </div>
    </a>
  );
}

export default TaskCard;
