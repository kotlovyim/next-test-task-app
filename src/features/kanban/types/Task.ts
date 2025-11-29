export interface ApiTask {
    id: string;
    title: string;
    description: string;
    status: "to-do" | "in-progress" | "review" | "completed";
    createdAt: string;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    date: string;
    status: "todo" | "inProgress" | "review" | "completed";
}
