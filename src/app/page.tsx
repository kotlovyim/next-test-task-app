import KanbanBoard from "@/features/kanban/components/KanbanBoard";
import Greeting from "@/components/layout/Greeting";

export default function Home() {
    return (
        <main className="bg-background px-8 py-10 space-y-4 max-h-screen">
            <Greeting title="My Tasks" />
            <KanbanBoard />
        </main>
    );
}
