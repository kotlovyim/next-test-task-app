import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    DragEndEvent,
    DragStartEvent,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { Task } from "../types/Task";
import { fetchTasks } from "../services/fetchTasks";

export const useKanBanTaskBoard = () => {
    const [activeTask, setActiveTask] = useState<Task | null>(null);
    const [localTasks, setLocalTasks] = useState<Task[]>([]);

    const { data: fetchedTasks = [], isLoading } = useQuery({
        queryKey: ["tasks"],
        queryFn: fetchTasks,
    });

    useEffect(() => {
        if (fetchedTasks.length > 0 && localTasks.length === 0) {
            setLocalTasks(fetchedTasks);
        }
    }, [fetchedTasks, localTasks.length]);

    const tasks = localTasks.length > 0 ? localTasks : fetchedTasks;

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    const handleDragStart = (event: DragStartEvent) => {
        const task = tasks.find((t) => t.id === event.active.id);
        if (task) {
            setActiveTask(task);
        }
    };

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveTask(null);

        if (!over) return;

        const taskId = active.id as string;
        const newStatus = over.id as Task["status"];

        setLocalTasks((prevTasks) => {
            const tasksToUpdate =
                prevTasks.length > 0 ? prevTasks : fetchedTasks;
            return tasksToUpdate.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task
            );
        });
    };

    const todoTasks = tasks.filter((task) => task.status === "todo");
    const inProgressTasks = tasks.filter(
        (task) => task.status === "inProgress"
    );
    const reviewTasks = tasks.filter((task) => task.status === "review");
    const completedTasks = tasks.filter((task) => task.status === "completed");

    const maxTasks = Math.max(
        todoTasks.length,
        inProgressTasks.length,
        reviewTasks.length,
        completedTasks.length,
        1
    );

    return {
        tasks,
        isLoading,
        activeTask,
        sensors,
        handleDragStart,
        handleDragEnd,
        todoTasks,
        inProgressTasks,
        reviewTasks,
        completedTasks,
        maxTasks,
    };
};
