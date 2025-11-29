"use client";

import TaskCard from "./TaskCard";
import { DndContext, DragOverlay, closestCenter } from "@dnd-kit/core";
import { KanbanColumn } from "./KanbanColumn";
import { useKanBanTaskBoard } from "../hooks/useKanBanTaskBoard";

export default function KanbanBoard() {
    const {
        activeTask,
        sensors,
        handleDragStart,
        handleDragEnd,
        isLoading,
        todoTasks,
        inProgressTasks,
        reviewTasks,
        completedTasks,
        maxTasks,
    } = useKanBanTaskBoard();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">Loading tasks...</p>
            </div>
        );
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div className="space-y-6">
                <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
                    <KanbanColumn
                        id="todo"
                        title="To do"
                        count={todoTasks.length}
                        tasks={todoTasks}
                        maxTasks={maxTasks}
                    />
                    <KanbanColumn
                        id="inProgress"
                        title="In progress"
                        count={inProgressTasks.length}
                        tasks={inProgressTasks}
                        maxTasks={maxTasks}
                    />
                    <KanbanColumn
                        id="review"
                        title="Review"
                        count={reviewTasks.length}
                        tasks={reviewTasks}
                        maxTasks={maxTasks}
                    />
                    <KanbanColumn
                        id="completed"
                        title="Completed"
                        count={completedTasks.length}
                        tasks={completedTasks}
                        maxTasks={maxTasks}
                    />
                </div>
            </div>

            <DragOverlay>
                {activeTask ? (
                    <div className="rotate-3 cursor-grabbing">
                        <TaskCard
                            id={activeTask.id}
                            title={activeTask.title}
                            description={activeTask.description}
                            date={activeTask.date}
                        />
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    );
}
