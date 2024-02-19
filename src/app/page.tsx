"use client";
import Formulario from "@/components/Formulario";
import Header from "@/components/Header";
import Message from "@/components/Message";
import SkeletonCard from "@/components/SkeletonCard";
import TaskCard from "@/components/TaskCard";
import ToastContainer from "@/components/ToastContainer";
import { useGetTasks } from "@/hooks/GetAllTasks";

export default function Home() {
  const { data, error, isLoading } = useGetTasks();

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
        {data &&
          data.length > 0 &&
          data.map((task, index) => {
            return <TaskCard task={task} key={index} />;
          })}
      </div>
    </main>
  );
}
