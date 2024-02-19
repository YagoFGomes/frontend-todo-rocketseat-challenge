"use client";
import SkeletonCard from "@/components/SkeletonCard";
import { useGetTaskById } from "@/hooks/GetTasksById";
import { Task } from "@/types";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { FiHome, FiPenTool, FiSettings } from "react-icons/fi";

function EditTask({ params }: { params: { id: string } }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const idTaks = params.id[0];

  const { data: task, error, isLoading } = useGetTaskById(idTaks);

  function handleEdit() {
    setIsEditing(!isEditing);
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
        <div className="bg-gray-700 p-4 rounded-full w-16  flex justify-center items-center">
          <a href="/">
            <FiHome />
          </a>
        </div>
      </div>
      <div className="max-w-lg mx-auto p-8 w-full">
        {isLoading && <SkeletonCard />}

        {task && (
          <div className=" bg-gray-700 p-4 rounded mb-4 relative min-w-lg">
            {!isEditing ? (
              <>
                <div className="absolute top-0 right-0 p-2">
                  <button
                    onClick={handleEdit}
                    className="w-5 h-5 text-zinc-200"
                  >
                    <BsPencil className="w-full h-full" />
                  </button>
                </div>

                {returnStatus(task.completed_at)}

                <div className="">
                  <h2 className="text-2xl font-semibold mt-5">{task.title}</h2>
                  <div className="w-full bg-gray-500 rounded px-2 py-5 mt-5">
                    <p>{task.description}</p>
                  </div>
                </div>
                <div className="w-full justify-center mt-5 flex items-center">
                  <button className="group w-full p-3 bg-lime-600 rounded hover:bg-lime-700 transition-all font-semibold text-md">
                    Complete Task {"  "}
                    <span className="inline-block group-hover:animate-bounce ">
                      🚀
                    </span>
                  </button>
                </div>
              </>
            ) : (
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
                  value={task.title}
                />
                <label htmlFor="title">Title</label>

                <textarea
                  placeholder="Description"
                  className="w-full p-3 mb-4 bg-gray-500 rounded"
                  value={task.description}
                ></textarea>

                <div className="w-full flex flex-row justify-around">
                  <button
                    onClick={handleEdit}
                    className="w-40 p-3 bg-red-700 rounded hover:bg-red-500 transition-all font-semibold text-md"
                  >
                    Cancel
                  </button>
                  <button className="group w-40 p-3 bg-purple-800 rounded hover:bg-purple-700 transition-all font-semibold text-md">
                    Submit{"  "}
                    <span className="inline-block group-hover:animate-bounce ">
                      🚀
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default EditTask;
