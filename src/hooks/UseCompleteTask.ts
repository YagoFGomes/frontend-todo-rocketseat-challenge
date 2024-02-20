import { toast } from "sonner";

export async function UseCompleteTask(taskId: string) {
  try {
    const response = await fetch(`/api/tasks/${taskId}/completed`, {
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
