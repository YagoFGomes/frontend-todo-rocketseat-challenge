import { toast } from "sonner";

export async function UseDeleteTask(taskId: string) {
  try {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      if (response.status == 404) {
        throw new Error(`${response.status} - Not Found`);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    toast.success("Task was deleted");
  } catch (e: any) {
    toast.error(e.message);
    return false;
  }

  return true;
}
