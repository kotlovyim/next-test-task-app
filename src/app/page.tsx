import getCurrentDay from "@/utils/getCurrentDay";

export default function Home() {
    const { dayOfWeek, day, month, year } = getCurrentDay();

    return (
        <main className="bg-background px-8 py-10">
            <div>
                <h2 className="text-xl font-bold">My Tasks</h2>
                <p className="text-sm text-muted-foreground">
                    <span className="text-primary">{dayOfWeek}</span>, {day}{" "}
                    {month} {year}
                </p>
            </div>
        </main>
    );
}
