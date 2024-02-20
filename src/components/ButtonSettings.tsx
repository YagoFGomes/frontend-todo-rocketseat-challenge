"use client";
import { Task } from "@/types";
import { Button, DropdownMenu } from "@radix-ui/themes";
import React from "react";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";
import { CompleteTaks } from "@/hooks/CompleteTask";

interface Props {
  task: Task;
  onCompleteTask: () => void;
  onUncompleteCompleteTask: () => void;
}

function ButtonSettings({
  task,
  onCompleteTask,
  onUncompleteCompleteTask,
}: Props) {
  function handleCompleteTaks(task_id: string) {
    CompleteTaks(task_id);
    onCompleteTask();
  }
  function handleUncompleteCompleteTask(task_id: string) {
    CompleteTaks(task_id);
    onUncompleteCompleteTask();
  }
  function handleDeletetTaks(task_id: string) {}
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
          {!task.completed_at ? (
            <DropdownMenu.Item
              onClick={() => handleCompleteTaks(task.id)}
              color="green"
            >
              Complete Task
            </DropdownMenu.Item>
          ) : (
            <DropdownMenu.Item
              onClick={() => handleCompleteTaks(task.id)}
              color="red"
            >
              Uncomplete Task
            </DropdownMenu.Item>
          )}

          <DropdownMenu.Separator />
          <DropdownMenu.Item
            onClick={() => handleDeletetTaks(task.id)}
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
