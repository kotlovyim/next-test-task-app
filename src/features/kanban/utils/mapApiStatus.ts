import { ApiTask } from "../types/Task";
import { Task } from "../types/Task";

export const mapApiStatus = (apiStatus: ApiTask["status"]): Task["status"] => {
    const statusMap: Record<ApiTask["status"], Task["status"]> = {
        "to-do": "todo",
        "in-progress": "inProgress",
        review: "review",
        completed: "completed",
    };
    return statusMap[apiStatus];
};
