import { useDroppable } from "@dnd-kit/core";
import { Task } from "../types/Task";
import TaskCard from "./TaskCard";
import { PlaceholderCard } from "./PlaceholderCard";

interface ColumnProps {
    id: Task["status"];
    title: string;
    count: number;
    tasks: Task[];
    maxTasks: number;
}

export function KanbanColumn({
    id,
    title,
    count,
    tasks,
    maxTasks,
}: ColumnProps) {
    const { setNodeRef, isOver } = useDroppable({
        id: id,
    });

    const placeholdersNeeded = Math.max(0, maxTasks - tasks.length);

    return (
        <div
            ref={setNodeRef}
            className={`flex-1 min-w-[260px] flex flex-col gap-4 ${
                isOver ? "opacity-80" : ""
            }`}
        >
            <h3 className="text-base font-semibold text-foreground">
                {title} ({count})
            </h3>
            <div className="flex flex-col gap-3">
                {tasks.map((task) => (
                    <TaskCard
                        id={task.id}
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        date={task.date}
                    />
                ))}
                {Array.from({ length: placeholdersNeeded }).map((_, index) => (
                    <PlaceholderCard key={`placeholder-${index}`} />
                ))}
            </div>
        </div>
    );
}
