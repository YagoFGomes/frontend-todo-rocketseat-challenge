import { Task } from "@/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "sonner";

export function UseGetAllTasks() {
  const [data, setData] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    queryGetTasks(setData, setIsLoading, setError);
  }, []);

  return { data, isLoading, error };
}

async function queryGetTasks(
  setData: Dispatch<SetStateAction<Task[]>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<any>
) {
  try {
    const response = await fetch(`/api/tasks`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setData(data.tasks);
  } catch (e: any) {
    setError(e.message);
    toast.error(e.message);
  } finally {
    setIsLoading(false);
  }
}
