import { ApiTask } from "../types/Task";
import { Task } from "../types/Task";
import { mapApiStatus } from "../utils/mapApiStatus";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const fetchTasks = async (): Promise<Task[]> => {
    const response = await fetch(`${API_URL}/tasks`);
    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }
    const data: ApiTask[] = await response.json();
    return data.map((task) => ({
        id: task.id,
        title: task.title,
        description: task.description,
        date: new Date(task.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        }),
        status: mapApiStatus(task.status),
    }));
};
