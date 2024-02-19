import { Task } from "@/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "sonner";

export function useGetTaskById(idTask: string) {
  const [data, setData] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    queryGetTaskById(idTask, setData, setIsLoading, setError);
  }, []);

  return { data, isLoading, error };
}

async function queryGetTaskById(
  idTask: string,
  setData: Dispatch<SetStateAction<Task | null>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<any>
) {
  try {
    const response = await fetch(`/api/tasks/${idTask}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setData(data.tasks[0]);
  } catch (e: any) {
    setError(e.message);
    toast.error(e.message);
  } finally {
    setIsLoading(false);
  }
}
