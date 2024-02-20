"use client";
import SkeletonCard from "@/components/SkeletonCard";
import { UseEditTask } from "@/hooks/UseEditTask";

import { UseGetTasksById } from "@/hooks/UseGetTasksById";
import React, { useEffect, useState } from "react";

import { FiHome } from "react-icons/fi";

function EditTask({ params }: { params: { id: string } }) {
  const idTaks = params.id[0];

  const { data: task, isLoading } = UseGetTasksById(idTaks);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  async function handleEditTask() {
    await UseEditTask(idTaks, title, description);
    location.replace("/");
  }

  function returnStatus(taskCompleted: string | null) {
    if (taskCompleted) {
      return (
        <span className="bg-lime-600 mb-2 text-white px-2 py-1 text-sm rounded-xl font-bold">
          Finished!
        </span>
      );
    } else {
      return (
        <span className="bg-orange-600 mb-2 text-white px-2 py-1 text-sm rounded-xl font-bold">
          ToDo
        </span>
      );
    }
  }

  return (
    <main className="text-white h-screen flex items-start justify-center flex-col">
      <div className="max-w-lg mx-auto px-8 w-full  ">
        <a
          href="/"
          className="bg-gray-700 p-4 rounded-full w-16  flex justify-center items-center"
        >
          <span>
            <FiHome />
          </span>
        </a>
      </div>
      <div className="max-w-lg mx-auto px-8 py-4 w-full">
        {isLoading && <SkeletonCard />}

        {task && (
          <div className=" bg-gray-700 p-4 rounded mb-4 relative min-w-lg">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-white text-2xl font-bold mb-4">
                  Edit taks
                </h2>
                {returnStatus(task.completed_at)}
              </div>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                className="w-full p-3 mb-4 bg-gray-500 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="title">Title</label>

              <textarea
                placeholder="Description"
                className="w-full p-3 mb-4 bg-gray-500 rounded"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <button
                onClick={handleEditTask}
                className="group w-full p-3 bg-purple-800 rounded hover:bg-purple-700 transition-all font-semibold text-md"
              >
                Submit{"  "}
                <span className="inline-block group-hover:animate-bounce ">
                  🚀
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default EditTask;
