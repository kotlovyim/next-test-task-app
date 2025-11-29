import getCurrentDay from "@/utils/getCurrentDay";

interface GreetingProps {
    title: string;
}

export default function Greeting({ title }: GreetingProps) {
    const { dayOfWeek, day, month, year } = getCurrentDay();
    return (
        <div>
            <h1 className="text-2xl font-semibold text-foreground mb-1">
                {title}
            </h1>
            <p className="text-sm">
                <span className="text-primary font-medium">{dayOfWeek}</span>,{" "}
                {day} {month} {year}
            </p>
        </div>
    );
}
