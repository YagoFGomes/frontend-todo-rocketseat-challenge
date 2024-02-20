import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "sonner";

export async function CompleteTaks(task_id: string) {
  //   console.log(`/api/tasks/${task_id}/completed`);
  try {
    const response = await fetch(`/api/tasks/${task_id}/completed`, {
      method: "PATCH",
    });

    if (!response.ok) {
      if (response.status == 404) {
        throw new Error(`${response.status} - Not Found`);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    toast.success("Task Completed!");
  } catch (e: any) {
    toast.error(e.message);
  }

  return;
}
