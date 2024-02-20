"use client";
import Formulario from "@/components/Formulario";
import Header from "@/components/Header";
import Message from "@/components/Message";
import SkeletonCard from "@/components/SkeletonCard";
import TaskCard from "@/components/TaskCard";
import ToastContainer from "@/components/ToastContainer";
import { useGetTasks } from "@/hooks/GetAllTasks";
import { Task } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { data, error, isLoading } = useGetTasks();

  useEffect(() => {
    setTasks(data);
  }, [data]);

  function onDeleteTask(taskId: string) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <main className="text-white h-screen flex items-center ">
      <div className="max-w-xl mx-auto p-8">
        <Formulario
          title="Your todo tasks"
          subtitle="Manage your tasks efficiently"
        />
        <br />
        <Header title="Tasks" />
        {isLoading && <SkeletonCard />}
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => {
            return (
              <TaskCard task={task} key={task.id} onDeleteTask={onDeleteTask} />
            );
          })}
      </div>
    </main>
  );
}
