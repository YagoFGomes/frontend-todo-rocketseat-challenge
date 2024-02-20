"use client";
import { Task } from "@/types";
import { Button, DropdownMenu } from "@radix-ui/themes";
import React from "react";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";
import { UseCompleteTask } from "@/hooks/UseCompleteTask";
import { UseUncompleteTask } from "@/hooks/UseUncompleteTask";
import { toast } from "sonner";
import { UseDeleteTask } from "@/hooks/UseDeleteTask";

interface Props {
  task: Task;
  statusTask: "completed" | "todo";
  onCompleteTask: () => void;
  onUncompleteCompleteTask: () => void;
  onDeleteTask: (taskId: string) => void;
}

function ButtonSettings({
  task,
  statusTask,
  onCompleteTask,
  onUncompleteCompleteTask,
  onDeleteTask,
}: Props) {
  function handleCompleteTaks(task_id: string) {
    UseCompleteTask(task_id);
    onCompleteTask();
  }
  function handleUncompleteCompleteTask(task_id: string) {
    UseUncompleteTask(task_id);
    onUncompleteCompleteTask();
  }
  async function handleDeletetTask(taskId: string) {
    const isDeleted = await UseDeleteTask(taskId);
    if (isDeleted) {
      onDeleteTask(taskId);
    }
  }
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div className="cursor-pointer">
            <FiSettings className="w-full h-full" />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <Link href={`/edit-task/${task.id}`}>
            <DropdownMenu.Item>Edit</DropdownMenu.Item>
          </Link>
          {statusTask !== "completed" ? (
            <DropdownMenu.Item
              onClick={() => handleCompleteTaks(task.id)}
              color="green"
            >
              Complete Task
            </DropdownMenu.Item>
          ) : (
            <DropdownMenu.Item
              onClick={() => handleUncompleteCompleteTask(task.id)}
              color="red"
            >
              Uncomplete Task
            </DropdownMenu.Item>
          )}

          <DropdownMenu.Separator />
          <DropdownMenu.Item
            onClick={() => handleDeletetTask(task.id)}
            color="red"
          >
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
}

export default ButtonSettings;
