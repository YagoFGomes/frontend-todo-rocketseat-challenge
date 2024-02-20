import { toast } from "sonner";

export async function UseEditTask(
  taskId: string,
  title: string,
  description: string
) {
  try {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    if (!response.ok) {
      if (response.status == 404) {
        throw new Error(`${response.status} - Not Found`);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    // toast.success("Task Edited!");
  } catch (e: any) {
    console.error(e);
    toast.error(e.message);
    return false;
  }

  return true;
}
