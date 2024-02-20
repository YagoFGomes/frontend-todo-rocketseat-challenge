import React, { useState } from "react";
import { toast } from "sonner";

interface Props {
  title: string;
  subtitle: string;
}

function Formulario({ title, subtitle }: Props) {
  const [taskTitle, setTeskTitle] = useState<string>("");
  const [taskDescription, setTeskDescription] = useState<string>("");

  function checkFields() {
    if (
      taskTitle !== "" &&
      taskTitle.trim().length > 0 &&
      taskDescription !== "" &&
      taskDescription.trim().length > 0
    ) {
      return "";
    }
    return "disabled";
  }

  async function handleSubmit() {
    if (
      taskTitle !== "" &&
      taskTitle.trim().length > 0 &&
      taskDescription !== "" &&
      taskDescription.trim().length > 0
    ) {
      try {
        const response = await fetch("/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: taskTitle,
            description: taskDescription,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Handle the response data as needed...
      } catch (error) {
        console.error("Error creating task:", error);
        // Handle errors as needed...
      }
    } else {
      toast.error("Fields are required");
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="mb-8">{subtitle}</p>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 mb-4 bg-gray-700 rounded"
          value={taskTitle}
          onChange={(e) => setTeskTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-3 mb-4 bg-gray-700 rounded"
          value={taskDescription}
          onChange={(e) => setTeskDescription(e.target.value)}
          required
        ></textarea>
        <button
          onClick={handleSubmit}
          className={`group w-full p-3 bg-purple-800 rounded hover:bg-purple-700 transition-all font-semibold text-md ${checkFields}`}
        >
          Submit{"  "}
          <span className="inline-block group-hover:animate-bounce ">🚀</span>
        </button>
      </div>
    </div>
  );
}

export default Formulario;
