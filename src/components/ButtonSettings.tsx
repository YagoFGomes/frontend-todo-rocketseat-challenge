"use client";
import { Task } from "@/types";
import { Button, DropdownMenu } from "@radix-ui/themes";
import React from "react";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";
import { CompleteTaks } from "@/hooks/CompleteTask";
import { UncompleteTaks } from "@/hooks/UncompleteTask";
import { toast } from "sonner";
import { DeleteTask } from "@/hooks/DeleteTask";

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
    CompleteTaks(task_id);
    onCompleteTask();
  }
  function handleUncompleteCompleteTask(task_id: string) {
    UncompleteTaks(task_id);
    onUncompleteCompleteTask();
  }
  async function handleDeletetTask(taskId: string) {
    const isDeleted = await DeleteTask(taskId);
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
